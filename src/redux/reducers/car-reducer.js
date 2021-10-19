import {LOCK_CAR, UNLOCK_CAR, LOCK_CAR_START, LOCK_CAR_COMPLETE, LOCK_CAR_ERROR} from "../actions";
import {ROTATION_SPEED} from "../../constants";

const initialState = {
    rotation: 0,
};

const carReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOCK_CAR_START:
            return {
                ...state,
                inProcess: true,
            }
        case LOCK_CAR_COMPLETE:
            return {
                ...state,
                inProcess: false,
            }
        case LOCK_CAR_ERROR:
            return  {
                ...state,
                error: action.payload,
            }
        case LOCK_CAR:
            return {
                ...state,
                isLocked: true,
            }
        case UNLOCK_CAR:
            return {
                ...state,
                isLocked: false,
            }



        default:
            return state;
    }
};

export default carReducer;