import {Provider} from 'react-redux';
import configureStore from './src/redux/store';
import App from './App';
import React from 'react';
import Test1 from './test1';
import Test2 from './src/screens/user/modules/UserNotLogin';
import ChooseRoom from './src/screens/hotel/modules/ChooseRoom';
import {AppRegistry, StatusBar} from 'react-native';
import {name as appName} from './app.json';

const app = () => (
  <Provider store={configureStore}>
    <StatusBar
      backgroundColor={'#ffffff'}
      barStyle={'dark-content'}
      animated={true}
    />
    <Test1 />
  </Provider>
);

AppRegistry.registerComponent(appName, () => app);
console.disableYellowBox = true;
