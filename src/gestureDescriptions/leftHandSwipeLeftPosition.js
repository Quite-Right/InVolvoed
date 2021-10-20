import * as fp from "fingerpose";
import {leftHandSwipeLeftPosition} from "../constants";

export const leftHandSwipeLeftPositionGesture = new fp.GestureDescription(leftHandSwipeLeftPosition);

// Thumb
leftHandSwipeLeftPositionGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl, 1.0);
leftHandSwipeLeftPositionGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.VerticalUp, 1.0);
leftHandSwipeLeftPositionGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalUpLeft, 0.8);

// Index
leftHandSwipeLeftPositionGesture.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 1.0);
leftHandSwipeLeftPositionGesture.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpLeft, 1);

// Middle
leftHandSwipeLeftPositionGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.NoCurl, 1.0);
leftHandSwipeLeftPositionGesture.addDirection(fp.Finger.Middle, fp.FingerDirection.DiagonalUpLeft, 1);

// Ring
leftHandSwipeLeftPositionGesture.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 1.0);
leftHandSwipeLeftPositionGesture.addDirection(fp.Finger.Ring, fp.FingerDirection.DiagonalUpLeft, 1);

// Pinky
leftHandSwipeLeftPositionGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.FullCurl, 1.0);
leftHandSwipeLeftPositionGesture.addDirection(fp.Finger.Pinky, fp.FingerDirection.DiagonalUpLeft, 1);