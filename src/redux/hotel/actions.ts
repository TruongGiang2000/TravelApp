export const types = {
  GET_ALL_HOTEL: 'GET_ALL_HOTEL',
  GET_ALL_HOTEL_SUCCESS: 'GET_ALL_HOTEL_SUCCESS',
  GET_ALL_HOTEL_FAIL: 'GET_ALL_HOTEL_FAIL',
  GET_CONVE_BY_ID: 'GET_CONVE_BY_ID',
  GET_CONVE_BY_ID_SUCCESS: 'GET_CONVE_BY_ID_SUCCESS',
  GET_CONVE_BY_ID_FAIL: 'GET_CONVE_BY_ID_FAIL',
  GET_HOTEL_BY_PROVINCE: 'GET_HOTEL_BY_PROVINCE',
  GET_HOTEL_BY_PROVINCE_SUCCESS: 'GET_HOTEL_BY_PROVINCE_SUCCESS',
  GET_HOTEL_BY_PROVINCE_FAIL: 'GET_HOTEL_BY_PROVINCE_FAIL',
  GET_TYPE_ROOM_BY_HOL: 'GET_TYPE_ROOM_BY_HOL',
  GET_TYPE_ROOM_BY_HOL_SUCCESS: 'GET_TYPE_ROOM_BY_HOL_SUCCESS',
  GET_TYPE_ROOM_BY_HOL_FAIL: 'GET_TYPE_ROOM_BY_HOL_FAIL',
  BOOKING: 'BOOKING',
  BOOKING_SUCCESS: 'BOOKING_SUCCESS',
  BOOKING_FAIL: 'BOOKING_FAIL',
  GET_HOTEL_BY_ID: 'GET_HOTEL_BY_ID',
  GET_HOTEL_BY_ID_SUCCESS: 'GET_HOTEL_BY_ID_SUCCESS',
  GET_HOTEL_BY_ID_FAIL: 'GET_HOTEL_BY_ID_FAIL',
};
const action = (type: string, payload?: any) => ({type, payload});
export const hotelAction = {
  getAllHotel: (payload: any) => action(types.GET_ALL_HOTEL, payload),
  getAllHotelSuccess: (payload: any) =>
    action(types.GET_ALL_HOTEL_SUCCESS, payload),
  getAllHotelFail: (payload: any) => action(types.GET_ALL_HOTEL_FAIL, payload),
  getCoveById: (payload: any) => action(types.GET_CONVE_BY_ID, payload),
  getCoveByIdSucess: (payload: any) =>
    action(types.GET_CONVE_BY_ID_SUCCESS, payload),
  getCoveByIdFail: (payload: any) =>
    action(types.GET_CONVE_BY_ID_FAIL, payload),
  getHotelByProvince: (payload: any) =>
    action(types.GET_HOTEL_BY_PROVINCE, payload),
  getHotelByProvinceSuccess: (payload: any) =>
    action(types.GET_HOTEL_BY_PROVINCE_SUCCESS, payload),
  getHotelByProvinceFail: (payload: any) =>
    action(types.GET_HOTEL_BY_PROVINCE_FAIL, payload),
  getTypeRoomByHol: (payload: any) =>
    action(types.GET_TYPE_ROOM_BY_HOL, payload),
  getTypeRoomByHolSuccess: (payload: any) =>
    action(types.GET_TYPE_ROOM_BY_HOL_SUCCESS, payload),
  getTypeRoomByHolFail: (payload: any) =>
    action(types.GET_TYPE_ROOM_BY_HOL_FAIL, payload),
  booking: (payload: any) => action(types.BOOKING, payload),
  bookingSuccess: (payload: any) => action(types.BOOKING_SUCCESS, payload),
  bookingFail: (payload: any) => action(types.BOOKING_FAIL, payload),
  getHotelById: (payload: any) => action(types.GET_HOTEL_BY_ID, payload),
  getHotelByIdSuccess: (payload: any) =>
    action(types.GET_HOTEL_BY_ID_SUCCESS, payload),
  getHotelByIdFail: (payload: any) =>
    action(types.GET_HOTEL_BY_ID_FAIL, payload),
};
