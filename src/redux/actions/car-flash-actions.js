import {flashSelector} from "../selectors";
export const FLASH_TOGGLE_START = 'FLASH_TOGGLE_START';
export const FLASH_TOGGLE_COMPLETE = 'FLASH_TOGGLE_COMPLETE';
export const FLASH_ERROR = 'FLASH_ERROR';
export const UNSET_FLASH_ERROR ='UNSET_FLASH_ERROR';

export const flashToggleCompleteActionCreator = () => ({
    type: FLASH_TOGGLE_COMPLETE,
});

export const flashToggleStartActionCreator = () => ({
    type: FLASH_TOGGLE_START,
})

export const flashErrorActionCreator = (error) => ({
    type: FLASH_ERROR,
    payload: error,
})

export const unsetFlashErrorActionCreator = () => ({
    type: UNSET_FLASH_ERROR,
})

export const flash = (onSuccess, onError) => async (dispatch, getStore) => {
    const store = getStore();
    const {error} = flashSelector(store);
    dispatch(flashToggleStartActionCreator())
    if (error) {
        dispatch(unsetFlashErrorActionCreator());
    }
    try {
        const asyncData = await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, 1000);
        });
        dispatch(flashToggleCompleteActionCreator());
        if (onSuccess) {
            onSuccess();
        }
    } catch (error) {
        dispatch(flashToggleCompleteActionCreator());
        dispatch(flashErrorActionCreator(error));
        if (onError) {
            onError();
        }
    }
}