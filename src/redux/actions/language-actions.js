export const SET_LANGUAGE_CODE = 'SET_LANGUAGE_CODE';

export const setLanuageActionCreator = (code) => ({
    type: SET_LANGUAGE_CODE,
    payload: code,
});