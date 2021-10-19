import { combineReducers } from "redux";
import sceneReducer from "./scene-reducer";

export const rootReducer = combineReducers({
    scene: sceneReducer,
});