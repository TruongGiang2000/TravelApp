import {types, systemActions} from './actions';
import {$axios} from '../../constants/config/api';
import {ofType} from 'redux-observable';
import {mergeMap} from 'rxjs/operators';
export const getAllNews = ($action: any) => {
  return $action.pipe(
    ofType(types.GET_ALL_NEWS),
    mergeMap((act: any) => {
      return $axios.api
        .get('api/getAllNews')
        .then((rs: any) => {
          const {data} = rs;
          console.log('getAllNews', data);
          return systemActions.getAllNewsSuccess(data);
        })
        .catch((err: any) => {
          return systemActions.getAllNewsFail(err);
        });
    }),
  );
};
