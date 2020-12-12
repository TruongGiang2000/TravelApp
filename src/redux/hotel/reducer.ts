import {types} from './actions';
const initState = {
  allHotel: [],
  conveById: [],
  hotelByProvince: [],
  typeRoom: [],
};
export const hotelsReducer: any = (state = initState, actions: any) => {
  const {payload} = actions;
  switch (actions.type) {
    case types.GET_ALL_HOTEL:
      return {...state, allHotel: []};
    case types.GET_ALL_HOTEL_SUCCESS:
      return {...state, allHotel: payload};
    case types.GET_ALL_HOTEL_FAIL:
      return {...state, allHotel: []};
    case types.GET_CONVE_BY_ID:
      return {...state, conveById: []};
    case types.GET_CONVE_BY_ID_SUCCESS:
      return {...state, conveById: payload};
    case types.GET_CONVE_BY_ID_FAIL:
      return {...state, conveById: []};
    case types.GET_HOTEL_BY_PROVINCE:
      return {...state, hotelByProvince: []};
    case types.GET_HOTEL_BY_PROVINCE_SUCCESS:
      return {...state, hotelByProvince: payload};
    case types.GET_HOTEL_BY_PROVINCE_FAIL:
      return {...state, hotelByProvince: []};
    case types.GET_TYPE_ROOM_BY_HOL:
      return {...state, typeRoom: []};
    case types.GET_TYPE_ROOM_BY_HOL_SUCCESS:
      return {...state, typeRoom: payload};
    case types.GET_TYPE_ROOM_BY_HOL_FAIL:
      return {...state, typeRoom: []};
    default:
      return state;
  }
};
