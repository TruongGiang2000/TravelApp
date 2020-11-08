export const types = {
  CHANGE_LANGUAGES: 'CHANGE_LANGUAGES',
  SET_LOADING: 'SET_LOADING',
  GET_ALL_NEWS: 'GET_ALL_NEWS',
  GET_ALL_NEWS_SUCCESS: 'GET_ALL_NEWS_SUCCESS',
  GET_ALL_NEWS_FAIL: 'GET_ALL_NEWS_FAIL',
};
const action = (type: string, payload?: any) => ({type, payload});

export const systemActions = {
  changeLanguages: (payload: any) => action(types.CHANGE_LANGUAGES, payload),
  setLoading: (payload: any) => action(types.SET_LOADING, payload),
  getAllNews: (payload: any) => action(types.GET_ALL_NEWS, payload),
  getAllNewsSuccess: (payload: any) =>
    action(types.GET_ALL_NEWS_SUCCESS, payload),
  getAllNewsFail: (payload: any) => action(types.GET_ALL_NEWS_FAIL, payload),
};
