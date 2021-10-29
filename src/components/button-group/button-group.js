import React, {useEffect, useState} from "react";
import "./styles.scss";
import {VoiceRecognition} from "../voice-recognition/voice-recognition";
import {GestureRecognition} from "../gesture-recognition/gesture-recognition";
import {useMediaDevices} from "react-use";
import Lock from "../lock/lock";
import {ChangeColorButton} from "../change-color-button/change-color-button";
import Climatization from "../climatization/climatization";
import Engine from "../engine/engine";
import Honk from "../honk/honk";
import Flash from "../flash/flash";
import Configurator from "../configurator/configurator";
import LanguageButton from "../language-button/language-button";
import Info from "../info/info";

export default function ButtonGroup() {
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
        <div className="button-group">
            <Info />
            <Configurator />
            {hasMic && <VoiceRecognition />}
            {hasVideo && <GestureRecognition />}
            <Engine />
            <Lock />
            <Climatization />
            <Honk />
            <Flash />
            <LanguageButton />
            <ChangeColorButton />
        </div>
    );
}