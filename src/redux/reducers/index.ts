import {combineReducers} from 'redux';
import languageReducer from './language_reducer';

const appReducers = combineReducers({
    languageReducer
})
export default appReducers;