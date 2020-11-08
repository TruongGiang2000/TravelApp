import {Provider} from 'react-redux';
import configureStore from './src/redux/store';
import App from './src/routes/RootRoute';
import React from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
const app = () => (
  <Provider store={configureStore}>
    <App />
  </Provider>
);
AppRegistry.registerComponent(appName, () => app);
console.disableYellowBox = true;
