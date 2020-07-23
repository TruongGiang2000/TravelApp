import React, {Component} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import appReducers from './src/redux/reducers';
import Test from './testLanguage';
export const store = createStore(appReducers);
class index extends Component<any, any> {
  render() {
    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
          <Test/>
        </View>
      </Provider>
    );
  }
}

export default index;
