import React, {Component} from 'react';
import {View, StyleSheet, Text, TextInput, ToastAndroid} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ButtonCustom from '../../../components/ButtonCustom';
import {translate} from '../../../util/translate';
import {auth} from '../../../redux';
import {connect} from 'react-redux';
import {actionMain} from '../../../util/mainActions';
class SignUp extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      valueSignUp: {},
      Email: '',
      Password: '',
      RePassword: '',
    };
  }
  onChangeEmail = (value) => {
    this.setState({Email: value});
  };
  onChangePassword = (value) => {
    this.setState({Password: value});
  };
  onChangeRePassword = (value) => {
    this.setState({RePassword: value});
  };
  onPressButton = () => {
    const {Password, RePassword, Email} = this.state;
    if (Password != RePassword) {
      return ToastAndroid.show(translate('pass_not_match'), ToastAndroid.SHORT);
    }
    const data = {
      Email: Email,
      Password: Password,
    };
    actionMain.loading(true);
    this.props.signUp(data);
  };
  render() {
    return (
      <View style={styles.MainContainer}>
        <View style={styles.viewContent}>
          <Text style={styles.signupText}>{translate('signup')}</Text>
          <View style={styles.textInput}>
            <MaterialCommunityIcons
              name={'email'}
              size={wp('5')}
              color={'#A8B6C8'}
            />
            <TextInput
              placeholderTextColor={'#A8B6C8'}
              style={styles.inputText}
              placeholder={translate('email')}
              onChangeText={this.onChangeEmail}
            />
          </View>
          <View style={styles.textInput}>
            <FontAwesome name={'lock'} size={wp('5')} color={'#A8B6C8'} />
            <TextInput
              style={styles.inputText}
              placeholderTextColor={'#A8B6C8'}
              placeholder={translate('password')}
              secureTextEntry={true}
              onChangeText={this.onChangePassword}
            />
          </View>
          <View style={styles.textInput}>
            <FontAwesome name={'lock'} size={20} style={styles.icon} />
            <TextInput
              style={styles.inputText}
              placeholderTextColor={'#A8B6C8'}
              placeholder={translate('re_password')}
              secureTextEntry={true}
              onChangeText={this.onChangeRePassword}
            />
          </View>

          <ButtonCustom
            title={translate('createaccount')}
            style={styles.buttonCustom}
            onPress={this.onPressButton}
          />
        </View>
        <View style={styles.dash}>
          <View style={styles.dash1}></View>
          <Text style={styles.orText}>{translate('or')}</Text>
          <View style={styles.dash1}></View>
        </View>
        <Text
          style={styles.haveAccount}
          onPress={this.props.onPressHaveAccount}>
          {translate('have_an_account')}
        </Text>
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
  icon: {},
});
export default connect(null, auth)(SignUp);
