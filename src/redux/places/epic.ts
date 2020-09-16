import {types, placesActions} from './actions';
import {$axios} from '../../constants/config/api';
import {ofType} from 'redux-observable';
import {mergeMap} from 'rxjs/operators';
import store from '../store';
export const getProvinces = (action$: any) => {
  return action$.pipe(
    ofType(
      types.GET_MOUNTAIN_PROVINCES,
      types.GET_FAMOUS_PROVINCES,
      types.GET_OFFER_PROVINCES,
    ),
    mergeMap((act: any) => {
      const {payload} = act;
      return $axios.api
        .post('api/getProvinces', payload)
        .then((rs: any) => {
          const {data} = rs;
          switch (payload.key) {
            case 'Offer':
              return placesActions.getOfferProvincesSuccess(mapData(data));
            case 'Mountain':
              return placesActions.getMountainProvincesSuccess(mapData(data));
            case 'Famous':
              return placesActions.getFamousProvincesSuccess(mapData(data));
            default:
              return null;
          }
        })
        .catch((err: any) => {
          console.log('Error', err);
          switch (payload.key) {
            case 'Offer':
              return placesActions.getOfferProvincesFail(err);
            case 'Mountain':
              return placesActions.getMountainProvincesFail(err);
            case 'Famous':
              return placesActions.getFamousProvincesFail(err);
            default:
              return null;
          }
        });
    }),
  );
};
export const searchProvinces = (action$: any) => {
  return action$.pipe(
    ofType(types.SEARCH_PROVINCES),
    mergeMap((act: any) => {
      const {payload} = act;
      return $axios.api
        .post('api/searchProvinces', payload)
        .then((rs: any) => {
          const {data} = rs;
          return placesActions.searchProvincesSuccess(mapData(data));
        })
        .catch((err: any) => {
          console.log('Error', err);
          return placesActions.searchProvincesFail(err);
        });
    }),
  );
};
const mapData = (data: any) => {
  return data.map((item: any) => {
    const {system}: any = store.getState();
    const {language} = system;
    let uriList = [];
    item.Images.map((uri) => {
      uriList.push(
        `https://stravelapp.herokuapp.com/${uri
          .toString()
          .replace('public', '')}`,
      );
    });
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
