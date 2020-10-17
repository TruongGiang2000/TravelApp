import {types} from './actions';
const initState = {
  mountainProvinces: [],
  offerProvinces: [],
  famousProvinces: [],
  searchingProvinces: [],
  location: [],
};
export const placesReducer: any = (state = initState, actions: any) => {
  const {payload} = actions;
  switch (actions.type) {
    case types.GET_MOUNTAIN_PROVINCES:
      return {...state, mountainProvinces: []};
    case types.GET_MOUTAIN_PROVINCES_SUCCESS:
      return {...state, mountainProvinces: payload};
    case types.GET_MOUTAIN_PROVINCES_FAIL:
      return {...state, mountainProvinces: []};
    case types.GET_OFFER_PROVINCES:
      return {...state, offerProvinces: []};
    case types.GET_OFFER_PROVINCES_SUCCESS:
      return {...state, offerProvinces: payload};
    case types.GET_OFFER_PROVINCES_FAIL:
      return {...state, offerProvinces: []};
    case types.GET_FAMOUS_PROVINCES:
      return {...state, famousProvinces: []};
    case types.GET_FAMOUS_PROVINCES_SUCCESS:
      return {...state, famousProvinces: payload};
    case types.GET_FAMOUS_PROVINCES_FAIL:
      return {...state, famousProvinces: []};
    case types.SEARCH_PROVINCES:
      return {...state, searchingProvinces: []};
    case types.SEARCH_PROVINCES_SUCCESS:
      return {...state, searchingProvinces: payload};
    case types.SEARCH_PROVINCES_FAIL:
      return {...state, searchingProvinces: []};
    case types.MAP_PROVINCES_AGAIN:
      return {
        ...state,
        mountainProvinces: payload.mountainProvinces,
        offerProvinces: payload.offerProvinces,
        famousProvinces: payload.famousProvinces,
        searchingProvinces: payload.searchingProvinces,
      };
    case types.GET_LOCATION_BY_PROVINCE:
      return {...state, location: []};
    case types.GET_LOCATION_BY_PROVINCE_SUCCESS:
      return {...state, location: payload};
    case types.GET_LOCATION_BY_PROVINCE_FAIL:
      return {...state, location: []};
    default:
      return state;
  }
};
