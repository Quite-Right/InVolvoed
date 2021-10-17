import React, {useEffect, useRef, useState} from 'react'
import {useAnimations, useGLTF} from '@react-three/drei'
import {useLoader} from "@react-three/fiber";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from 'three';

const MODEL_URL = './auto14.gltf';

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

    useEffect(() => {
        const newCarActions = {};
        clips.forEach((clip, index) => {
            const clipClone = clip.clone();
            const newAction = mixer.clipAction( clipClone, scene.children[0]);
            newAction.clampWhenFinished = true;
            newAction.setLoop(THREE.LoopPingPong);
            newAction.repetitions = 0;
            newCarActions[clip.name.replace('Open', 'Toggle')] = () => {
                newAction.play();
                newAction.paused = false ;
                newAction.repetitions += 1 ;
            };
        });
        console.log(newCarActions);
        setCarActions(newCarActions);
    }, [])

    useEffect(() => {
        if (carActions) {

            setTimeout(() => {
                carActions['FrontLeftDoorToggle']();
                setTimeout(carActions['FrontLeftDoorToggle'], 2000)
            }, 5000)
        }
    }, [carActions])

    // useEffect(sc)

    return (
        <>
            <primitive object={gltf.scene} scale={1} ref={group} />
        </>
    );
}

useGLTF.preload('/auto3.gltf')