import React, {useEffect, useRef, useState} from 'react'
import {useAnimations, useGLTF} from '@react-three/drei'
import {useLoader} from "@react-three/fiber";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from 'three';
import {useDispatch} from "react-redux";
import {AnimationActionCreator, defineAnimationActionOrder} from "../../utils";
import {saveConfiguratorActionsState} from "../../redux/actions/configurator-actions";
import {defineAnimationActionLabel} from "../../utils/define-animation-action-label";
import {useInterval} from "react-use";
const MODEL_URL = './auto35.gltf';

export default function Model({color, dispatch, actionsState, lang}) {
    const  group = useRef();
    const gltf = useLoader(GLTFLoader, MODEL_URL);
    const {scene , materials, animations, nodes} = gltf;
    const [[wheelMaterial, glassMaterial], setMaterials] = useState([undefined, undefined]);
    const {clips, mixer} = useAnimations(animations, scene);
    const [carActions, setCarActions] = useState();
    const [wheelMaterialAnimationRedIncrease, setWheelMaterialAnimationRedIncrease] = useState(true);
    const [glassMaterialAnimationRedIncrease, setGlassMaterialAnimationRedIncrease] = useState(true);

    useEffect(() => {
        console.log(materials)
        if (color) {
            materials['MetallicBlue'].color = color;
        }
    }, [color])

    // скрыть Mesh'ы, необходимые для смены материала
    useEffect(() => {
        if (nodes) {
            console.log(nodes, materials)
            const nodeNamesToHide = ['Sphere'];
            nodeNamesToHide.forEach(nodeNameToHide => {
                const nodeToHide = nodes[nodeNameToHide];
                if (nodeToHide) {
                    nodeToHide.visible = false;
                }
            })
        }
    }, [])

    // создание анимаций
    useEffect(() => {
        const newCarActions = {};

        const GlassMaterial = materials['glass'];
        const RedGlassMaterial = GlassMaterial.clone();
        const WheelMaterial = materials['Rubber_Rough'];
        const RedWheelMaterial = WheelMaterial.clone();

        setMaterials((materials) => {
            const newMaterials = [...materials];
            newMaterials[0] = RedWheelMaterial;
            newMaterials[1] = RedGlassMaterial;
            return newMaterials;
        })

        clips.forEach((clip, index) => {
                const clipClone = clip.clone();
                const object = scene.children.find(({name}) => name === clip.name.replace('Open', '').replace('Window', ''));
                if (object) {
                    console.log(object)
                    const newAction = mixer.clipAction( clipClone, object);
                    newAction.clampWhenFinished = true;
                    newAction.setLoop(THREE.LoopPingPong);
                    newAction.repetitions = 0;
                    newCarActions[clip.name.replace('Open', 'Toggle')] = new AnimationActionCreator(function ()  {
                        if (clip.name.includes('Window')) {
                            console.log(clip.name)
                            if (this.repetitions % 2 === 0
                            && nodes[clip.name.replace('Open', '')]?.children[0]?.children[0]?.material) {
                                console.log(1)
                                nodes[clip.name.replace('Open', '')].children[0].children[0].material = RedGlassMaterial;
                            } else if (nodes[clip.name.replace('Open', '')]?.children[0]?.children[0]?.material) {
                                nodes[clip.name.replace('Open', '')].children[0].children[0].material = GlassMaterial;
                            }
                        }
                        newAction.play();
                        newAction.paused = false ;
                        newAction.repetitions += 1 ;
                    });
                }
        });


        Object.keys(nodes).forEach(nodeName => {
            if (nodeName.includes('WheelTire')) {
                newCarActions[`Toggle${nodeName}`] = new AnimationActionCreator(function () {
                    if (this.repetitions % 2 === 0) {
                        nodes[nodeName].material = RedWheelMaterial
                    } else {
                        nodes[nodeName].material = WheelMaterial
                    }
                })
            }
        })
        setCarActions(newCarActions);
    }, [])

    useEffect(() => {
        if (carActions) {
            const newConfiguratorActionsState = {};
            Object.keys(carActions).forEach(actionName => {
                newConfiguratorActionsState[actionName] = {
                    label: defineAnimationActionLabel(actionName),
                    order: defineAnimationActionOrder(actionName),
                    repetitions: 0
                }
            })
            dispatch(saveConfiguratorActionsState(newConfiguratorActionsState))
        }
    }, [carActions])

    useEffect(() => {
        Object.keys(actionsState).forEach(action => {
            if (carActions[action].repetitions % 2 !== actionsState[action].repetitions % 2) {
                carActions[action].play();
            }
        })
    }, [actionsState, carActions])

    useInterval(() => {
        if (wheelMaterialAnimationRedIncrease) {
            wheelMaterial.color.r += 0.025;
            if (wheelMaterial.color.r >= 0.5) {
                setWheelMaterialAnimationRedIncrease(false);
            }
        } else {
            wheelMaterial.color.r -= 0.025;
            if (wheelMaterial.color.r <= 0) {
                setWheelMaterialAnimationRedIncrease(true);
            }
        }
        if (glassMaterialAnimationRedIncrease) {
            glassMaterial.color.r += 30 / 20;
            if (glassMaterial.color.r >= 30) {
                setGlassMaterialAnimationRedIncrease(false);
            }
        } else {
            glassMaterial.color.r -= 30 / 20;
            if (glassMaterial.color.r <= 1) {
                setGlassMaterialAnimationRedIncrease(true);
            }
        }
    }, wheelMaterial && glassMaterial ? 70 : 0)

    return (
        <primitive object={gltf.scene} scale={1} ref={group} />
    );
}

useGLTF.preload('/auto3.gltf')