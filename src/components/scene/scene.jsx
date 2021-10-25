import React, {Suspense} from "react";
import {Loader} from "../loader/loader";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls} from "@react-three/drei";
import Model from '../model/model';
import * as THREE from 'three';
import {useDispatch, useSelector} from "react-redux";
import {
    carColorSelector,
    configuratorActionsSelector,
    lanuageCodeSelector,
    rotationSelector
} from "../../redux/selectors";
import SceneControls from "../scene-controls/scene-controls";
import './styles.scss';

const Scene = () => {
    const rotation = useSelector(rotationSelector);
    const carColor = useSelector(carColorSelector);
    const dispatch = useDispatch();
    const actionsState = useSelector(configuratorActionsSelector);
    const lang = useSelector(lanuageCodeSelector);

    return (
        <div className={'scene-container'}>
            <Canvas id={'three-scene'}>
                <Suspense fallback={<Loader />}>
                    <Model color={carColor} dispatch={dispatch} actionsState={actionsState} lang={lang} />
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
            <SceneControls />
        </div>
    );
}

export default Scene;