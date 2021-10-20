import * as fp from "fingerpose";
import {rightHandSwipeRightPosition} from "../constants";

export const rightHandSwipeRightPositionGesture = new fp.GestureDescription(rightHandSwipeRightPosition);

// Thumb
rightHandSwipeRightPositionGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl, 1.0);
rightHandSwipeRightPositionGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.VerticalUp, 1);

// Index
rightHandSwipeRightPositionGesture.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 1.0);
rightHandSwipeRightPositionGesture.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpRight, 1);

// Middle
rightHandSwipeRightPositionGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.NoCurl, 1.0);
rightHandSwipeRightPositionGesture.addDirection(fp.Finger.Middle, fp.FingerDirection.DiagonalUpRight, 1);

// Ring
rightHandSwipeRightPositionGesture.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 1.0);
rightHandSwipeRightPositionGesture.addCurl(fp.Finger.Ring, fp.FingerCurl.HalfCurl, 1.0);
rightHandSwipeRightPositionGesture.addDirection(fp.Finger.Ring, fp.FingerDirection.DiagonalUpRight, 1);

// Pinky
rightHandSwipeRightPositionGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.FullCurl, 1.0);
rightHandSwipeRightPositionGesture.addCurl(fp.Finger.Ring, fp.FingerCurl.HalfCurl, 1.0);
rightHandSwipeRightPositionGesture.addDirection(fp.Finger.Pinky, fp.FingerDirection.DiagonalUpRight, 1);