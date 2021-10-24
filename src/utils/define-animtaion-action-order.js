export const defineAnimationActionOrder = (name) => {
    const isWheel = name.includes('Wheel');
    const isWindow = name.includes('Window');
    const isTrunk = name.includes('Trunk');
    const isDoor = !isWheel && !isTrunk && !isWindow;

    let order = 0;
    if(isWindow) {
        order += 0;
    } else if(isDoor) {
        order += 5
    } else if (isTrunk) {
        order += 10;
    } else if (isWheel) {
        order += 15;
    }

    const isLeft = name.includes('Left');
    const isFront = name.includes('Front');
    if (!isLeft) {
        order += 1;
    }
    if (!isFront) {
        order += 2;
    }
    return order;
}