import {combineEpics} from 'redux-observable';
import {
  getMountainProvinces,
  getOfferProvinces,
  getFamousProvinces,
} from './places/epic';
import {changeLanguages} from './system/epic';

const rootEpics = combineEpics(
  getMountainProvinces,
  changeLanguages,
  getOfferProvinces,
  getFamousProvinces,
);
export default rootEpics;
