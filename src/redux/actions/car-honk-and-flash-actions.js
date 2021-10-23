import {honkAndFlashSelector} from "../selectors";
export const HONK_AND_FLASH_TOGGLE_START = 'HONK_AND_FLASH_TOGGLE_START';
export const HONK_AND_FLASH_TOGGLE_COMPLETE = 'HONK_AND_FLASH_TOGGLE_COMPLETE';
export const HONK_AND_FLASH_ERROR = 'HONK_AND_FLASH_ERROR';
export const UNSET_HONK_AND_FLASH_ERROR ='UNSET_HONK_AND_FLASH_ERROR';

export const honkAndFlashToggleCompleteActionCreator = () => ({
    type: HONK_AND_FLASH_TOGGLE_COMPLETE,
});

export const honkAndFlashToggleStartActionCreator = () => ({
    type: HONK_AND_FLASH_TOGGLE_START,
})

export const honkAndFlashErrorActionCreator = (error) => ({
    type: HONK_AND_FLASH_ERROR,
    payload: error,
})

export const unsetHonkErrorActionCreator = () => ({
    type: UNSET_HONK_AND_FLASH_ERROR,
})

export const honkAndFlash = (onSuccess, onError) => async (dispatch, getStore) => {
    const store = getStore();
    const {error} = honkAndFlashSelector(store);
    dispatch(honkAndFlashToggleStartActionCreator())
    if (error) {
        dispatch(unsetHonkErrorActionCreator());
    }
    try {
        const asyncData = await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, 1000);
        });
        dispatch(honkAndFlashToggleCompleteActionCreator());
        if (onSuccess) {
            onSuccess();
        }
    } catch (error) {
        dispatch(honkAndFlashToggleCompleteActionCreator());
        dispatch(honkAndFlashErrorActionCreator(error));
        if (onError) {
            onError();
        }
    }
}