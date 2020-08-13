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
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

class index extends Component<any, any> {
  render() {
    return (
<Provider store={configureStore}>
        <View style={{flex: 1}}>
        <View style={{marginTop: 50, position:'relative'}}>
          
        <ItemImage
            source={require('./src/assets/images/lai_chau.jpg')}
            isShow = {true}
            title="da nang"
        />
      <ItemHotelAroundHere
        source={require('./src/assets/images/congtamquan.jpg')}
        title="Title"
        content="content"
        titlePrice="100"
        titleUSD="USD"
        starCount="3"
      />
      
      </View>        
        </View>
      </Provider>

      
    );
  }
}

export default index;
