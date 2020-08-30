import React, {Component} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Provider} from 'react-redux';
import Test from './testLanguage';
import Itemhotel from './src/home/module/itemhotel';
import Itemnew from './src/home/module/ItemNew';
import ItemImage from './src/discover/module/ItemImage';
import Gradient from 'react-native-linear-gradient';
import ItemHotelAroundHere from './src/city/ItemHotelAroundHere';
import ButtonCustom from './src/components/custombutton';
import configureStore from './src/redux/store';
import CustomCirle from './src/components/CustomCircle';
import ItemUser from './src/notification/ItemUser';
import ItemNotification from './src/notification/ItemNotification'
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

class index extends Component<any, any> {
  render() {
    return (
<Provider store={configureStore}>
        <ItemNotification
        source={require('./src/assets/images/images.jpg')}
        title='đáfgalkjasfklasjflks đaf asd asda á aj'
        calendar='12/2/2000'
        time='11h30'
        day='21/12/2020'
        isShow={true}
        />
        <ItemUser
        source={require('./src/assets/images/images.jpg')}
        name='áddấdasdasds'
        core='123'
        />
        
      </Provider>

      
    );
  }
}

export default index;
