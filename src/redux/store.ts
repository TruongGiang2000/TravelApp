import {createStore, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import {createEpicMiddleware} from 'redux-observable';
import {createWhitelistFilter} from 'redux-persist-transform-filter';
import rootReducers from './reducer';
import rootEpic from './rootEpics';
const lang = createWhitelistFilter('system', ['language']);
const token = createWhitelistFilter('auth', ['token']);
const epicMiddleware = createEpicMiddleware();
const persistConfig: any = {
  key: 'root',
  transforms: [lang, token],
  storage: AsyncStorage,
  timeout: 0,
};
const persistedReducer = persistReducer(persistConfig, rootReducers);
const configureStore = createStore(
  persistedReducer,
  applyMiddleware(epicMiddleware),
);
epicMiddleware.run(rootEpic);
export const persistor = persistStore(configureStore);
export default configureStore;
