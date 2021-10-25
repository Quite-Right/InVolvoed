import {getDictionaryValue} from "./getDictionaryValue";

export const defineAnimationActionLabel = (name, lang = 'EN') => {
    let dictionaryRoute = `configurator.${name.replace('Toggle', '')}`;
    if (dictionaryRoute.includes('Window')) {
        dictionaryRoute = dictionaryRoute.replace('Door', '')
    }

    return getDictionaryValue(dictionaryRoute, lang);
}