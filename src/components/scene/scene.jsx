import React, {Suspense, useEffect} from "react";
import {Loader} from "../loader/loader";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls} from "@react-three/drei";
import Model from '../model/model';
import * as THREE from 'three';
import {useDispatch, useSelector} from "react-redux";
import {carColorSelector, rotationSelector} from "../../redux/selectors";
import {Arrow} from 'vcc-ui';
import cn from 'classnames';
import {rotateLeft, rotateRight} from "../../redux/actions";
import './styles.scss';


const Scene = () => {
    const rotation = useSelector(rotationSelector);
    const dispatch = useDispatch();
    const carColor = useSelector(carColorSelector);
    console.log(carColor)

    return (
        <div className={'scene-container'}>
            <Canvas id={'three-scene'}>
                <Suspense fallback={<Loader />}>
                    <Model color={carColor} />
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
                    />
                    <Environment files={'./cube.hdr'} background={true} />
                </Suspense>
            </Canvas>
            <div className={cn('arrow-container', 'arrow-container_left')} onClick={() => {
                dispatch(rotateLeft())
            }}>
                <Arrow direction="left" color="#333" size={30} />
            </div>
            <div className={cn('arrow-container', 'arrow-container_right')} onClick={() => {
                dispatch(rotateRight())
            }}>
                <Arrow direction="right" color="#333" size={30} />
            </div>
            <div className={cn('rotation-stop-container')}></div>
        </div>
    );
}

export default Scene;