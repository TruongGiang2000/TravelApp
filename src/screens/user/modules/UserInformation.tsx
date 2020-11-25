import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  Switch,
  Pressable,
  Modal,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import CircleImage from '../../../components/CircleImage';
import FieldUser from './FieldUser';
import ImagePicker from 'react-native-image-picker';
import ModalCustom from 'react-native-modal';
import ManageAccountModal from './ManageAccountModal';
import ModalChooseLang from './ModalChooseLang';
import {translate} from '../../../util/translate';
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
    const {style, userInfo, onPressLogout} = this.props;
    const {isEnabled, avatarSource, isShow, isShowManageAccModal} = this.state;
    return (
      <View style={[styles.MainContainer, style]}>
        <Image
          source={require('../../../assets/images/congtamquan.jpg')}
          style={styles.headerImage}
          resizeMode={'cover'}
          blurRadius={7}
        />
        <Text style={styles.personal}>{translate('personal')}</Text>
        <View style={styles.viewAvatarImage}>
          <CircleImage
            source={avatarSource}
            style={styles.circleImage}
            size={wp('27')}
            resizeMode={'cover'}
          />
          <Pressable
            style={styles.viewTouchIconCamera}
            onPress={this.imagePicker}>
            <EntypoIcon
              name={'camera'}
              color={'#FA2A00'}
              size={wp('4')}
              style={styles.iconCamera}
            />
          </Pressable>
        </View>
        <Text style={styles.fullName}>{userInfo?.Name || 'Unknown'}</Text>
        <Pressable
          onPress={this.showManageAccountModal}
          style={styles.touchIconThreeDot}>
          <EntypoIcon
            style={styles.iconThreeDot}
            name={'dots-three-horizontal'}
            size={wp('4')}
            color={'#000'}
          />
        </Pressable>
        <View style={styles.viewRowStraCoin}>
          <Text style={styles.textStracoin}>{`${translate(
            'stra_core',
          )}: 7000`}</Text>
          <Image
            source={require('../../../assets/images/s_coin.png')}
            style={styles.imageCoin}
          />
        </View>
        <View style={styles.viewField}>
          <FieldUser
            style={styles.fieldUser}
            title={translate('address')}
            content={userInfo?.Address}
          />
          <FieldUser
            style={styles.fieldUser}
            title={translate('email')}
            content={userInfo?.Email}
          />
          <FieldUser
            style={styles.fieldUser}
            title={translate('phone')}
            content={userInfo?.Phone}
          />

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
        <ModalCustom isVisible={isShow} onBackdropPress={this.onClose}>
          <ModalChooseLang
            hideModal={() => this.setState({isShow: false})}
            show={isShow}
          />
        </ModalCustom>
        <Modal
          visible={isShowManageAccModal}
          animated={true}
          animationType={'slide'}>
          <ManageAccountModal
            onPressBackSpace={this.hideManageAccountModal}
            onPressLogout={onPressLogout}
            navigation={this.props.navigation}
            forceClose={this.hideManageAccountModal}
          />
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
    marginTop: wp('15'),
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
