import {createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import reducers from './reducers/index';
import {createWhitelistFilter} from 'redux-persist-transform-filter';

const lang = createWhitelistFilter('languageReducer', ['language']);

const persistConfig: any = {
    key: 'root',
    transforms: [lang],
    storage: AsyncStorage,
    timeout: 0,
};
const persistedReducer = persistReducer(persistConfig, reducers);
const configureStore = createStore(
    persistedReducer,
);
export const persistor = persistStore(configureStore);
// configureStore.subscribe(() =>
//   console.log('configureStore.getState()', configureStore.getState()),
// );
export default configureStore;