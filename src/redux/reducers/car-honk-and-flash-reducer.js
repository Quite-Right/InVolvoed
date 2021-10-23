import {HONK_AND_FLASH_TOGGLE_START, HONK_AND_FLASH_TOGGLE_COMPLETE, HONK_AND_FLASH_ERROR, UNSET_HONK_AND_FLASH_ERROR} from "../actions";

const initialState = {
    inProcess: false,
    error: null,
};

export const carHonkAndFlashReducer = (state = initialState, action) => {
    switch (action.type) {
        case HONK_AND_FLASH_TOGGLE_START:
            return {
                ...state,
                inProcess: true,
            }
        case HONK_AND_FLASH_TOGGLE_COMPLETE:
            return {
                ...state,
                inProcess: false,
            }
        case HONK_AND_FLASH_ERROR:
            return  {
                ...state,
                error: action.payload,
            }
        case UNSET_HONK_AND_FLASH_ERROR:
            return {
                ...state,
                error: null,
            }
        default:
            return state;
    }
};