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
class index extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.MainContainer}>
        <View style={styles.viewContent}>
          <TraTe i18nKey={'signup'} style={styles.signupText} />
          <View style={styles.textInput}>
            <FontAwesome name={'user'} size={wp('5')} color={'#A8B6C8'} />
            <TextInput
              style={styles.inputText}
              placeholder={'Tài khoản'}
              placeholderTextColor={'#A8B6C8'}
            />
          </View>
          <View style={styles.textInput}>
            <FontAwesome name={'lock'} size={wp('5')} color={'#A8B6C8'} />
            <TextInput
              style={styles.inputText}
              placeholderTextColor={'#A8B6C8'}
              placeholder={'Mật khẩu'}
              textContentType={'password'}
            />
          </View>
          <View style={styles.textInput}>
            <FontAwesome name={'lock'} size={wp('5')} color={'#A8B6C8'} />
            <TextInput
              style={styles.inputText}
              placeholderTextColor={'#A8B6C8'}
              placeholder={'Nhập lại mật khẩu'}
            />
          </View>
          <View style={styles.textInput}>
            <MaterialCommunityIcons
              name={'email'}
              size={wp('5')}
              color={'#A8B6C8'}
            />
            <TextInput
              placeholderTextColor={'#A8B6C8'}
              style={styles.inputText}
              placeholder={'Email'}
            />
          </View>
          <ButtonCustom title="createaccount" style={styles.buttonCustom} />
        </View>
        <View style={styles.dash}>
          <View style={styles.dash1}></View>
          <TraTe i18nKey={'or'} style={styles.orText} />
          <View style={styles.dash1}></View>
        </View>
        <TraTe onPress={this.props.onPressHaveAccount} i18nKey={'have_an_account'} style={styles.haveAccount} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingHorizontal: wp('4'),
  },
  viewContent: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: wp('4'),
    paddingVertical: hp('3'),
    marginTop: hp('7'),
    borderRadius: wp('2'),
  },
  signupText: {
    textTransform: 'uppercase',
    fontFamily: 'roboto-slab-bold',
    fontSize: wp('4'),
    color: '#323B45',
    textAlign: 'center',
  },
  textInput: {
    marginTop: hp('2'),
    borderWidth: 2,
    borderRadius: wp('2'),
    borderColor: ' rgba(168, 182, 200, 0.196078)',
    height: hp('7'),
    flexDirection: 'row',
    paddingHorizontal: wp('4'),
    alignItems: 'center',
  },
  buttonCustom: {
    marginTop: hp('2'),
    paddingVertical: hp('2.5'),
  },
  dash: {
    marginVertical: hp('2'),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.4,
  },
  dash1: {
    height: hp('0.1'),
    width: wp('37'),
    backgroundColor: '#FFFFFF',
  },
  orText: {
    fontSize: wp('3.8'),
    color: '#FFFFFF',
    marginHorizontal: wp('2'),
    fontFamily: 'roboto-slab.regular',
  },
  inputText: {
    width: wp('70'),
    marginLeft: wp('2'),
    fontSize: wp('3.8'),
  },
  haveAccount: {
    color: '#fff',
    fontFamily: 'roboto-slab-bold',
    fontSize: wp('4'),
    alignSelf: 'center',
  },
});
export default index;
