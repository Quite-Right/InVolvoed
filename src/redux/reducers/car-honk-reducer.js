import {HONK_TOGGLE_START, HONK_TOGGLE_COMPLETE, HONK_ERROR, UNSET_HONK_ERROR} from "../actions";

const initialState = {
    inProcess: false,
    error: null,
};

export const carHonkReducer = (state = initialState, action) => {
    switch (action.type) {
        case HONK_TOGGLE_START:
            return {
                ...state,
                inProcess: true,
            }
        case HONK_TOGGLE_COMPLETE:
            return {
                ...state,
                inProcess: false,
            }
        case HONK_ERROR:
            return  {
                ...state,
                error: action.payload,
            }
        case UNSET_HONK_ERROR:
            return {
                ...state,
                error: null,
            }
        default:
            return state;
    }
};