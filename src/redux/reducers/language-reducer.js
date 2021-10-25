import {SET_LANGUAGE_CODE} from "../actions";

const initialState = {
    code: 'EN'
};

export const languageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LANGUAGE_CODE:
            return {
                ...state,
                code: action.payload,
            }
        default:
            return state;
    }
};