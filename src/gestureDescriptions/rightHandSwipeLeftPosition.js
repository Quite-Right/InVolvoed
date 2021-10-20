import * as fp from "fingerpose";
import {rightHandSwipeLeftPosition} from "../constants";

export const rightHandSwipeLeftPositionGesture = new fp.GestureDescription(rightHandSwipeLeftPosition);

// Thumb
rightHandSwipeLeftPositionGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl, 1.0);
rightHandSwipeLeftPositionGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.HorizontalLeft, 1.0);

// Index
rightHandSwipeLeftPositionGesture.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 1.0);
rightHandSwipeLeftPositionGesture.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpLeft, 1);

// Middle
rightHandSwipeLeftPositionGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.NoCurl, 1.0);
rightHandSwipeLeftPositionGesture.addDirection(fp.Finger.Middle, fp.FingerDirection.DiagonalUpLeft, 1);

// Ring
rightHandSwipeLeftPositionGesture.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 1.0);
rightHandSwipeLeftPositionGesture.addCurl(fp.Finger.Ring, fp.FingerCurl.HalfCurl, 1.0);
rightHandSwipeLeftPositionGesture.addDirection(fp.Finger.Ring, fp.FingerDirection.DiagonalUpLeft, 1);

// Pinky
rightHandSwipeLeftPositionGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.FullCurl, 1.0);
rightHandSwipeLeftPositionGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.HalfCurl, 1.0);
rightHandSwipeLeftPositionGesture.addDirection(fp.Finger.Pinky, fp.FingerDirection.DiagonalUpLeft, 1);