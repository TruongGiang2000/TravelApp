import {types, placesActions} from './actions';
import {$axios} from '../../constants/config/api';
import {ofType} from 'redux-observable';
import {mergeMap} from 'rxjs/operators';
import store from '../store';
export const getMountainProvinces = (action$: any) => {
  return action$.pipe(
    ofType(types.GET_MOUNTAIN_PROVINCES),
    mergeMap(() => {
      return $axios.api
        .get('api/getMountainProvinces')
        .then((rs: any) => {
          const {data} = rs;
          return placesActions.getMountainProvincesSuccess(mapData(data));
        })
        .catch((err: any) => {
          console.log('Error', err);
          return placesActions.getMountainProvincesFail(err);
        });
    }),
  );
};
export const getOfferProvinces = (action$: any) => {
  return action$.pipe(
    ofType(types.GET_OFFER_PROVINCES),
    mergeMap(() => {
      return $axios.api
        .get('api/getOfferProvinces')
        .then((rs: any) => {
          const {data} = rs;
          return placesActions.getOfferProvincesSuccess(mapData(data));
        })
        .catch((err: any) => {
          console.log('Error', err);
          return placesActions.getOfferProvincesFail(err);
        });
    }),
  );
};
export const getFamousProvinces = (action$: any) => {
  return action$.pipe(
    ofType(types.GET_FAMOUS_PROVINCES),
    mergeMap(() => {
      return $axios.api
        .get('api/getFamousProvinces')
        .then((rs: any) => {
          const {data} = rs;
          return placesActions.getFamousProvincesSuccess(mapData(data));
        })
        .catch((err: any) => {
          console.log('Error', err);
          return placesActions.getFamousProvincesFail(err);
        });
    }),
  );
};
const mapData = (data: any) => {
  return data.map((item: any) => {
    const {system}: any = store.getState();
    const language = system.language;
    item.ID = item.ID;
    item.Stars = item.Starts;
    item.Lovers = item.Lovers;
    let uriList = [];
    item.Images.map((uri) => {
      uriList.push(`https://stravelapp.herokuapp.com/${uri.toString().replace('public','')}`);
    })
    item.uriList = uriList;
    if (language === 'vi') {
      item.Title = item.vi.Title;
      item.Content = item.vi.Content;
      item.TypesArea = item.vi.TypesArea;
      item.Area = item.vi.Area;
    } else {
      item.Title = item.en.Title;
      item.Content = item.en.Content;
      item.TypesArea = item.en.TypesArea;
      item.Area = item.en.Area;
    }
    return item;
  });
};
