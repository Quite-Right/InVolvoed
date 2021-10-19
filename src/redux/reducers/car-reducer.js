import {LOCK_CAR, UNLOCK_CAR, LOCK_CAR_START, LOCK_CAR_COMPLETE, LOCK_CAR_ERROR, UNSET_LOCK_CAR_ERROR} from "../actions";

const initialState = {
    lockInProcess: false,
    isLocked: true,
    lockError: null,

};

const carReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOCK_CAR_START:
            return {
                ...state,
                lockInProcess: true,
            }
        case LOCK_CAR_COMPLETE:
            return {
                ...state,
                lockInProcess: false,
            }
        case LOCK_CAR_ERROR:
            return  {
                ...state,
                lockError: action.payload,
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
                lockError: null,
            }
        default:
            return state;
    }
};

export default carReducer;