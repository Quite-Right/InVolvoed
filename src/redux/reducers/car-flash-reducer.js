import {FLASH_TOGGLE_START, FLASH_TOGGLE_COMPLETE, FLASH_ERROR, UNSET_FLASH_ERROR} from "../actions";

const initialState = {
    inProcess: false,
    error: null,
};

export const carFlashReducer = (state = initialState, action) => {
    switch (action.type) {
        case FLASH_TOGGLE_START:
            return {
                ...state,
                inProcess: true,
            }
        case FLASH_TOGGLE_COMPLETE:
            return {
                ...state,
                inProcess: false,
            }
        case FLASH_ERROR:
            return  {
                ...state,
                error: action.payload,
            }
        case UNSET_FLASH_ERROR:
            return {
                ...state,
                error: null,
            }
        default:
            return state;
    }
};