import React, {Component} from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import configureStore from './src/redux/store';
import Profilecustomer from './src/booking/Profilecustomer';
import ProfileCustomer from './src/booking/Profilecustomer';
class test extends Component<any, any> {

  render() {
    return (
      <Provider store={configureStore}>
        <ProfileCustomer/>
      </Provider>
    );
  }
}

export default test;