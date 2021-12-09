import {climatizationSelector} from "../selectors";

export const CLIMATIZATION_ON = 'CLIMATIZATION_ON';
export const CLIMATIZATION_OFF = 'CLIMATIZATION_OFF';
export const CLIMATIZATION_TOGGLE_START = 'CLIMATIZATION_TOGGLE_START';
export const CLIMATIZATION_TOGGLE_COMPLETE = 'CLIMATIZATION_TOGGLE_COMPLETE';
export const CLIMATIZATION_ERROR = 'CLIMATIZATION_ERROR';
export const UNSET_CLIMATIZATION_ERROR ='UNSET_CLIMATIZATION_ERROR';

export const climatizationOnActionCreator = () => ({
    type: CLIMATIZATION_ON,
});

export const climatizationOffActionCreator = () => ({
    type: CLIMATIZATION_OFF,
});

export const climatizationToggleCompleteActionCreator = () => ({
    type: CLIMATIZATION_TOGGLE_COMPLETE,
});

export const climatizationToggleStartActionCreator = () => ({
    type: CLIMATIZATION_TOGGLE_START,
})

export const climatizationErrorActionCreator = (error) => ({
    type: CLIMATIZATION_ERROR,
    payload: error,
})

export const unsetClimatizationErrorActionCreator = () => ({
    type: UNSET_CLIMATIZATION_ERROR,
})


export const climatizationOff = (onSuccess, onError) => async (dispatch) => {
    try {
        await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, 1000);
        });
        dispatch(climatizationOffActionCreator());
        dispatch(climatizationToggleCompleteActionCreator());
        if (onSuccess) {
            onSuccess();
        }
    } catch (error) {
        dispatch(climatizationToggleCompleteActionCreator());
        dispatch(climatizationErrorActionCreator(error));
        if (onError) {
            onError();
        }
    }
}

export const climatizationOn = (onSuccess, onError) => async (dispatch) => {
    try {
        await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, 1000);
        });
        dispatch(climatizationOnActionCreator());
        dispatch(climatizationToggleCompleteActionCreator());
        if (onSuccess) {
            onSuccess();
        }
    } catch (error) {
        dispatch(climatizationToggleCompleteActionCreator());
        dispatch(climatizationErrorActionCreator(error));
        if (onError) {
            onError();
        }
    }
}

export const toggleCarClimatization = (onSuccess, onError) => async (dispatch, getStore) => {
    const store = getStore();
    const {isTurnedOn, error} = climatizationSelector(store);
    dispatch(climatizationToggleStartActionCreator())
    if (error) {
        dispatch(unsetClimatizationErrorActionCreator());
    }
    if (isTurnedOn) {
        dispatch(climatizationOff(onSuccess, onError));
    }
    else {
        dispatch(climatizationOn(onSuccess, onError));
    }
}