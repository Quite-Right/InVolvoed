export const START_ENGINE = 'START_ENGINE';
export const STOP_ENGINE = ' STOP_ENGINE';
export const _START = 'LOCK_CAR_START';
export const LOCK_CAR_COMPLETE = 'LOCK_CAR_COMPLETE';
export const LOCK_CAR_ERROR = 'LOCK_CAR_ERROR';

export const lockCarActionCreator = () => ({
    type: LOCK_CAR,
});

export const unlockCarActionCreator = () => ({
    type: UNLOCK_CAR,
});

export const lockCarCompleteActionCreator = () => ({
    type: LOCK_CAR_COMPLETE,
});

export const lockCarStartActionCreator = () => ({
    type: LOCK_CAR_START,
})

export const lockCarErrorActionCreator = (error) => ({
    type: LOCK_CAR_ERROR,
    payload: error,
})

export const unlockCar = async (dispatch) => {
    try {
        dispatch(lockCarStartActionCreator());
        const asyncData = await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, 1000);
        });
        dispatch(unlockCarActionCreator());
        dispatch(lockCarCompleteActionCreator());
    } catch (error) {
        dispatch(lockCarCompleteActionCreator());
        dispatch(lockCarErrorActionCreator(error));
    }
}

export const lockCar = async (dispatch) => {
    try {
        dispatch(lockCarStartActionCreator());
        const asyncData = await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, 1000);
        });
        dispatch(lockCarActionCreator());
        dispatch(lockCarCompleteActionCreator());
    } catch (error) {
        dispatch(lockCarCompleteActionCreator());
        dispatch(lockCarErrorActionCreator(error));
    }
}