import {honkSelector} from "../selectors";
export const HONK_TOGGLE_START = 'HONK_TOGGLE_START';
export const HONK_TOGGLE_COMPLETE = 'HONK_TOGGLE_COMPLETE';
export const HONK_ERROR = 'HONK_ERROR';
export const UNSET_HONK_ERROR ='UNSET_HONK_ERROR';

export const honkToggleCompleteActionCreator = () => ({
    type: HONK_TOGGLE_COMPLETE,
});

export const honkToggleStartActionCreator = () => ({
    type: HONK_TOGGLE_START,
})

export const honkErrorActionCreator = (error) => ({
    type: HONK_ERROR,
    payload: error,
})

export const unsetHonkErrorActionCreator = () => ({
    type: UNSET_HONK_ERROR,
})

export const honk = (onSuccess, onError) => async (dispatch, getStore) => {
    const store = getStore();
    const {error} = honkSelector(store);
    dispatch(honkToggleStartActionCreator())
    if (error) {
        dispatch(unsetHonkErrorActionCreator());
    }
    try {
        await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, 1000);
        });
        dispatch(honkToggleCompleteActionCreator());
        if (onSuccess) {
            onSuccess();
        }
    } catch (error) {
        dispatch(honkToggleCompleteActionCreator());
        dispatch(honkErrorActionCreator(error));
        if (onError) {
            onError();
        }
    }
}