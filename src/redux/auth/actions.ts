export const types = {
  SIGN_UP: 'SIGN_UP',
  SIGN_UP_SUCCESS: 'SIGN_UP_SUCCESS',
  SIGN_UP_FAIL: 'SIGN_UP_FAIL',
  SIGN_IN: 'SIGN_IN',
  SIGN_IN_SUCCESS: 'SIGN_IN_SUCCESS',
  SIGN_IN_FAIL: 'SIGN_IN_FAIL',
  GET_PROFILE: 'GET_PROFILE',
  GET_PROFILE_SUCCESS: 'GET_PROFILE_SUCCESS',
  GET_PROFILE_FAIL: 'GET_PROFILE_FAIL',
  LOGOUT: 'LOGOUT',
  UPDATE_PROFILE: 'UPDATE_PROFILE',
  UPDATE_PROFILE_SUCCESS: 'UPDATE_PROFILE_SUCCESS',
  UPDATE_PROFILE_FAIL: 'UPDATE_PROFILE_FAIL',
};
const action = (type: string, payload?: any) => ({type, payload});
export const authAction = {
  signUp: (payload: any) => action(types.SIGN_UP, payload),
  signUpSuccess: (payload: any) => action(types.SIGN_UP_SUCCESS, payload),
  signUpFail: (payload: any) => action(types.SIGN_UP_FAIL, payload),
  signIn: (payload: any) => action(types.SIGN_IN, payload),
  signInSuccess: (payload: any) => action(types.SIGN_IN_SUCCESS, payload),
  signInFail: (payload: any) => action(types.SIGN_IN_FAIL, payload),
  getProfile: (payload: any) => action(types.GET_PROFILE, payload),
  getProfileSuccess: (payload: any) =>
    action(types.GET_PROFILE_SUCCESS, payload),
  getProfileFail: (payload: any) => action(types.GET_PROFILE_FAIL, payload),
  logout: () => action(types.LOGOUT),
  updateProfile: (payload: any) => action(types.UPDATE_PROFILE, payload),
  updateProfileSuccess: (payload: any) =>
    action(types.UPDATE_PROFILE_SUCCESS, payload),
  updateProfileFail: (payload: any) =>
    action(types.UPDATE_PROFILE_FAIL, payload),
};
