import {types, hotelAction} from './actions';
import {$axios} from '../../constants/config/api';
import {ofType} from 'redux-observable';
import {mergeMap} from 'rxjs/operators';
import {actionMain} from '../../util/mainActions';
export const getAllHotel = ($action: any) => {
  return $action.pipe(
    ofType(types.GET_ALL_HOTEL),
    mergeMap((act: any) => {
      return $axios.api
        .get('api/getAllHotel')
        .then((rs: any) => {
          const {data} = rs;
          console.log('getAllHotel-->', data);
          return hotelAction.getAllHotelSuccess(data);
        })
        .catch((err: any) => {
          return hotelAction.getAllHotelFail(err);
        });
    }),
  );
};
export const getConvebyId = ($action: any) => {
  return $action.pipe(
    ofType(types.GET_CONVE_BY_ID),
    mergeMap((act: any) => {
      const {payload} = act;
      console.log('payload', payload);
      return $axios.api
        .post('api/getConveById', payload)
        .then((rs: any) => {
          const {data} = rs;
          console.log('getConvebyId-->', data);
          return hotelAction.getCoveByIdSucess(data);
        })
        .catch((err: any) => {
          return hotelAction.getCoveByIdFail(err);
        })
        .finally(() => {
          actionMain.loading(false);
        });
    }),
  );
};
export const getHotelByPro = ($action: any) => {
  return $action.pipe(
    ofType(types.GET_ALL_HOTEL),
    mergeMap((act: any) => {
      const {payload} = act;
      return $axios.api
        .get('api/getHotelByPro', payload)
        .then((rs: any) => {
          const {data} = rs;
          console.log('getHotelByPro-->', data);
          return hotelAction.getAllHotelSuccess(data);
        })
        .catch((err: any) => {
          return hotelAction.getAllHotelFail(err);
        });
    }),
  );
};
