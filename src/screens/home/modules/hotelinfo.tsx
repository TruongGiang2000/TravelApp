import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import TraTe from '../../../components/TraTe';
<<<<<<< HEAD
import ButtonCustom from '../../../components/CustomButton';
import ItemMassess from './ItemMassess';
=======
import ButtonCustom from '../../../components/custombutton';
import Itenassess from './ItemMassess';

>>>>>>> 65fcf01bd1941b6e1043d99cedf252334a1b0863
class Hotel extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { title, price, content } = this.props;
    return (
      <View style={styles.MainContainer}>
        <ScrollView>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.price}>{price}</Text>
          <View>
            <ButtonCustom
              title={'endow'}
              style={styles.buttoncustom}></ButtonCustom>
          </View>
          <Text style={styles.content}>{content}</Text>
          <TraTe i18nKey={'detail'} style={styles.detail}></TraTe>
          <ItemMassess
            title={'rate'}
            review={'review'}
            numberofreview={'numberofreview'}></ItemMassess>
          <TraTe i18nKey={'convenient'} style={styles.convenient}></TraTe>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    marginLeft: wp(5),
    justifyContent: 'center',
  },
  title: {
    fontSize: wp('5'),
    fontFamily: 'roboto-slab-bold',
  },
  price: {
    fontSize: wp('4.5'),
    color: '#FA2A00',
    fontFamily: 'roboto-slab-bold',
  },
  buttoncustom: {
    marginTop: hp('1.5'),
    height: hp('4'),
    width: wp('30'),
  },
  content: {
    marginRight: wp('10'),
    marginTop: hp('1.5'),
  },
  detail: {
    marginTop: hp('0.5'),
    color: '#0F00DA',
    fontFamily: 'roboto-slab-bold',
  },
  convenient: {
    fontFamily: 'roboto-slab-bold',
    fontSize: wp('5'),
  },
});
export default Hotel;
