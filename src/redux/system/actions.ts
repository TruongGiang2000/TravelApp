export const types = {
  CHANGE_LANGUAGES: 'CHANGE_LANGUAGES',
  SET_LOADING: 'SET_LOADING',
};
const action = (type: string, payload?: any) => ({type, payload});

export const systemActions = {
  changeLanguages: (payload: any) => action(types.CHANGE_LANGUAGES, payload),
  setLoading: (payload: any) => action(types.SET_LOADING, payload),
};
