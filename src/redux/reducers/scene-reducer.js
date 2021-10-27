import {CHANGE_CAR_COLOR, ROTATE_LEFT, ROTATE_RIGHT, ROTATION_STOP} from "../actions";
import {ROTATION_SPEED} from "../../constants";

const initialState = {
    rotation: 0,
    color: {
        b: 0.0029885650146752596,
        g: 0.0006998085300438106,
        r: 0.12370066344738007,
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