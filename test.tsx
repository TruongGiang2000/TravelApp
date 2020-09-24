import React, {Component} from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import configureStore from './src/redux/store';
class test extends Component<any, any> {
  render() {
    return (
      <Provider store={configureStore}>
        <View style={{flex: 1}}></View>
      </Provider>
    );
  }
}

export default test;