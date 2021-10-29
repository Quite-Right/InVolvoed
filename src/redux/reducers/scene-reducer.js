import {CHANGE_CAR_COLOR, ROTATE_LEFT, ROTATE_RIGHT, ROTATION_STOP} from "../actions";
import {ROTATION_SPEED} from "../../constants";

const initialState = {
    rotation: 0,
    color: {
        b: 0.13285456597805023,
        g: 0.0010034418664872646,
        r: 0,
    },
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
        case CHANGE_CAR_COLOR:
            return {
                ...state,
                color: action.payload,
            }
        default:
            return state;
    }
};

export default selectorsReducer;