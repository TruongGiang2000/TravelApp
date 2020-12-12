import {combineEpics} from 'redux-observable';
import {
  getProvinces,
  searchProvinces,
  getLocationByProvince,
  getAllProvinces,
} from './places/epic';
import {
  getAllHotel,
  getConvebyId,
  getHotelByPro,
  getTypeRoomByHotel,
} from './hotel/epic';
import {getAllNews} from './system/epic';
import {signUp, getProfile, signIn, updateProfile} from './auth/epic';
const rootEpics = combineEpics(
  getProvinces,
  searchProvinces,
  getLocationByProvince,
  getAllProvinces,
  getAllHotel,
  getAllNews,
  getConvebyId,
  getHotelByPro,
  getTypeRoomByHotel,
  signUp,
  getProfile,
  signIn,
  updateProfile,
);
export default rootEpics;
