import React, {Component} from 'react';
import {Text, View, StyleSheet, Pressable, Image, FlatList} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import ButtonCustom from '../../../components/ButtonCustom';
import {translate} from '../../../util/translate';

export default class KindOfRoom extends Component<any, any> {
  render() {
    const {
      iconinternet,
      source,
      size,
      bed,
      amount,
      title,
      policy,
      quantum,
      internet,
    } = this.props;
    return (
      <Pressable style={styles.MainItem}>
        <View style={styles.down}>
          <View style={styles.down1}>
            <View style={[styles.viewRow, {marginRight: wp('2')}]}>
              <Icon name="warehouse" style={styles.icon} size={wp('2.5')} />
              <Text style={styles.text}>{size}</Text>
            </View>
            <View style={[styles.viewRow, {marginRight: wp('2')}]}>
              <Icon name="user" style={styles.icon} size={wp('2.5')} />
              <Text style={styles.text}>{bed}</Text>
            </View>
            <View style={styles.viewRow}>
              <Icon name="user" style={styles.icon} size={wp('2.5')} />
              <Text style={styles.text}>{amount}</Text>
            </View>
          </View>
          <View style={styles.down2}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.viewRow}>
              <Text style={styles.policy}>{policy}</Text>
              <Ionicons
                name="information-circle"
                size={wp('4')}
                color="#FA2A00"
              />
            </View>
            <Text style={styles.quantum}>{quantum}</Text>
            <View style={styles.viewRowBottom}>
              <View style={styles.viewRow}>
                <AntDesign name="clouduploado" size={wp('4')} color="#21CC00" />
                <Text style={styles.internet}>{internet}</Text>
              </View>
              <ButtonCustom
                title={translate('book_room')}
                style={styles.buttonCustom}
                titleStyle={{fontSize: wp('3.7')}}
              />
            </View>
          </View>
        </View>
        <Image source={source} style={[styles.imgstyle]}></Image>
      </Pressable>
    );
  }
}
const styles = StyleSheet.create({
  MainItem: {
    width: wp('70'),
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: hp('5'),
    marginTop: hp('20'),
    marginHorizontal : wp('4.7')
  },
  down: {
    position: 'absolute',
    backgroundColor: '#FFFFFF',
    width: wp('70'),
    height: hp('40'),
    borderRadius: wp('3'),
    justifyContent: 'center',
    flexDirection: 'column',
  },
  imgstyle: {
    width: wp('60'),
    height: hp('40'),
    borderRadius: wp('3'),
    marginBottom: hp('20'),
  },
  down1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp('17'),
    paddingVertical: hp('0.5'),
  },
  down2: {
    paddingLeft: wp('5.5'),
  },
  icon: {
    color: '#5E5E5E',
  },
  viewRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  text: {
    fontSize: wp('2.9'),
    color: '#5E5E5E',
    fontFamily: 'roboto-slab.regular',
    marginLeft: wp('1'),
  },
  title: {
    fontSize: wp('6'),
    fontFamily: 'roboto-slab-bold',
  },
  policy: {
    fontSize: wp('3'),
    color: '#FA2A00',
    fontFamily: 'roboto-slab-bold',
    marginRight: wp('1.5'),
  },
  internet: {
    fontSize: wp('3'),
    fontFamily: 'roboto-slab.regular',
    color: '#5E5E5E',
    marginLeft: wp('1'),
  },
  quantum: {
    fontSize: wp('2.9'),
    marginTop: hp('0.7'),
    fontFamily: 'roboto-slab.regular',
    color: '#5B5B5B',
  },
  iconinternet: {
    height: hp('1.9'),
    width: wp('5'),
    marginRight: wp('2'),
  },
  buttonCustom: {
    paddingVertical: hp('0.7'),
    paddingHorizontal: wp('5'),
  },
  viewRowBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: wp('3'),
    marginBottom: hp('-2'),
  },
});
