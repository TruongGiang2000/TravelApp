import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Switch,
  Image,
  Pressable,
  Modal,
} from 'react-native';
import ModalChooseLang from './modules/ModalChooseLang';
import FieldUser from './modules/FieldUser';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import CircleImage from '../../components/CircleImage';
import ModalCustom from 'react-native-modal';
import ModalHelping from './modules/ModalHelping';
import ModalAuth from './modules/ModalAuth';
import {translate} from '../../util/translate';
class UserNotLogin extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false,
      isEnabled: false,
      showModalHelping: false,
      showModaAuth: false,
    };
  }
  showModalChooseLanguage = () => {
    this.setState({isShow: true});
  };
  onClose = () => {
    this.setState({isShow: false});
  };
  toggleSwitch = () => {
    this.setState({isEnabled: !this.state.isEnabled});
  };
  showModalHelping = () => {
    this.setState({showModalHelping: true});
  };
  hideModalHelping = () => {
    this.setState({showModalHelping: false});
  };
  showModalAuth = () => {
    this.setState({showModaAuth: true});
  };
  hideModalAuth = () => {
    this.setState({showModaAuth: false});
    console.log('hideModalAuth');
  };
  render() {
    const {style} = this.props;
    const {isShow, isEnabled, showModalHelping, showModaAuth} = this.state;
    return (
      <View style={[styles.MainContainer, style]}>
        <Image
          source={require('../../assets/images/congtamquan.jpg')}
          style={styles.headerImage}
          resizeMode={'cover'}
          blurRadius={7}
        />
        <Text style={styles.personal}>{translate('personal')}</Text>
        <CircleImage
          source={require('../../assets/images/Bitmap.png')}
          style={styles.circleImage}
          size={wp('27')}
          resizeMode={'cover'}
        />
        <Text onPress={this.showModalAuth} style={styles.signInText}>
          {translate('signin')}
        </Text>
        <View style={styles.viewFieldUser}>
          <FieldUser
            style={styles.fieldUser}
            title={translate('language')}
            content={translate('lang')}
            onPress={this.showModalChooseLanguage}
          />
          <View style={styles.viewRowDarkMode}>
            <Text style={styles.darkMode}>Dark mode</Text>
            <Switch
              trackColor={{false: '#767577', true: '#FA2A00'}}
              thumbColor={'#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={this.toggleSwitch}
              value={isEnabled}
            />
          </View>
        </View>
        <View style={styles.viewHelping}>
          <Pressable onPress={this.showModalHelping}>
            <Text style={styles.textNeedHelp}>{translate('helping')}</Text>
          </Pressable>
        </View>
        <ModalCustom isVisible={isShow} onBackdropPress={this.onClose}>
          <ModalChooseLang
            hideModal={() => this.setState({isShow: false})}
            show={isShow}
          />
        </ModalCustom>
        <Modal
          visible={showModalHelping}
          animated={true}
          animationType={'slide'}>
          <ModalHelping onPressBackSpace={this.hideModalHelping} />
        </Modal>
        <Modal visible={showModaAuth} animated={true} animationType={'slide'}>
          <ModalAuth onPress={this.hideModalAuth} />
        </Modal>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    height: hp('90'),
    backgroundColor: '#ffffff',
  },
  headerImage: {
    width: '100%',
    height: hp('20'),
  },
  personal: {
    color: 'white',
    fontFamily: 'roboto-slab-bold',
    position: 'absolute',
    alignSelf: 'center',
    marginTop: hp('3'),
    fontSize: wp('4'),
  },
  circleImage: {
    marginTop: wp('15'),
    position: 'absolute',
    alignSelf: 'center',
  },
  signInText: {
    marginTop: hp('4'),
    fontFamily: 'roboto-slab-bold',
    color: '#FA2A00',
    fontSize: wp('4'),
    alignSelf: 'center',
  },
  fieldUser: {
    marginTop: hp('2'),
  },
  viewFieldUser: {
    paddingHorizontal: wp('5.5'),
  },
  viewRowDarkMode: {
    flexDirection: 'row',
    marginVertical: hp('2'),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  darkMode: {
    color: '#5C6979',
    fontFamily: 'roboto-slab-bold',
    fontSize: wp('3.8'),
  },
  textNeedHelp: {
    fontFamily: 'roboto-slab.regular',
    color: '#FA2A00',
    fontSize: wp('3.8'),
    alignSelf: 'center',
    marginTop: hp('3'),
    textDecorationLine: 'underline',
  },
  viewHelping: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: hp('4'),
  },
});
export default UserNotLogin;
