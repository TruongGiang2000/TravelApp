import React, {Component} from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import TraTe from '../../../components/TraTe';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
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
        <TraTe i18nKey={'welcome'} style={styles.welcomeText} />
        <Text style={styles.title}> new amazing countries</Text>
        <View style={styles.viewContent}>
          <TraTe i18nKey={'signin'} style={styles.signinText} />
          <View style={styles.textInput}>
            <FontAwesome name={'user'} size={wp('4')} color={'#A8B6C8'} />
            <TextInput
              style={styles.textInputStyle}
              placeholderTextColor={'#A8B6C8'}
              placeholder={'Tài khoản'}
            />
          </View>
          <View style={styles.textInput}>
            <FontAwesome name={'lock'} size={20} style={styles.icon} />
            <TextInput placeholder={'Mật khẩu'} secureTextEntry={true} />
          </View>
          <ButtonCustom
            titleStyle={styles.ButtonText}
            title="signin"
            style={styles.buttonCustom}
          />
        </View>
        <TraTe
          onPress={this.props.onPressDontAccount}
          style={styles.dontHaveAccount}
          i18nKey={'dont_have_an_account'}
        />
        <View style={styles.dash}>
          <View style={styles.dash1}></View>
          <TraTe i18nKey={'or'} style={styles.orText} />
          <View style={styles.dash1}></View>
        </View>
        <ButtonFBCustom titleStyle={styles.ButtonText} title={'facebock'} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingHorizontal: wp('4.5'),
  },
  welcomeText: {
    fontFamily: 'roboto-slab-bold',
    color: '#FFFFFF',
    fontSize: wp('5.5'),
    marginTop: hp('5'),
  },
  title: {
    color: '#FFFFFF',
    fontFamily: 'roboto-slab-light',
    fontSize: wp('5'),
  },
  viewContent: {
    backgroundColor: '#FFFFFF',
    marginTop: hp('7'),
    borderRadius: wp('2'),
    paddingHorizontal: wp('5'),
    paddingVertical: hp('3'),
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
    borderWidth: 2,
    borderRadius: wp('2'),
    borderColor: ' rgba(168, 182, 200, 0.196078)',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp('4'),
  },
  icon: {
    marginRight: wp('2'),
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
  textInputStyle: {
    fontFamily: 'roboto-slab.regular',
    width: '95%',
    marginLeft: wp('2'),
    fontSize: wp('3.8'),
  },
  ButtonText: {
    fontSize: wp('4'),
  },
  dontHaveAccount: {
    color: '#fff',
    fontFamily: 'roboto-slab-bold',
    fontSize: wp('4'),
    alignSelf: 'center',
    marginTop: hp('2'),
  },
});
export default index;
