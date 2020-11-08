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
};
