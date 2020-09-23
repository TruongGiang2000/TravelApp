import React, {Component} from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import TraTe from '../../../components/TraTe';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import ButtonCustom from '../../../components/ButtonCustom';
import ButtonFBCustom from '../../../components/ButtonFBCustom';
class index extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.MainContainer}>
        <View style={styles.viewContent}>
          <TraTe i18nKey={'signup'} style={styles.signinText} />
          <View style={styles.textInput}>
            <FontAwesome name={'user'} size={20} style={styles.icon} />
            <TextInput placeholder={'Tài khoản'} />
          </View>
          <View style={styles.textInput}>
            <FontAwesome name={'lock'} size={20} style={styles.icon} />
            <TextInput placeholder={'Mật khẩu'} autoCompleteType={'password'} />
          </View>
          <View style={styles.textInput}>
            <FontAwesome name={'lock'} size={20} style={styles.icon} />
            <TextInput placeholder={'Nhập lại mật khẩu'} />
          </View>
          <View style={styles.textInput}>
            <MaterialCommunityIcons
              name={'email'}
              size={20}
              style={styles.icon}
            />
            <TextInput placeholder={'Email'} />
          </View>
          <ButtonCustom title="createaccount" style={styles.buttonCustom} />
        </View>
        <View style={styles.dash}>
          <View style={styles.dash1}></View>
          <TraTe i18nKey={'or'} style={styles.orText} />
          <View style={styles.dash1}></View>
        </View>
        <ButtonFBCustom title={'facebock'} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingHorizontal: wp('3'),
  },
  viewContent: {
    backgroundColor: '#FFFFFF',
    padding: wp('3'),
    marginTop: hp('7'),
    borderRadius: wp('2'),
  },
  signinText: {
    textTransform: 'uppercase',
    fontFamily: 'roboto-slab-bold',
    fontSize: wp('4'),
    color: '#323B45',
    textAlign: 'center',
  },
  textInput: {
    marginTop: hp('2'),
    borderWidth: 3,
    borderRadius: wp('2'),
    borderColor: ' rgba(168, 182, 200, 0.196078)',
    height: hp('7'),
    flexDirection: 'row',
    padding: wp('1'),
  },
  icon: {
    marginRight: wp('2'),
    marginTop: hp('1.2'),
  },
  buttonCustom: {
    marginTop: hp('2'),
    height: wp('15'),
    width: wp('80'),
    alignSelf: 'center',
    justifyContent: 'center',
  },
  dash: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
  dash1: {
    marginTop: hp('5'),
    height: hp('0.1'),
    width: wp('30'),
    backgroundColor: '#FFFFFF',
  },
  orText: {
    marginTop: hp('3'),
    fontSize: wp('5'),
    color: '#FFFFFF',
    margin: wp('2'),
    fontFamily: 'roboto-slab-light',
  },
});
export default index;
