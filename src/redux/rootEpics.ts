import {combineEpics} from 'redux-observable';
import {
  getProvinces,
  searchProvinces,
  getLocationByProvince,
} from './places/epic';
const rootEpics = combineEpics(
  getProvinces,
  searchProvinces,
  getLocationByProvince,
);
export default rootEpics;
