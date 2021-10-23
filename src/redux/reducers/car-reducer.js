import { combineReducers } from "redux";
import {carLockReducer} from "./car-lock-reducer";
import {carClimatizationReducer} from "./car-climatization-reducer";
import {carEngineReducer} from "./car-engine-reducer";
import {carHonkReducer} from "./car-honk-reducer";
import {carFlashReducer} from "./car-flash-reducer";
import {carHonkAndFlashReducer} from "./car-honk-and-flash-reducer";

export const carReducer = combineReducers({
    lock: carLockReducer,
    climatization: carClimatizationReducer,
    engine: carEngineReducer,
    honk: carHonkReducer,
    flash: carFlashReducer,
    honkAndFlash: carHonkAndFlashReducer,
});

