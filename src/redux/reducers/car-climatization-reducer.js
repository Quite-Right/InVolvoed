import {CLIMATIZATION_ON, CLIMATIZATION_OFF, CLIMATIZATION_TOGGLE_START, CLIMATIZATION_TOGGLE_COMPLETE, CLIMATIZATION_ERROR, UNSET_CLIMATIZATION_ERROR} from "../actions";

const initialState = {
    inProcess: false,
    error: null,
    isTurnedOn: false,
};

export const carClimatizationReducer = (state = initialState, action) => {
    switch (action.type) {
        case CLIMATIZATION_TOGGLE_START:
            return {
                ...state,
                inProcess: true,
            }
        case CLIMATIZATION_TOGGLE_COMPLETE:
            return {
                ...state,
                inProcess: false,
            }
        case CLIMATIZATION_ERROR:
            return  {
                ...state,
                error: action.payload,
            }
        case CLIMATIZATION_ON:
            return {
                ...state,
                isTurnedOn: true,
            }
        case CLIMATIZATION_OFF:
            return {
                ...state,
                isTurnedOn: false,
            }
        case UNSET_CLIMATIZATION_ERROR:
            return {
                ...state,
                error: null,
            }
        default:
            return state;
    }
};