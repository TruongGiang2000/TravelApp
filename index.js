/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './test1';
import {name as appName} from './app.json';
AppRegistry.registerComponent(appName, () => App);
console.disableYellowBox = true;
