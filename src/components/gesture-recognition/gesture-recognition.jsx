import {createPortal} from "react-dom";
import {useEffect, useState, useRef} from "react";
import * as tf from "@tensorflow/tfjs";
import * as handpose from "@tensorflow-models/handpose";
import Webcam from "react-webcam";
import { drawHand } from "../../utils";
import * as fp from "fingerpose";
import victory from "../../images/victory.png";
import thumbs_up from "../../images/thumbs_up.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo, faVideoSlash} from '@fortawesome/free-solid-svg-icons'
import cn from "classnames";
import './styles.scss';
import {useMediaDevices} from "react-use";
import {raisedHandGesture} from "../../gestureDescriptions/raisedHand";

export const GestureRecognition = ({appRef}) => {
    const [videoActive, setVideoActive] = useState(false);
    const [detectionInterval, setDetectionInterval] = useState(null);
    const [loadedPoses, setLoadedPoses] = useState(false);
    const webcamRef = useRef(null);
    const canvasRef = useRef(null);

    const [pose, setPose] = useState(null);
    const images = { thumbs_up: thumbs_up, victory: victory };


    useEffect(async () => {
        const net = await handpose.load();
        setLoadedPoses(net);
        toggleVideoActive();
        }, []);

    const runHandpose = async () => {
      const net = await handpose.load();
      console.log("Handpose model loaded.");
      //  Loop and detect hands
      setInterval(() => {
        detect(net);
      }, 10);
    };

    const detect = async (net) => {
      // Check data is available
      if (
        typeof webcamRef.current !== "undefined" &&
        webcamRef.current !== null &&
        webcamRef.current.video.readyState === 4
      ) {
        // Get Video Properties
        const video = webcamRef.current.video;
        const videoWidth = webcamRef.current.video.videoWidth;
        const videoHeight = webcamRef.current.video.videoHeight;

        // Set video width
        webcamRef.current.video.width = videoWidth;
        webcamRef.current.video.height = videoHeight;

        // Set canvas height and width
        canvasRef.current.width = videoWidth;
        canvasRef.current.height = videoHeight;

        // Make Detections
        const hand = await net.estimateHands(video);
        // console.log(hand);


        if (hand.length > 0) {
          const GE = new fp.GestureEstimator([raisedHandGesture]);
          const gesture = await GE.estimate(hand[0].landmarks, 4);
          if (gesture.gestures !== undefined && gesture.gestures.length > 0) {
            // console.log(gesture.gestures);

            const confidence = gesture.gestures.map(
              (prediction) => prediction.confidence
            );
            const maxConfidence = confidence.indexOf(
              Math.max.apply(null, confidence)
            );
            // console.log(gesture.gestures[maxConfidence].name);
            setPose(gesture.gestures[maxConfidence].name);
            console.log(pose);
          }
        }


        // Draw mesh
        const ctx = canvasRef.current.getContext("2d");
        drawHand(hand, ctx);
      }
    };

    // useEffect(()=>{runHandpose()},[]);

    const toggleVideoActive = async () => {
        if (videoActive) {
            setVideoActive(false);
            if (detectionInterval) {
                clearInterval(detectionInterval);
            };
        } else {
            setVideoActive(true);
            setInterval(() => {
                detect(loadedPoses);
            }, 10);
        }
    }

    return  <>
        {videoActive && createPortal(<div className={'gesture-recognition-container'}>
            <Webcam
                ref={webcamRef}
                style={{
                    position: "absolute",
                    marginLeft: "auto",
                    marginRight: "auto",
                    left: 0,
                    top: 0,
                    textAlign: "center",
                    zindex: 9,
                    width: 640,
                    height: 480,
                }}
            />

            <canvas
                ref={canvasRef}
                className={'gesture-canvas'}
            />

            {pose !== null ? (
                <img
                    src={images[pose]}
                    style={{
                        position: "absolute",
                        marginLeft: "auto",
                        marginRight: "auto",
                        left: 400,
                        bottom: 500,
                        right: 0,
                        textAlign: "center",
                        height: 100,
                    }}
                />
            ) : (
                ""
            )}
        </div>, document.querySelector('.App'))}
        <div className={cn('video-container', videoActive && 'video-container_active',
            !loadedPoses && 'video-container_disabled')} onClick={loadedPoses ? toggleVideoActive : undefined}>
            <FontAwesomeIcon color={'grey'} icon={videoActive ? faVideo : faVideoSlash} />
        </div>
    </>
}

