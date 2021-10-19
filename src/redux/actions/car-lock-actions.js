export const LOCK_CAR = 'LOCK_CAR ';
export const UNLOCK_CAR = ' UNLOCK_CAR';
export const LOCK_CAR_START = 'LOCK_CAR_START';
export const LOCK_CAR_COMPLETE = 'LOCK_CAR_COMPLETE';
export const LOCK_CAR_ERROR = 'LOCK_CAR_ERROR';
export const UNSET_LOCK_CAR_ERROR ='UNSET_LOCK_CAR_ERROR';

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

export const unsetLockCarErrorActionCreator = () => ({
    type: UNSET_LOCK_CAR_ERROR,
})


export const unlockCar = async (dispatch) => {
    try {
        dispatch(lockCarStartActionCreator());
        dispatch(unsetLockCarErrorActionCreator());
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