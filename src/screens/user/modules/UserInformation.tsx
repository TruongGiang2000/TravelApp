import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  Switch,
  TouchableOpacity,
  Modal,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import TraTe from '../../../components/TraTe';
import CircleImage from '../../../components/CircleImage';
import FieldUser from './FieldUser';
import ImagePicker from 'react-native-image-picker';
import ModalCustom from 'react-native-modal';
import ManageAccountModal from './ManageAccountModal';
import ModalChooseLang from './ModalChooseLang';
class UserInformation extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      isEnabled: false,
      avatarSource: require('../../../assets/images/Bitmap.png'),
      isShow: false,
      language: this.props.language,
      isShowManageAccModal: false,
    };
  }
  toggleSwitch = () => {
    this.setState({isEnabled: !this.state.isEnabled});
  };
  imagePicker = () => {
    const option = {
      title: 'Select Avatar',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(option, (response) => {
      console.log('Response', response);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error', response.error);
      } else {
        const avatarSource = {uri: response.uri};
        this.setState({avatarSource});
      }
    });
  };
  showModalChooseLanguage = () => {
    this.setState({isShow: true});
  };
  onClose = () => {
    this.setState({isShow: false});
  };

  showManageAccountModal = () => {
    this.setState({isShowManageAccModal: true});
  };
  hideManageAccountModal = () => {
    this.setState({isShowManageAccModal: false});
  };
  render() {
    const {style} = this.props;
    const {isEnabled, avatarSource, isShow, isShowManageAccModal} = this.state;
    return (
      <View style={[styles.MainContainer, style]}>
        <Image
          source={require('../../../assets/images/congtamquan.jpg')}
          style={styles.headerImage}
          resizeMode={'cover'}
          blurRadius={7}
        />
        <TraTe i18nKey={'personal'} style={styles.personal} />
        <View style={styles.viewAvatarImage}>
          <CircleImage
            source={avatarSource}
            style={styles.circleImage}
            size={wp('27')}
            resizeMode={'cover'}
          />
          <TouchableOpacity
            style={styles.viewTouchIconCamera}
            onPress={this.imagePicker}>
            <EntypoIcon
              name={'camera'}
              color={'#FA2A00'}
              size={wp('4')}
              style={styles.iconCamera}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.fullName}>Nguyễn Vũ Trường Giang</Text>
        <TouchableOpacity
          onPress={this.showManageAccountModal}
          style={styles.touchIconThreeDot}>
          <EntypoIcon
            style={styles.iconThreeDot}
            name={'dots-three-horizontal'}
            size={wp('4')}
            color={'#000'}
          />
        </TouchableOpacity>
        <View style={styles.viewRowStraCoin}>
          <TraTe i18nKey={'stra_core'} style={styles.textStracoin}>
            : 7000
          </TraTe>
          <Image
            source={require('../../../assets/images/s_coin.png')}
            style={styles.imageCoin}
          />
        </View>
        <View style={styles.viewField}>
          <FieldUser
            style={styles.fieldUser}
            titleKey={'address'}
            content={
              '201/26 ấp Phú Hiệp, xã Phú Hoà Đông, huyện Củ Chi, TP.HCM'
            }
          />
          <FieldUser
            style={styles.fieldUser}
            titleKey={'email'}
            content={'stella.summers@gmail.com'}
          />
          <FieldUser
            style={styles.fieldUser}
            titleKey={'phone'}
            content={'097.123.1131'}
          />

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
        <ModalCustom isVisible={isShow} onBackdropPress={this.onClose}>
          <ModalChooseLang show={isShow} />
        </ModalCustom>
        <Modal
          visible={isShowManageAccModal}
          animated={true}
          animationType={'slide'}>
          <ManageAccountModal onPressBackSpace={this.hideManageAccountModal} />
        </Modal>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
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
  viewAvatarImage: {
    position: 'absolute',
    alignItems: 'center',
    width: '100%',
  },
  circleImage: {
    marginTop: wp('-10'),
  },
  viewTouchIconCamera: {
    marginTop: hp('-14'),
    marginLeft: wp('22'),
  },
  iconCamera: {
    backgroundColor: '#ffffff',
    borderRadius: wp('4'),
    padding: wp('1.5'),
  },
  fullName: {
    color: '#5C6979',
    fontFamily: 'roboto-slab-bold',
    fontSize: wp('4'),
    textAlign: 'center',
    marginTop: hp('3.5'),
  },
  touchIconThreeDot: {
    position: 'absolute',
    marginTop: hp('22.5'),
  },
  iconThreeDot: {
    padding: wp('2'),
    backgroundColor: '#E0E6EE',
    marginRight: wp('2'),
    marginLeft: '90%',
  },
  viewRowStraCoin: {
    marginTop: hp('1'),
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#5C6979',
    borderRadius: wp('3'),
    paddingLeft: wp('2'),
    paddingVertical: wp('0.3'),
  },
  imageCoin: {
    width: wp('5'),
    height: wp('5'),
  },
  textStracoin: {
    color: '#fff',
    fontFamily: 'roboto-slab.regular',
    fontSize: wp('3.4'),
  },
  viewField: {
    paddingHorizontal: wp('5.5'),
  },
  fieldUser: {
    marginTop: hp('2'),
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
});

export default UserInformation;
