import * as types from './action_types';

export const changeLanguage = language => {
    return {
        type: types.CHANGE_LANGUAGE,
        language
    }
}