import * as fp from "fingerpose";
import {swipeLeftHand} from "../constants";

export const swipeLeftGesture = new fp.GestureDescription(swipeLeftHand);

// Thumb
swipeLeftGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl, 1.0);
swipeLeftGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.VerticalUp, 1.0);
swipeLeftGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalUpLeft, 0.8);

// Index
swipeLeftGesture.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 1.0);
swipeLeftGesture.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpLeft, 1);

// Middle
swipeLeftGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.NoCurl, 1.0);
swipeLeftGesture.addDirection(fp.Finger.Middle, fp.FingerDirection.DiagonalUpLeft, 1);

// Ring
swipeLeftGesture.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 1.0);
swipeLeftGesture.addDirection(fp.Finger.Ring, fp.FingerDirection.DiagonalUpLeft, 1);

// Pinky
swipeLeftGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.FullCurl, 1.0);
swipeLeftGesture.addDirection(fp.Finger.Pinky, fp.FingerDirection.DiagonalUpLeft, 1);