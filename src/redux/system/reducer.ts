import {types} from './actions';
const initState = {
  language: 'vi',
  loading: false,
  allNews: [],
};
export const systemReducer: any = (state = initState, actions: any) => {
  const {payload} = actions;
  switch (actions.type) {
    case types.CHANGE_LANGUAGES:
      return {...state, language: payload};
    case types.SET_LOADING:
      return {...state, loading: payload.status};
    case types.GET_ALL_NEWS:
      return {...state, allNews: []};
    case types.GET_ALL_NEWS_SUCCESS:
      return {...state, allNews: payload};
    case types.GET_ALL_NEWS_FAIL:
      return {...state, allNews: []};
    default:
      return state;
  }
};
