import {types} from './actions';
const initState = {
  language: 'vi',
};
export const systemReducer: any = (state = initState, actions: any) => {
  switch (actions.type) {
    case types.CHANGE_LANGUAGES:
      return {...state, language: actions.payload};
    default:
      return state;
  }
};
