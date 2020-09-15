import store from '../store';
export const types = {
  GET_MOUNTAIN_PROVINCES: 'GET_MOUNTAIN_PROVINCES',
  GET_MOUTAIN_PROVINCES_SUCCESS: 'GET_MOUTAIN_PROVINCES_SUCCESS',
  GET_MOUTAIN_PROVINCES_FAIL: 'GET_MOUTAIN_PROVINCES_FAIL',
  GET_OFFER_PROVINCES: 'GET_OFFER_PROVINCES',
  GET_OFFER_PROVINCES_SUCCESS: 'GET_OFFER_PROVINCES_SUCCESS',
  GET_OFFER_PROVINCES_FAIL: 'GET_OFFER_PROVINCES_FAIL',
  GET_FAMOUS_PROVINCES: 'GET_FAMOUS_PROVINCES',
  GET_FAMOUS_PROVINCES_SUCCESS: 'GET_FAMOUS_PROVINCES_SUCCESS',
  GET_FAMOUS_PROVINCES_FAIL: 'GET_FAMOUS_PROVINCES_FAIL',
  SEARCH_PROVINCES: 'SEARCH_PROVINCES',
  SEARCH_PROVINCES_SUCCESS: 'SEARCH_PROVINCES_SUCCESS',
  SEARCH_PROVINCES_FAIL: 'SEARCH_PROVINCES_FAIL',
  MAP_PROVINCES_AGAIN: 'MAP_PROVINCES_AGAIN',
};
const action = (type: string, payload?: any) => ({type, payload});
export const placesActions = {
  getMountainProvinces: (payload: any) =>
    action(types.GET_MOUNTAIN_PROVINCES, payload),
  getMountainProvincesSuccess: (payload: any) =>
    action(types.GET_MOUTAIN_PROVINCES_SUCCESS, payload),
  getMountainProvincesFail: (payload: any) =>
    action(types.GET_MOUTAIN_PROVINCES_FAIL, payload),
  getOfferProvinces: (payload: any) =>
    action(types.GET_OFFER_PROVINCES, payload),
  getOfferProvincesSuccess: (payload: any) =>
    action(types.GET_OFFER_PROVINCES_SUCCESS, payload),
  getOfferProvincesFail: (payload: any) =>
    action(types.GET_OFFER_PROVINCES_FAIL, payload),
  getFamousProvinces: (payload: any) =>
    action(types.GET_FAMOUS_PROVINCES, payload),
  getFamousProvincesSuccess: (payload: any) =>
    action(types.GET_FAMOUS_PROVINCES_SUCCESS, payload),
  getFamousProvincesFail: (payload: any) =>
    action(types.GET_FAMOUS_PROVINCES_FAIL, payload),
  searchProvinces: (payload: any) => action(types.SEARCH_PROVINCES, payload),
  searchProvincesSuccess: (payload: any) =>
    action(types.SEARCH_PROVINCES_SUCCESS, payload),
  searchProvincesFail: (payload: any) =>
    action(types.SEARCH_PROVINCES_FAIL, payload),
  mapProvincesAgain: (payload: any) =>
    action(types.MAP_PROVINCES_AGAIN, {
      mountainProvinces: mapData(payload.mountainProvinces),
      offerProvinces: mapData(payload.offerProvinces),
      famousProvinces: mapData(payload.famousProvinces),
      searchingProvinces: mapData(payload.searchingProvinces),
    }),
};
const mapData = (data: any) => {
  return data.map((item: any) => {
    const {system}: any = store.getState();
    const {language} = system;
    item.ID = item.ID;
    item.Stars = item.Starts;
    item.Lovers = item.Lovers;
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
