import React, {Component} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Provider} from 'react-redux';
import Test from './testLanguage';
import Itemdestination from './src/home/module/itemdestination';
import configureStore from './src/redux/store';
class index extends Component<any, any> {
  render() {
    return (
      <Provider store={configureStore}>
        <View style={{flex: 1}}>
          <Test />
          <Itemdestination title={'alo alo'} />
        </View>
      </Provider>
    );
  }
}

export default index;
