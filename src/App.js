// 0. Install fingerpose npm install fingerpose
// 1. Add Use State
// 2. Import emojis and finger pose import * as fp from "fingerpose";
// 3. Setup hook and emoji object
// 4. Update detect function for gesture handling
// 5. Add emoji display to the screen
// import React, { useRef, useState, useEffect } from "react";
import React, {Suspense, useRef} from "react";
import "./App.css";
// import VolvoCar from "./components/volvo-car/volvo-car";
// import {Loader} from "./components/loader/loader";
// import { Canvas } from "@react-three/fiber";
// import { useLoader } from "@react-three/fiber";
// import { Environment, OrbitControls } from "@react-three/drei";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// import Model from './components/model/model';
import VoiceRecognition from "./components/voice-recognition/voice-recognition";
import Scene from './components/scene/scene'
import {GestureRecognition} from "./components/gesture-recognition/gesture-recognition";

export default function App() {
    const appRef = useRef(null);

    return (
        <div className="App" ref={appRef}>
            <Scene />

            <div className="button-group">
            {/*    <VoiceRecognition />*/}
                <GestureRecognition appRef={appRef}/>
            </div>
        </div>
    );
}

