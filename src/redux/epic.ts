import {combineEpics} from 'redux-observable';
import {
  getMountainProvinces,
  getOfferProvinces,
  getFamousProvinces,
} from './places/epic';

const rootEpics = combineEpics(
  getMountainProvinces,
  getOfferProvinces,
  getFamousProvinces,
);
export default rootEpics;
