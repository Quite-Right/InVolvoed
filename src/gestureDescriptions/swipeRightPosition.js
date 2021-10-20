import * as fp from "fingerpose";
import {swipeRightPosition} from "../constants";

export const swipeRightPositionGesture = new fp.GestureDescription(swipeRightPosition);

// Thumb
swipeRightPositionGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.FullCurl, 1.0);

// Index
swipeRightPositionGesture.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 1.0);
swipeRightPositionGesture.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpRight, 1);

// Middle
swipeRightPositionGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.NoCurl, 1.0);
swipeRightPositionGesture.addDirection(fp.Finger.Middle, fp.FingerDirection.DiagonalUpRight, 1);

// Ring
swipeRightPositionGesture.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 1.0);

// Pinky
swipeRightPositionGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.FullCurl, 1.0);

// Set additional weight
swipeRightPositionGesture.setWeight(fp.Finger.Index, 2);
swipeRightPositionGesture.setWeight(fp.Finger.Middle, 2);