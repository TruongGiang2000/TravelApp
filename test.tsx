import React, {Component} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Provider} from 'react-redux';
import Test from './testLanguage';
import Itemhotel from './src/home/module/itemhotel'
import Itemnew from './src/home/module/itemnew'
class index extends Component<any, any> {
  render() {
    return (
      <View>
        <Itemhotel 
            source={require('./src/assets/images/angiang.jpg')}
            titlehotel="ha noi"
            titleplace="noi dep"
        />
        <Itemnew
            source={require('./src/assets/images/angiang.jpg')}
            titlehotel="ha noi"
            titleplace="noi depasdas dasda asvdas dva sdavsd as asf asf afa fasfas fsa f"
        />
      </View>
    );
  }
}

export default index;
