import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Switch,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native';
import ModalChooseLang from './ModalChooseLang';
import FieldUser from './FieldUser';
import TraTe from '../../../components/TraTe';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import CircleImage from '../../../components/CircleImage';
import ModalCustom from 'react-native-modal';
import ModalHelping from './ModalHelping';
class UserNotLogin extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false,
      isEnabled: false,
      showModalHelping: false,
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
  render() {
    const {style} = this.props;
    const {isShow, isEnabled, showModalHelping} = this.state;
    return (
      <View style={[styles.MainContainer, style]}>
        <Image
          source={require('../../../assets/images/congtamquan.jpg')}
          style={styles.headerImage}
          resizeMode={'cover'}
          blurRadius={7}
        />
        <TraTe i18nKey={'personal'} style={styles.personal} />
        <CircleImage
          source={require('../../../assets/images/Bitmap.png')}
          style={styles.circleImage}
          size={wp('27')}
          resizeMode={'cover'}
        />
        <TraTe style={styles.siggUpText} i18nKey={'manage_account'} />
        <View style={styles.viewFieldUser}>
          <FieldUser
            style={styles.fieldUser}
            titleKey={'language'}
            contentKey={'lang'}
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
          <TouchableOpacity onPress={this.showModalHelping}>
            <TraTe style={styles.textNeedHelp} i18nKey={'helping'} />
          </TouchableOpacity>
        </View>
        <ModalCustom isVisible={isShow} onBackdropPress={this.onClose}>
          <ModalChooseLang show={isShow} />
        </ModalCustom>
        <Modal
          visible={showModalHelping}
          animated={true}
          animationType={'slide'}>
          <ModalHelping onPressBackSpace={this.hideModalHelping} />
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
    marginTop: wp('-10'),
    position: 'absolute',
    alignSelf: 'center',
  },
  siggUpText: {
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
