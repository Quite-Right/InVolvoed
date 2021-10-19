import {createPortal} from "react-dom";
import {useEffect, useState, useRef} from "react";
import * as tf from "@tensorflow/tfjs";
import * as handpose from "@tensorflow-models/handpose";
import Webcam from "react-webcam";
import { drawHand } from "../../utils";
import * as fp from "fingerpose";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo, faVideoSlash} from '@fortawesome/free-solid-svg-icons'
import cn from "classnames";
import './styles.scss';
import {gestureMoveDefineTimeout, raisedHand, swipeLeftHand, swipeRightHand} from "../../constants";
import {useDispatch} from "react-redux";
import {rotateLeft, rotateRight, rotationStop} from "../../redux/actions";
import {swipeLeftGesture, swipeRightGesture, raisedHandGesture} from "../../gestureDescriptions";
// import {useWindowSize} from "react-use";

export const GestureRecognition = () => {
    // const {width, height} = useWindowSize();
    const dispatch = useDispatch();
    const [videoActive, setVideoActive] = useState(false);
    const [detectionInterval, setDetectionInterval] = useState(null);
    const [loadedPoses, setLoadedPoses] = useState(false);
    const [swipeGestureLast, setSwipeGestureLast] = useState(null);
    // TODO добавить обработку зума жестами (?)
    const webcamRef = useRef(null);
    const canvasRef = useRef(null);

    useEffect( () => {
      const loadPoses = async () => {
        const net = await handpose.load();
        setLoadedPoses(net);
      }
      loadPoses();
    }, []);

    const detect = async (net) => {
      // Check data is available
      if (
        typeof webcamRef.current !== "undefined" &&
        webcamRef.current !== null &&
        webcamRef.current.video.readyState === 4
      ) {
        // Get Video Properties
        const video = webcamRef.current.video;
        const videoWidth = video.videoWidth;
        const videoHeight = video.videoHeight;

        // Set video width
        webcamRef.current.video.width = videoWidth;
        webcamRef.current.video.height = videoHeight;

        // Set canvas height and width
        canvasRef.current.width = videoWidth;
        canvasRef.current.height = videoHeight;

        // Make Detections
        const hand = await net.estimateHands(video);

        if (hand.length > 0) {
          const GE = new fp.GestureEstimator([raisedHandGesture, swipeLeftGesture, swipeRightGesture]);
          const gesture = await GE.estimate(hand[0].landmarks, 8);
          if (gesture.gestures !== undefined && gesture.gestures.length > 0) {
            // console.log(gesture.gestures);

            const confidence = gesture.gestures.map(
              (prediction) => prediction.confidence
            );
            const maxConfidence = confidence.indexOf(
              Math.max.apply(null, confidence)
            );
            const gestureName = gesture.gestures[maxConfidence].name;
            console.log(gestureName);

            if (gestureName === raisedHand) {
                dispatch(rotationStop());
                setSwipeGestureLast(null)
            } else if (gestureName === swipeLeftHand || gestureName === swipeRightHand) {
                console.log('swipe')
                if (!swipeGestureLast) {
                    console.log('!swipeGestureLast');
                    setSwipeGestureLast({
                        gestureName,
                        timeout: setTimeout(() => {setSwipeGestureLast(null)}, gestureMoveDefineTimeout)
                    })
                } else if (swipeGestureLast.gestureName === gestureName) {
                    console.log('same')
                    setSwipeGestureLast(swipeGestureLast => {
                        clearTimeout(swipeGestureLast.timeout)
                        return {
                            gestureName,
                            timeout: setTimeout(() => {setSwipeGestureLast(null)}, gestureMoveDefineTimeout)
                        }
                    })
                } else {
                    console.log('not same')
                    setSwipeGestureLast(swipeGestureLast => {
                        clearTimeout(swipeGestureLast.timeout)
                        return {
                            gestureName,
                            timeout: setTimeout(() => {setSwipeGestureLast(null)}, gestureMoveDefineTimeout)
                        }
                    })
                    if (gestureName === swipeRightHand) {
                        console.log('rotateRight')
                        dispatch(rotateRight())
                    } else {
                        console.log('rotateLeft')
                        dispatch(rotateLeft())
                    }
                }
            }
          }
        }


        // Draw mesh
        const ctx = canvasRef.current.getContext("2d");
        drawHand(hand, ctx);
      }
    };

    useEffect(() => console.log(swipeGestureLast), [swipeGestureLast]);

    const toggleVideoActive = async () => {
      if (loadedPoses) {
        if (videoActive) {
          setVideoActive(false);
          if (detectionInterval) {
              clearInterval(detectionInterval);
          };
        } else {
          setVideoActive(true);
          const newDetectionInterval = setInterval(() => {
              detect(loadedPoses);
          }, 10);
          setDetectionInterval(newDetectionInterval);
        }
      }
    }

    // Unmounting hook
    // useEffect(() => {
    //     return () => {
    //         if (detectionInterval) {
    //             clearInterval(detectionInterval);
    //         } else if (swipeGestureLast) {
    //             clearTimeout(swipeGestureLast.timeout)
    //         }
    //     }
    // }, [detectionInterval, swipeGestureLast]);

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
                    width: 320,
                    height: 240,
                }}
            />
            <canvas
                ref={canvasRef}
                className={'gesture-canvas'}
            />
        </div>, document.querySelector('.App'))}
        <div className={cn('video-container', videoActive && 'video-container_active',
            !loadedPoses && 'video-container_disabled')} onClick={loadedPoses ? toggleVideoActive : undefined}>
            <FontAwesomeIcon color={'grey'} icon={videoActive ? faVideo : faVideoSlash} />
        </div>
    </>
}

