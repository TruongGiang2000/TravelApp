import {combineEpics} from 'redux-observable';
import {getProvinces, searchProvinces} from './places/epic';
const rootEpics = combineEpics(getProvinces, searchProvinces);
export default rootEpics;
