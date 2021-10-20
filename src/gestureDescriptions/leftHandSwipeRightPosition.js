import * as fp from "fingerpose";
import {leftHandSwipeRightPosition} from "../constants";

export const leftHandSwipeRightPositionGesture = new fp.GestureDescription(leftHandSwipeRightPosition);

// Thumb
leftHandSwipeRightPositionGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl, 1.0);
leftHandSwipeRightPositionGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.HorizontalRight, 1);

// Index
leftHandSwipeRightPositionGesture.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 1.0);
leftHandSwipeRightPositionGesture.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpRight, 1);

// Middle
leftHandSwipeRightPositionGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.NoCurl, 1.0);
leftHandSwipeRightPositionGesture.addDirection(fp.Finger.Middle, fp.FingerDirection.DiagonalUpRight, 1);

// Ring
leftHandSwipeRightPositionGesture.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 1.0);
leftHandSwipeRightPositionGesture.addDirection(fp.Finger.Ring, fp.FingerDirection.DiagonalUpRight, 1);

// Pinky
leftHandSwipeRightPositionGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.FullCurl, 1.0);
leftHandSwipeRightPositionGesture.addDirection(fp.Finger.Pinky, fp.FingerDirection.DiagonalUpRight, 1);