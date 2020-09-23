import React, {Component} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Itemdestination from './src/screens/home/modules/itemdestination';
import Itemhotel1 from './src/screens/home/modules/itemhotel1';
import Kindofroom from './src/screens/home/modules/kindofroom';
import {Provider} from 'react-redux';
import configureStore from './src/redux/store';
import HotelSeacrh from './src/hotelsearch/HotelSearch';
import MenuList from './src/components/MenuList';
import InputComponent from './src/booking/modules/InputComponent';
import Profilecustomer from './src/booking/Profilecustomer';
import BookingDetail from './src/booking/BookingDetail';
import SuccessfullyPlaced from './src/booking/SuccessfullyPlaced';
import PaddingComponent from './src/booking/modules/paddingcomponent';
import StepIndicator from './src/booking/modules/StepIndicator';
class test extends Component<any, any> {
  render() {
    return (
      <Provider store={configureStore}>
        <View style={{flex: 1}}>
          <StepIndicator
            
          /> 
        </View>
      </Provider>
    );
  }
}

export default test;
