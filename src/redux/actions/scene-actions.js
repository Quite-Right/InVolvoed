export const ROTATE_RIGHT = 'ROTATE_RIGHT';
export const ROTATION_STOP = 'ROTATION_STOP';
export const ROTATE_LEFT = 'ROTATE_LEFT';

export const rotateRight = () => ({
    type: ROTATE_RIGHT,
})

export const rotateLeft = () => ({
    type: ROTATE_LEFT,
})

export const rotationStop = () => ({
    type: ROTATION_STOP,
})