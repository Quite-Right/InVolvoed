import {LOCK_CAR, UNLOCK_CAR, LOCK_CAR_START, LOCK_CAR_COMPLETE, LOCK_CAR_ERROR, UNSET_LOCK_CAR_ERROR} from "../actions";

const initialState = {
    isLocked: true,
    inProcess: false,
    error: null,
};

export const carLockReducer = (state = initialState, action) => {
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
        case UNSET_LOCK_CAR_ERROR:
            return {
                ...state,
                error: null,
            }
        default:
            return state;
    }
};