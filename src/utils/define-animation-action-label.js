export const defineAnimationActionLabel = (name) => {
    const isWheel = name.includes('Wheel');
    const isWindow = name.includes('Window');
    const isTrunk = name.includes('Trunk');
    const isLeft = name.includes('Left');
    const isFront = name.includes('Front');
    let label = isWheel ? 'Спустить ' : 'Открыть ';

    if (isTrunk) {
        return label + 'багажник'
    }

    label += `${isFront ? 'передн' : 'задн'}${isWindow ? 'ee' : 'юю'} `;
    label += `${isLeft ? 'лев' : 'прав'}${isWindow ? 'ое' : 'ую'} `;
    label += isWindow ? 'окно' : isWheel ? 'шину' : 'дверь';
    return label;
}