import {types} from './actions';
import {ofType} from 'redux-observable';
import {mergeMap} from 'rxjs/operators';

export const changeLanguages = (action$: any) => {
  return action$.pipe(
    ofType(types.CHANGE_LANGUAGES),
    mergeMap((act: any) => {
      const payload = act;
      return payload.languages;
    }),
  );
};
