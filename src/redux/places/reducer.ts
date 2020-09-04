import {types} from './actions';
const initState = {
  mountainProvinces: [],
  offerProvinces: [],
  famousProvinces: [],
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
    default:
      return state;
  }
};
