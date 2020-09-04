import {combineReducers} from 'redux';
import {systemReducer} from './system/reducer';
import {placesReducer} from './places/reducer';
export default combineReducers({
  system: systemReducer,
  places: placesReducer,
});
