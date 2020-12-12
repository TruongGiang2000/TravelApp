import {combineReducers} from 'redux';
import {systemReducer} from './system/reducer';
import {placesReducer} from './places/reducer';
import {hotelsReducer} from './hotel/reducer';
import {authReducer} from './auth/reducer';
export default combineReducers({
  system: systemReducer,
  places: placesReducer,
  hotel: hotelsReducer,
  auth: authReducer,
});
