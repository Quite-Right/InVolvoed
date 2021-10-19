import React, {Suspense, useEffect, useReducer, useRef, useState} from "react";
import {Loader} from "../loader/loader";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, CubeCamera, ContactShadows, Shadow, PerspectiveCamera } from "@react-three/drei";
import Model from '../model/model';
import * as THREE from 'three';
import {useDispatch, useSelector} from "react-redux";
import {rotationSelector} from "../../redux/selectors";
import {Arrow} from 'vcc-ui';
import cn from 'classnames';
import './styles.scss';
import {rotateLeft, rotateRight} from "../../redux/actions";


const Scene = () => {
    const myCamera = useRef();
    useEffect(() => {
        // let rightmousemove;
        // document.addEventListener("mousedown", function(event){
        //     rightmousemove = false;
        //     if(event.button == 2){
        //         rightmousemove = true;
        //         return false;
        //         //   // Right click
        //     }
        // });
        // document.addEventListener("mousemove", function(event){
        //     if(rightmousemove === true){
        //         // Use stopImmediatePropagation to stop the other handeller from trigerring
        //         event.stopImmediatePropagation();
        //     }
        // });
    }, [])

    const rotation = useSelector(rotationSelector);
    const dispatch = useDispatch();

    return (
        <div className={'scene-container'}>
            <Canvas id={'three-scene'} shadowMap>
                <Suspense fallback={<Loader />}>
                    {/*<rectAreaLight position={new THREE.Vector3(1, 1, 1)}/>*/}
                    {/*<ambientLight*/}
                    {/*    castShadow={true} intensity={1} position={new THREE.Vector3(0, 3, 0)}*/}
                    {/*    shadowType={{*/}
                    {/*        enabled: true,*/}
                    {/*        type: THREE.BasicShadowMap,*/}
                    {/*    }}*/}
                    {/*/>*/}

                    {/*<PerspectiveCamera ref={myCamera}/>*/}
                    <Model />
                    <OrbitControls
                        target={new THREE.Vector3(0, 3, 0)}
                        enablePan={false}
                        autoRotate={!!rotation}
                        autoRotateSpeed={rotation}
                        maxDistance={12}
                        minDistance={7}
                        maxPolarAngle={-2 * Math.PI}
                        minPolarAngle={Math.PI / 2}
                        maxAzimuthAngle={0}
                        maxPolarAngle={2}
                    />
                    <Environment files={'./cube.hdr'} background={true} />
                </Suspense>
            </Canvas>
            {/*<div className={cn('arrow-container', 'arrow-container_left')} onClick={() => {*/}
            {/*    dispatch(rotateLeft())*/}
            {/*}}>*/}
            {/*    <Arrow direction="left" color="#333" size={30} />*/}
            {/*</div>*/}
            {/*<div className={cn('arrow-container', 'arrow-container_right')} onClick={() => {*/}
            {/*    dispatch(rotateRight())*/}
            {/*}}>*/}
            {/*    <Arrow direction="right" color="#333" size={30} />*/}
            {/*</div>*/}
            {/*<div className={cn('rotation-stop-container')}></div>*/}
        </div>
    );
}

export default Scene;