import {ENGINE_ON, ENGINE_OFF, ENGINE_TOGGLE_START, ENGINE_TOGGLE_COMPLETE, ENGINE_ERROR, UNSET_ENGINE_ERROR} from "../actions";

const initialState = {
    inProcess: false,
    error: null,
    isTurnedOn: false,
};

export const carEngineReducer = (state = initialState, action) => {
    switch (action.type) {
        case ENGINE_TOGGLE_START:
            return {
                ...state,
                inProcess: true,
            }
        case ENGINE_TOGGLE_COMPLETE:
            return {
                ...state,
                inProcess: false,
            }
        case ENGINE_ERROR:
            return  {
                ...state,
                error: action.payload,
            }
        case ENGINE_ON:
            return {
                ...state,
                isTurnedOn: true,
            }
        case ENGINE_OFF:
            return {
                ...state,
                isTurnedOn: false,
            }
        case UNSET_ENGINE_ERROR:
            return {
                ...state,
                error: null,
            }
        default:
            return state;
    }
};