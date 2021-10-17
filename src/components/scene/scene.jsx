import React, {Suspense} from "react";
import {Loader} from "../loader/loader";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import Model from '../model/model';

const Scene = () => {
    return (
            <Canvas id={'three-scene'}>
                <Suspense fallback={<Loader />}>
                    <Model />
                    <OrbitControls />
                    <Environment preset="night" background={true} />
                </Suspense>
            </Canvas>
    );
}

export default Scene;