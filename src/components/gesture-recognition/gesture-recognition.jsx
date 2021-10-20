import {createPortal} from "react-dom";
import {useEffect, useState, useRef} from "react";
import * as tf from "@tensorflow/tfjs";
import * as handpose from "@tensorflow-models/handpose";
import Webcam from "react-webcam";
import * as fp from "fingerpose";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo, faVideoSlash} from '@fortawesome/free-solid-svg-icons'
import cn from "classnames";
import './styles.scss';
import {
    gestureMoveDefineTimeout,
    raisedHand,
    leftHandSwipeLeftPosition,
    leftHandSwipeRightPosition,
    rightHandSwipeLeftPosition, rightHandSwipeRightPosition
} from "../../constants";
import {useDispatch} from "react-redux";
import {rotateLeft, rotateRight, rotationStop} from "../../redux/actions";
import {
    leftHandSwipeLeftPositionGesture,
    leftHandSwipeRightPositionGesture,
    raisedHandGesture,
    rightHandSwipeLeftPositionGesture, rightHandSwipeRightPositionGesture
} from "../../gestureDescriptions";
import {useInterval} from "react-use";
// import {useWindowSize} from "react-use";

export const GestureRecognition = () => {
    // const {width, height} = useWindowSize();
    const dispatch = useDispatch();
    const [videoActive, setVideoActive] = useState(false);
    const [loadedPoses, setLoadedPoses] = useState(false);
    const [lastGesture, setLastGesture] = useState(null);
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
        // console.log("DETECT")
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
                const GE = new fp.GestureEstimator([raisedHandGesture, leftHandSwipeLeftPositionGesture, leftHandSwipeRightPositionGesture, rightHandSwipeLeftPositionGesture, rightHandSwipeRightPositionGesture]);
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
                    } else if (gestureName === leftHandSwipeLeftPosition || gestureName === leftHandSwipeRightPosition ||
                        gestureName === rightHandSwipeLeftPosition || gestureName === rightHandSwipeRightPosition) {
                        console.log('swipe')
                        if (!lastGesture) {
                            console.log('!lastGesture');
                        } else if (lastGesture.gestureName === gestureName) {
                            console.log('same')
                        } else {
                            console.log('not same')
                            if (Date.now() - lastGesture.timestamp <= gestureMoveDefineTimeout) {
                                if ((gestureName === leftHandSwipeRightPosition
                                    && lastGesture.gestureName === leftHandSwipeLeftPosition)
                                    || (gestureName === rightHandSwipeRightPosition &&
                                        lastGesture.gestureName === rightHandSwipeLeftPosition)
                                ) {
                                    console.log('rotateRight')
                                    dispatch(rotateRight())
                                } else if ((gestureName === leftHandSwipeLeftPosition
                                    && lastGesture.gestureName === leftHandSwipeRightPosition)
                                    || (gestureName === rightHandSwipeLeftPosition &&
                                        lastGesture.gestureName === rightHandSwipeRightPosition)
                                ) {
                                    {
                                        console.log('rotateLeft')
                                        dispatch(rotateLeft())
                                    }
                                }
                            }
                        }
                        setLastGesture({
                            gestureName,
                            timestamp: Date.now(),
                        })
                    }
                }
            }
        }
    };

    useEffect(() => console.log(lastGesture), [lastGesture]);

    const toggleVideoActive = async () => {
      if (loadedPoses) {
        if (videoActive) {
          setVideoActive(false);
          // if (detectionInterval) {
          //     clearInterval(detectionInterval);
          // };
        } else {
          setVideoActive(true);
          // const newDetectionInterval = setInterval(() => {
          //     detect(loadedPoses);
          // }, 10);
          // setDetectionInterval(newDetectionInterval);
        }
      }
    }

    useInterval(() => detect(loadedPoses), videoActive ? 30 : null);

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
        </div>, document.querySelector('.App'))}
        <div className={cn('video-container', videoActive && 'video-container_active',
            !loadedPoses && 'video-container_disabled')} onClick={loadedPoses ? toggleVideoActive : undefined}>
            <FontAwesomeIcon color={'grey'} icon={videoActive ? faVideo : faVideoSlash} />
        </div>
    </>
}