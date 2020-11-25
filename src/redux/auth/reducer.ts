import {types} from './actions';
const initState = {
  token: '',
  message: '',
  userInfo: {},
};
export const authReducer: any = (state = initState, actions: any) => {
  const {payload} = actions;
  switch (actions.type) {
    case types.SIGN_UP:
      return {...state, token: ''};
    case types.SIGN_UP_SUCCESS:
      return {...state, message: payload.message, token: payload.token};
    case types.SIGN_UP_FAIL:
      return {...state, token: '', message: payload.message};
    case types.GET_PROFILE:
      return {...state, userInfo: {}};
    case types.GET_PROFILE_SUCCESS:
      return {...state, userInfo: payload};
    case types.GET_PROFILE_FAIL:
      return {...state, userInfor: {}};
    case types.LOGOUT:
      return {...state, token: ''};
    case types.SIGN_IN:
      return {...state, token: ''};
    case types.SIGN_IN_SUCCESS:
      return {...state, token: payload.idUser};
    case types.SIGN_IN_FAIL:
      return {...state, token: '', message: payload};
    default:
      return state;
  }
};
