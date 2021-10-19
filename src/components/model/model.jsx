import React, {useEffect, useRef, useState} from 'react'
import {useAnimations, useGLTF} from '@react-three/drei'
import {useLoader} from "@react-three/fiber";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from 'three';
import shadowImage from '../../images/BakedShadow.png'

const MODEL_URL = './auto33.gltf';

export default function Model(props) {
    const  group = useRef();
    const gltf = useLoader(GLTFLoader, MODEL_URL);
    const {scene , materials, animations, nodes} = gltf;
    const [[windowMaterial], setMaterials] = useState([]);
    console.log(gltf)
    const {actions, clips, mixer} = useAnimations(animations, scene);
    const [carActions, setCarActions] = useState();

    // useEffect(() => {
    //     const windowMaterial = materials['glass_w'];
    //
    //     const newWindowMaterial = windowMaterial.clone();
    //
    //     newWindowMaterial.color = new THREE.Color(10, 1, 1);
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
            console.log(nodes);
            const nodeNamesToHide = ['Sphere'];
            nodeNamesToHide.forEach(nodeNameToHide => {
                const nodeToHide = nodes[nodeNameToHide];
                if (nodeToHide) {
                    nodeToHide.visible = false;
                }
            })
        }
    }, [])

    // применить материалы в зависимости от текущего материала
    useEffect(() => {
        for (const key in nodes) {
            if (nodes[key].material?.name === 'MetallicBlue')
            nodes[key].material = materials['MetallicRed']
        }
    }, [])

    // создание анимаций
    useEffect(() => {
        console.log(clips)
        const newCarActions = {};
        clips.forEach((clip, index) => {
                const clipClone = clip.clone();
                const object = scene.children.find(({name}) => name === clip.name.replace('Open', '').replace('Window', ''));
                if (object) {
                    const newAction = mixer.clipAction( clipClone, object);
                    newAction.clampWhenFinished = true;
                    newAction.setLoop(THREE.LoopPingPong);
                    newAction.repetitions = 0;
                    newCarActions[clip.name.replace('Open', 'Toggle')] = () => {
                        newAction.play();
                        newAction.paused = false ;
                        newAction.repetitions += 1 ;
                    };
                }


        });
        console.log(newCarActions);
        setCarActions(newCarActions);
    }, [])

    // тест работы действий - потом заменить на выполнение действий
    useEffect(() => {
        if (carActions) {

            setTimeout(() => {
                // carActions['FrontLeftDoorToggle']();
                // carActions['FrontLeftDoorWindowToggle']();
                // carActions['BackLeftDoorWindowToggle']();
                carActions['TrunkToggle']();
                setTimeout(carActions['FrontRightDoorWindowToggle'], 2000)
                setTimeout(carActions['BackRightDoorToggle'], 2000)
                setTimeout(carActions['BackRightDoorWindowToggle'], 2000)
                setTimeout(carActions['TrunkToggle'], 2000)


            }, 5000)
        }
    }, [carActions])

    return (
        <>
            <primitive object={gltf.scene} scale={1} ref={group} />
        </>
    );
}

useGLTF.preload('/auto3.gltf')