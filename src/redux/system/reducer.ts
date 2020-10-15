import {types} from './actions';
const initState = {
  language: 'vi',
  loading: false,
};
export const systemReducer: any = (state = initState, actions: any) => {
  const {payload} = actions;
  switch (actions.type) {
    case types.CHANGE_LANGUAGES:
      return {...state, language: payload};
    case types.SET_LOADING:
      return {...state, loading: payload.status};
    default:
      return state;
  }
};
