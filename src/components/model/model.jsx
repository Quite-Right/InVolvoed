import React, {useEffect, useRef, useState} from 'react'
import {useAnimations, useGLTF} from '@react-three/drei'
import {useLoader} from "@react-three/fiber";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from 'three';
import {useDispatch} from "react-redux";
import {AnimationActionCreator} from "../../utils";
import {saveConfiguratorActionsState} from "../../redux/actions/configurator-actions";
import {defineAnimationActionLabel} from "../../utils/define-animation-action-label";
const MODEL_URL = './auto33.gltf';

export default function Model({color, dispatch, actionsState}) {
    const  group = useRef();
    const gltf = useLoader(GLTFLoader, MODEL_URL);
    const {scene , materials, animations, nodes} = gltf;
    const [[windowMaterial], setMaterials] = useState([]);
    const {actions, clips, mixer} = useAnimations(animations, scene);
    const [carActions, setCarActions] = useState();

    useEffect(() => {
        if (color) {
            materials['MetallicBlue'].color = color;
        }
    }, [color])

    // useEffect(() => {
    //     const windowMaterial = materials['glass_w'];
    //
    //     const newWindowMaterial = windowMaterial.clone();
    //
    //     newWindowMaterial.change-color-button = new THREE.Color(10, 1, 1);
    //
    //     setMaterials((materials) => {
    //         const newMaterialsArray = [...materials];
    //         newMaterialsArray[0] = newWindowMaterial;
    //         return newMaterialsArray;
    //     });
    // }, [materials])

    // const toggleLeftFrontWindowWarning = () => {
    //     const window = nodes['FrontLeftDoorWindow'];
    //     console.log(window);
    //     if (window.material === materials['glass_w']) {
    //         console.log(1);
    //         window.material = windowMaterial;
    //     } else {
    //         console.log(2);
    //         window.material = materials['glass_w'];
    //     }
    // }
    //
    // useEffect(() => {
    //     toggleLeftFrontWindowWarning();
    // }, [])

    // скрыть Mesh'ы, необходимые для смены материала
    useEffect(() => {
        if (nodes) {
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
        clips.forEach((clip, index) => {
                const clipClone = clip.clone();
                const object = scene.children.find(({name}) => name === clip.name.replace('Open', '').replace('Window', ''));
                if (object) {
                    const newAction = mixer.clipAction( clipClone, object);
                    newAction.clampWhenFinished = true;
                    newAction.setLoop(THREE.LoopPingPong);
                    newAction.repetitions = 0;
                    newCarActions[clip.name.replace('Open', 'Toggle')] = new AnimationActionCreator(() => {
                        newAction.play();
                        newAction.paused = false ;
                        newAction.repetitions += 1 ;
                    });
                }
        });
        setCarActions(newCarActions);
        // dispatch
    }, [])

    useEffect(() => {
        if (carActions) {
            const newConfiguratorActionsState = {};
            Object.keys(carActions).forEach(actionName => {
                newConfiguratorActionsState[actionName] = {
                    label: defineAnimationActionLabel(actionName),
                    repetitions: 0
                }
            })
            dispatch(saveConfiguratorActionsState(newConfiguratorActionsState))
        }
    }, carActions)

    useEffect(() => {
        Object.keys(actionsState).forEach(action => {
            if (carActions[action].repetitions % 2 !== actionsState[action].repetitions % 2) {
                carActions[action].play();
            }
        })
    }, [actionsState, carActions])

    // тест работы действий - потом заменить на выполнение действий
    // useEffect(() => {
    //     if (carActions) {
    //
    //         setTimeout(() => {
    //             carActions['FrontLeftDoorToggle'].play();
    //             carActions['FrontLeftDoorWindowToggle'].play();
    //             // carActions['BackLeftDoorWindowToggle']();
    //             // carActions['TrunkToggle']();
    //             // setTimeout(carActions['FrontRightDoorWindowToggle'], 2000)
    //             // setTimeout(carActions['BackRightDoorToggle'], 2000)
    //             // setTimeout(carActions['BackRightDoorWindowToggle'], 2000)
    //             // setTimeout(carActions['TrunkToggle'], 2000)
    //
    //
    //         }, 5000)
    //     }
    // }, [actionsState, carActions])

    return (
        <primitive object={gltf.scene} scale={1} ref={group} />
    );
}

useGLTF.preload('/auto3.gltf')