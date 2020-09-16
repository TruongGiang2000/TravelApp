import {types} from './actions';
const initState = {
  language: 'vi',
};
export const systemReducer: any = (state = initState, actions: any) => {
  if (actions.type === types.CHANGE_LANGUAGES) {
    return {...state, language: actions.payload};
  } else {
    return state;
  }
};
