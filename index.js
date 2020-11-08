import {Provider} from 'react-redux';
import configureStore from './src/redux/store';
import App from './src/routes/App';
import React from 'react';
import Test1 from './test1';
import Test2 from './src/screens/user/modules/UserNotLogin';
import ChooseRoom from './src/screens/hotel/modules/ChooseRoom';
import MapView from './src/screens/hotel/modules/MapView';
import {AppRegistry, StatusBar} from 'react-native';
import {name as appName} from './app.json';
import User from './src/screens/user/User';
import SignIn from './src/screens/user/modules/SignIn';
const app = () => (
  <Provider store={configureStore}>
    <StatusBar
      backgroundColor={'#ffffff'}
      barStyle={'dark-content'}
      animated={true}
    />
    <SignIn />
  </Provider>
);

AppRegistry.registerComponent(appName, () => app);
console.disableYellowBox = true;
