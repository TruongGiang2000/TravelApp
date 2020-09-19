export const types = {
  CHANGE_LANGUAGES: 'CHANGE_LANGUAGES',
};
const action = (type: string, payload?: any) => ({type, payload});

export const systemActions = {
  changeLanguages: (payload: any) => action(types.CHANGE_LANGUAGES, payload),
};
