import {types} from './actions';
const initState = {
  language: 'vi',
};
export const systemReducer: any = (state = initState, actions: any) => {
  const {payload} = actions;
  switch (actions.type) {
    case types.CHANGE_LANGUAGES:
      return {...state, language: payload};
    default:
      return state;
  }
};
