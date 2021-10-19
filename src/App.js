import React, {Suspense, useEffect, useRef, useState} from "react";
import "./styles.scss";
import { Provider as ReduxProvider } from "react-redux";
import store from "./redux/store";
import Scene from './components/scene/scene'
import {VoiceRecognition} from "./components/voice-recognition/voice-recognition";
import {GestureRecognition} from "./components/gesture-recognition/gesture-recognition";
import {useMediaDevices} from "react-use";

export default function App() {
    const devices = useMediaDevices();
    const [{hasMic, hasVideo}, setDevicesAvailablity] = useState({
        hasMic: false,
        hasVideo: false,
    });

    useEffect(() => {
        console.log(devices.devices)
        let hasMic = false;
        let hasVideo = false;
        devices?.devices?.forEach(device => {
            if (device.kind === 'audioinput') {
                hasMic = true;
            } else if (device.kind === 'videoinput') {
                hasVideo = true;
            }  else {
                console.log(device.kind)
            }
        })

        setDevicesAvailablity({
            hasMic,
            hasVideo,
        })

    }, [devices])

    return (
        <ReduxProvider store={store}>
        <div className="App">
            <Scene />
            <div className="button-group">
                {hasMic && <VoiceRecognition />}
                { hasVideo && <GestureRecognition />}
            </div>
        </div>
        </ReduxProvider>
    );
}

