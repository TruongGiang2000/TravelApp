import React, {Component} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Itemdestination from './src/home/module/itemdestination';
class index extends Component<any, any> {
  render() {
    return (
      <View style={{flex: 1}}>
        <Itemdestination
          title={'Nhà Hát Nón Lá'}
          source={require('./src/assets/images/images.jpg')}
          number={'18'}
          name={'Bạc Liêu Province'}
          place={'địa điểm ưa thích nhất'}
          starCount={5}
        />
      </View>
    );
  }
}

export default index;
