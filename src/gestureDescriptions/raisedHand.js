import * as fp from "fingerpose";
import {raisedHand as raisedHandName} from "../constants";

export const raisedHandGesture = new fp.GestureDescription(raisedHandName);

// Thumb
raisedHandGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl, 1.0);
raisedHandGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.VerticalUp, 1.0);
raisedHandGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalUpRight, 0.8);
raisedHandGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalUpLeft, 0.8);

// Index
raisedHandGesture.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 1.0);
raisedHandGesture.addDirection(fp.Finger.Index, fp.FingerDirection.VerticalUp, 1.0);
raisedHandGesture.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpRight, 0.5);
raisedHandGesture.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpLeft, 0.5);

// Middle
raisedHandGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.NoCurl, 1.0);
raisedHandGesture.addDirection(fp.Finger.Middle, fp.FingerDirection.VerticalUp, 1.0);
raisedHandGesture.addDirection(fp.Finger.Middle, fp.FingerDirection.DiagonalUpRight, 0.5);
raisedHandGesture.addDirection(fp.Finger.Middle, fp.FingerDirection.DiagonalUpLeft, 0.5);

// Ring
raisedHandGesture.addCurl(fp.Finger.Ring, fp.FingerCurl.NoCurl, 1.0);
raisedHandGesture.addDirection(fp.Finger.Ring, fp.FingerDirection.VerticalUp, 1.0);
raisedHandGesture.addDirection(fp.Finger.Ring, fp.FingerDirection.DiagonalUpRight, 0.5);
raisedHandGesture.addDirection(fp.Finger.Ring, fp.FingerDirection.DiagonalUpLeft, 0.5);

// Pinky
raisedHandGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.NoCurl, 1.0);
raisedHandGesture.addDirection(fp.Finger.Pinky, fp.FingerDirection.VerticalUp, 1.0);
raisedHandGesture.addDirection(fp.Finger.Pinky, fp.FingerDirection.DiagonalUpRight, 0.5);
raisedHandGesture.addDirection(fp.Finger.Pinky, fp.FingerDirection.DiagonalUpLeft, 0.5);