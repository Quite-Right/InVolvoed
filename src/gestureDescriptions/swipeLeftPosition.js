import * as fp from "fingerpose";
import {swipeLeftPosition} from "../constants";

export const swipeLeftPositionGesture = new fp.GestureDescription(swipeLeftPosition);

// Thumb
swipeLeftPositionGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.FullCurl, 1.0);

// Index
swipeLeftPositionGesture.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 1.0);
swipeLeftPositionGesture.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpLeft, 1);

// Middle
swipeLeftPositionGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.NoCurl, 1.0);
swipeLeftPositionGesture.addDirection(fp.Finger.Middle, fp.FingerDirection.DiagonalUpLeft, 1);

// Ring
swipeLeftPositionGesture.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 1.0);

// Pinky
swipeLeftPositionGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.FullCurl, 1.0);

// Set additional weight
swipeLeftPositionGesture.setWeight(fp.Finger.Index, 2);
swipeLeftPositionGesture.setWeight(fp.Finger.Middle, 2);