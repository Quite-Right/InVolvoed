import { combineReducers } from "redux";
import sceneReducer from "./scene-reducer";
import {carReducer} from "./car-reducer";
import configuratorReducer from "./configurator-reducer";
import {languageReducer} from "./language-reducer";

export const rootReducer = combineReducers({
    scene: sceneReducer,
    car: carReducer,
    configurator: configuratorReducer,
    language: languageReducer,
});