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
    ofType(types.GET_HOTEL_BY_PROVINCE),
    mergeMap((act: any) => {
      const {payload} = act;
      console.log('payloadgetHotelByPro', payload);
      return $axios.api
        .get('api/getHotelByPro/?provinceID=' + payload)
        .then((rs: any) => {
          const {data} = rs;
          console.log('getHotelByPro-->', data);
          return hotelAction.getHotelByProvinceSuccess(data);
        })
        .catch((err: any) => {
          return hotelAction.getHotelByProvinceFail(err);
        });
    }),
  );
};
export const getTypeRoomByHotel = ($action: any) => {
  return $action.pipe(
    ofType(types.GET_TYPE_ROOM_BY_HOL),
    mergeMap((act: any) => {
      const {payload} = act;
      console.log('payloadgetHotelByPro', payload);
      return $axios.api
        .get('api/getTypeRoomByHotel/?idHotel=' + payload)
        .then((rs: any) => {
          const {data} = rs;
          console.log('getHotelByPro-->', data);
          return hotelAction.getTypeRoomByHolSuccess(data);
        })
        .catch((err: any) => {
          return hotelAction.getTypeRoomByHolFail(err);
        })
        .finally(() => {
          actionMain.loading(false);
        });
    }),
  );
};
