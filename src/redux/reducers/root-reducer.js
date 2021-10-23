import { combineReducers } from "redux";
import sceneReducer from "./scene-reducer";
import {carReducer} from "./car-reducer";

export const rootReducer = combineReducers({
    scene: sceneReducer,
    car: carReducer,
});