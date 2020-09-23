import React, {Component} from 'react';
import {View, StyleSheet, Text, ImageBackground} from 'react-native';
import ButtonCustom from '../../../components/ButtonCustom';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import ModalCustom from 'react-native-modal';
import SignIn from './SignIn';
import SignUp from './SignUp';

class UserNotLogin extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      showModalLogin: false,
      showModalRegister: false,
    };
  }
  showModalLogin = () => {
    this.setState({showModalLogin: true});
  };
  hideModalLogin = () => {
    this.setState({showModalLogin: false});
  };
  showModalRegister = () => {
    this.setState({showModalRegister: true});
  };
  hideModalRegister = () => {
    this.setState({showModalRegister: false});
  };
  render() {
    const {showModalLogin, showModalRegister} = this.state;
    return (
      <ImageBackground
        source={require('../../../assets/images/background.jpg')}
        resizeMode={'cover'}
        style={styles.MainContainer}>
        <ButtonCustom
          style={styles.buttonCustom}
          title={'signin'}
          onPress={this.showModalLogin}
        />
        <ButtonCustom
          style={[styles.buttonCustom, {marginTop: hp('2')}]}
          title={'signup'}
          onPress={this.showModalRegister}
        />
        <ModalCustom
          isVisible={showModalLogin}
          onBackdropPress={this.hideModalLogin}>
          <SignIn />
        </ModalCustom>
        <ModalCustom
          isVisible={showModalRegister}
          onBackdropPress={this.hideModalRegister}>
          <SignUp />
        </ModalCustom>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonCustom: {
    width: wp('70'),
  },
});
export default UserNotLogin;
