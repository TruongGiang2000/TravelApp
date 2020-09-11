import React, {Component} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Itemdestination from './src/screens/home/modules/itemdestination';
import Itemhotel1 from './src/screens/home/modules/itemhotel1';
import Itemassess from './src/screens/home/modules/itemassess';
import Kindofroom from './src/screens/home/modules/kindofroom';
import {Provider} from 'react-redux';
import configureStore from './src/redux/store';
import HotelSeacrh from './src/hotelsearch/HotelSearch';
class index extends Component<any, any> {
  render() {
    return (
      <Provider store={configureStore}>
        <View style={{flex: 1}}>
          <HotelSeacrh
            
          />
        </View>
      </Provider>
    );
  }
}

export default index;
