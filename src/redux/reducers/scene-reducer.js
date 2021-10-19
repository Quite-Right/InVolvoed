import {ROTATE_LEFT, ROTATE_RIGHT, ROTATION_STOP} from "../actions";
import {ROTATION_SPEED} from "../../constants";

const initialState = {
    rotation: 0,
};

const selectorsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ROTATE_RIGHT:
            return {
                ...state,
                rotation: ROTATION_SPEED,
            }
        case ROTATE_LEFT:
            return {
                ...state,
                rotation: -ROTATION_SPEED,
            }
        case ROTATION_STOP:
            return {
                ...state,
                rotation: 0
            }
        default:
            return state;
    }
};

export default selectorsReducer;