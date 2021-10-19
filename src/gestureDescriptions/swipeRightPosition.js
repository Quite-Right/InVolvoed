import * as fp from "fingerpose";
import {swipeRightHand} from "../constants";

export const swipeRightGesture = new fp.GestureDescription(swipeRightHand);

// Thumb
swipeRightGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl, 1.0);
swipeRightGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.HalfCurl, 1.0);
swipeRightGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.VerticalUp, 1.0);
swipeRightGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalUpRight, 0.8);

// Index
swipeRightGesture.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 1.0);
swipeRightGesture.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpRight, 1);

// Middle
swipeRightGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.NoCurl, 1.0);
swipeRightGesture.addDirection(fp.Finger.Middle, fp.FingerDirection.DiagonalUpRight, 1);

// Ring
swipeRightGesture.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 1.0);
swipeRightGesture.addCurl(fp.Finger.Ring, fp.FingerCurl.HalfCurl, 1.0);
swipeRightGesture.addDirection(fp.Finger.Ring, fp.FingerDirection.DiagonalUpRight, 1);

// Pinky
swipeRightGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.FullCurl, 1.0);
swipeRightGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.HalfCurl, 1.0);
swipeRightGesture.addDirection(fp.Finger.Pinky, fp.FingerDirection.DiagonalUpRight, 1);