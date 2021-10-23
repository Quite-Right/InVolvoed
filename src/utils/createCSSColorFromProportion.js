export const createCSSColorFromProportion = ({r, g, b}) => {
    const multiplier = 255 / Math.max(...[r, g, b]);
    return `rgb(${r * multiplier}, ${g * multiplier}, ${b * multiplier})`;
}