export const defineAnimationActionLabel = (name) => {
    let label = 'Открыть '
    const isWindow = name.includes('Window');
    const isTrunk = name.includes('Trunk');
    const isLeft = name.includes('Left');
    const isFront = name.includes('Front');

    if (isTrunk) {
        return label + 'багажник'
    }

    label += `${isFront ? 'передн' : 'задн'}${isWindow ? 'ee' : 'юю'} `;
    label += `${isLeft ? 'лев' : 'прав'}${isWindow ? 'ое' : 'ую'} `;
    label += isWindow ? 'окно' : 'дверь';
    return label;
}