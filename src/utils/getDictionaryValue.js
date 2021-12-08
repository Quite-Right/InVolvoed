import {get} from 'lodash';
import {dictionary} from "../constants";

export const getDictionaryValue = (path, lang = 'EN') => {
    return  get(dictionary, `${path}.${lang}`, null);
}