import * as fp from "fingerpose";
import {swipeCenterPosition} from "../constants";

export const swipeCenterPositionGesture = new fp.GestureDescription(swipeCenterPosition);

// Thumb
swipeCenterPositionGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.FullCurl, 1.0);

// Index
swipeCenterPositionGesture.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 1.0);
swipeCenterPositionGesture.addDirection(fp.Finger.Index, fp.FingerDirection.VerticalUp, 1);

// Middle
swipeCenterPositionGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.NoCurl, 1.0);
swipeCenterPositionGesture.addDirection(fp.Finger.Middle, fp.FingerDirection.VerticalUp, 1);

// Ring
swipeCenterPositionGesture.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 1.0);

// Pinky
swipeCenterPositionGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.FullCurl, 1.0);

// Set additional weight
swipeCenterPositionGesture.setWeight(fp.Finger.Index, 2);
swipeCenterPositionGesture.setWeight(fp.Finger.Middle, 2);