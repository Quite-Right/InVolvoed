import {getDictionaryValue} from "./getDictionaryValue";

export const defineAnimationActionLabel = (name) => {
    let dictionaryRoute = `configurator.${name.replace('Toggle', '')}`;
    if (dictionaryRoute.includes('Window')) {
        dictionaryRoute = dictionaryRoute.replace('Door', '')
    }

    return {
        EN: getDictionaryValue(dictionaryRoute, 'EN'),
        RU: getDictionaryValue(dictionaryRoute, 'RU'),
    };
}