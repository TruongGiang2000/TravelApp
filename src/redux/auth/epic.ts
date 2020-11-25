import {types, authAction} from './actions';
import {$axios} from '../../constants/config/api';
import {ofType} from 'redux-observable';
import {mergeMap} from 'rxjs/operators';
import {actionMain} from '../../util/mainActions';
import store from '../store';

export const signUp = ($action: any) => {
  return $action.pipe(
    ofType(types.SIGN_UP),
    mergeMap((act: any) => {
      return $axios.api
        .post('api/signUp', act?.payload)
        .then((rs: any) => {
          const {data} = rs;
          console.log('getSignup-->', data);
          return authAction.signUpSuccess(data);
        })
        .catch((err: any) => {
          actionMain.loading(false);
          console.log('err', err?.response);
          return authAction.signUpSuccess(err);
        });
    }),
  );
};
export const getProfile = ($action: any) => {
  return $action.pipe(
    ofType(types.GET_PROFILE),
    mergeMap((act: any) => {
      return $axios.api
        .post('api/getProfile', act?.payload)
        .then((rs: any) => {
          const {data} = rs;
          console.log('getProfile-->', data);
          return authAction.getProfileSuccess(data);
        })
        .catch((err: any) => {
          console.log('err', err?.response);
          return authAction.getProfileFail(err);
        })
        .finally(() => {
          actionMain.loading(false);
        });
    }),
  );
};
export const signIn = ($action: any) => {
  return $action.pipe(
    ofType(types.SIGN_IN),
    mergeMap((act: any) => {
      console.log('act.payload', act?.payload);
      return $axios.api
        .post('api/signIn', act?.payload)
        .then((rs: any) => {
          const {data} = rs;
          return authAction.signInSuccess(data);
        })
        .catch((err: any) => {
          actionMain.loading(false);
          console.log('err', err?.response);
          return authAction.signInFail(err);
        })
        .finally(() => {
          actionMain.loading(false);
        });
    }),
  );
};
//updateProfile
export const updateProfile = ($action: any) => {
  return $action.pipe(
    ofType(types.UPDATE_PROFILE),
    mergeMap((act: any) => {
      return $axios.api
        .post('api/updateProfile', act?.payload)
        .then((rs: any) => {
          const {data} = rs;
          const {auth}: any = store.getState();
          const {token} = auth;
          console.log('token', token);
          return authAction.getProfile(token);
        })
        .catch((err: any) => {
          actionMain.loading(false);
          return authAction.updateProfileFail(err);
        })
        .finally(() => {
          actionMain.loading(false);
        });
    }),
  );
};
