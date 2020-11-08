import {combineEpics} from 'redux-observable';
import {
  getProvinces,
  searchProvinces,
  getLocationByProvince,
  getAllProvinces,
} from './places/epic';
import {getAllHotel, getConvebyId} from './hotel/epic';
import {getAllNews} from './system/epic';
const rootEpics = combineEpics(
  getProvinces,
  searchProvinces,
  getLocationByProvince,
  getAllProvinces,
  getAllHotel,
  getAllNews,
  getConvebyId,
);
export default rootEpics;
