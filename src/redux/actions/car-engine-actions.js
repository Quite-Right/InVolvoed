import {engineSelector} from "../selectors";

export const ENGINE_ON = 'ENGINE_ON';
export const ENGINE_OFF = 'ENGINE_OFF';
export const ENGINE_TOGGLE_START = 'ENGINE_TOGGLE_START';
export const ENGINE_TOGGLE_COMPLETE = 'ENGINE_TOGGLE_COMPLETE';
export const ENGINE_ERROR = 'ENGINE_ERROR';
export const UNSET_ENGINE_ERROR ='UNSET_ENGINE_ERROR';

export const engineOnActionCreator = () => ({
    type: ENGINE_ON,
});

export const engineOffActionCreator = () => ({
    type: ENGINE_OFF,
});

export const engineToggleCompleteActionCreator = () => ({
    type: ENGINE_TOGGLE_COMPLETE,
});

export const engineToggleStartActionCreator = () => ({
    type: ENGINE_TOGGLE_START,
})

export const engineErrorActionCreator = (error) => ({
    type: ENGINE_ERROR,
    payload: error,
})

export const unsetClimatizationErrorActionCreator = () => ({
    type: UNSET_ENGINE_ERROR,
})


export const engineOff = (onSuccess, onError) => async (dispatch) => {
    try {
        const asyncData = await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, 1000);
        });
        dispatch(engineOffActionCreator());
        dispatch(engineToggleCompleteActionCreator());
        if (onSuccess) {
            onSuccess();
        }
    } catch (error) {
        dispatch(engineToggleCompleteActionCreator());
        dispatch(engineErrorActionCreator(error));
        if (onError) {
            onError();
        }
    }
}

export const engineOn = (onSuccess, onError) => async (dispatch) => {
    try {
        const asyncData = await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, 1000);
        });
        dispatch(engineOnActionCreator());
        dispatch(engineToggleCompleteActionCreator());
        if (onSuccess) {
            onSuccess();
        }
    } catch (error) {
        dispatch(engineToggleCompleteActionCreator());
        dispatch(engineErrorActionCreator(error));
        if (onError) {
            onError();
        }
    }
}

export const toggleCarEngine = (onSuccess, onError) => async (dispatch, getStore) => {
    const store = getStore();
    const {error, isTurnedOn} = engineSelector(store);
    dispatch(engineToggleStartActionCreator())
    if (error) {
        dispatch(unsetClimatizationErrorActionCreator());
    }
    if (isTurnedOn) {
        dispatch(engineOff(onSuccess, onError));
    }
    else {
        dispatch(engineOn(onSuccess, onError));
    }
}