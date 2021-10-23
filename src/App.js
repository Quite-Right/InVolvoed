import React, {useEffect, useState} from "react";
import "./styles.scss";
import {Provider as ReduxProvider, useSelector} from "react-redux";
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import store from "./redux/store";
import Scene from './components/scene/scene'
import {VoiceRecognition} from "./components/voice-recognition/voice-recognition";
import {GestureRecognition} from "./components/gesture-recognition/gesture-recognition";
import {useMediaDevices} from "react-use";
import Lock from "./components/lock/lock";
import {ChangeColorButton} from "./components/change-color-button/change-color-button";
import Climatization from "./components/climatization/climatization";
import Engine from "./components/engine/engine";
import Honk from "./components/honk/honk";
import Flash from "./components/flash/flash";

// optional configuration
const options = {
    // you can also just use 'bottom center'
    position: positions.BOTTOM_RIGHT,
    timeout: 3000,
    offset: '30px',
    // you can also just use 'scale'
    transition: transitions.SCALE
}

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
            } else {
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
            <AlertProvider template={AlertTemplate} {...options}>
                <div className="App">
                    <Scene />
                    <div className="button-group">
                        {hasMic && <VoiceRecognition />}
                        {hasVideo && <GestureRecognition />}
                        <Engine />
                        <Lock />
                        <Climatization />
                        <Honk />
                        <Flash />
                        <ChangeColorButton color={{
                            b: 0.0029885650146752596,
                            g: 0.0006998085300438106,
                            r: 0.12370066344738007,
                        }}/>
                        <ChangeColorButton color={{
                            b: 0.13285456597805023,
                            g: 0.0010034418664872646,
                            r: 0,
                        }}/>
                    </div>
                </div>
            </AlertProvider>
        </ReduxProvider>
    );
}

