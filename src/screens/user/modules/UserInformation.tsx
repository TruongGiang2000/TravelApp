import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  Switch,
  TouchableOpacity,
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
import Modal from 'react-native-modal';
import {systemActions} from '../../../redux/system/actions';
import {system} from '../../../redux/';
import {connect} from 'react-redux';
class UserInformation extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      isEnabled: false,
      avatarSource: require('../../../assets/images/Bitmap.png'),
      isShow: false,
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
  setLanguage = (language: any) => {
    this.props.changeLanguages(language);
  };

  render() {
    const {style, language} = this.props;
    const {isEnabled, avatarSource, isShow} = this.state;
    return (
      <View style={[styles.MainContainer, style]}>
        <Image
          source={require('../../../assets/images/congtamquan.jpg')}
          style={styles.headerImage}
          resizeMode={'cover'}
          blurRadius={7}
        />
        <TraTe i18nKey={'personal'} style={styles.personal} />
        <TouchableOpacity style={styles.viewAvatarImage}>
          <CircleImage
            source={avatarSource}
            style={styles.circleImage}
            size={wp('28')}
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
        </TouchableOpacity>
        <Text style={styles.fullName}>Nguyễn Vũ Trường Giang</Text>
        <EntypoIcon
          style={styles.iconThreeDot}
          name={'dots-three-horizontal'}
          size={wp('4')}
          color={'#000'}
        />
        <View style={styles.viewRowStraCoin}>
          <TraTe i18nKey={'stra_core'} style={styles.textStracoin}>: 7000</TraTe>
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
              thumbColor={isEnabled ? '#f4f3f4' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={this.toggleSwitch}
              value={isEnabled}
            />
          </View>
        </View>
        <Modal isVisible={isShow} onBackdropPress={this.onClose}>
          {isShow && (
            <View style={styles.modalStyle}>
              <View style={styles.formChooseLang}>
                <TraTe style={styles.chooseLang} i18nKey={'choose_lang'} />
                <TouchableOpacity
                  style={styles.viewRowModal}
                  onPress={() => this.setLanguage('vi')}>
                  <TraTe style={styles.lang} i18nKey={'vi_lang'} />
                  {language === 'vi' ? (
                    <EntypoIcon
                      style={styles.iconCheck}
                      name={'check'}
                      color={'#008A1F'}
                      size={wp('5')}
                    />
                  ) : (
                    <View style={styles.viewCircle} />
                  )}
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.viewRowModal}
                  onPress={() => this.setLanguage('en')}>
                  <TraTe style={styles.lang} i18nKey={'en_lang'} />
                  {language === 'en' ? (
                    <EntypoIcon
                      style={styles.iconCheck}
                      name={'check'}
                      color={'#008A1F'}
                      size={wp('5')}
                    />
                  ) : (
                    <View style={styles.viewCircle} />
                  )}
                </TouchableOpacity>
              </View>
            </View>
          )}
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
    marginTop: hp('2'),
    fontSize: wp('4'),
  },
  viewAvatarImage: {
    position: 'absolute',
    alignItems: 'center',
    width: '100%',
  },
  circleImage: {
    marginTop: hp('-4.3'),
  },
  viewTouchIconCamera: {
    marginTop: hp('-14'),
    marginLeft: wp('22'),
    zIndex: 999,
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
    marginTop: hp('3'),
  },
  iconThreeDot: {
    position: 'absolute',
    marginTop: hp('22'),
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
    borderRadius: 10,
    paddingHorizontal: wp('1'),
  },
  imageCoin: {
    width: wp('3'),
    height: hp('3'),
  },
  textStracoin: {
    color: '#fff',
    fontFamily: 'roboto-slab.regular',
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
  modalStyle: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: hp('5'),
  },
  formChooseLang: {
    paddingVertical: hp('2'),
    paddingHorizontal: wp('4'),
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  chooseLang: {
    color: '#323B45',
    fontFamily: 'roboto-slab-bold',
    fontSize: wp('4'),
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
  viewRowModal: {
    marginTop: hp('2'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  lang: {
    fontSize: wp('4'),
    fontFamily: 'roboto-slab-bold',
    color: '#323B45',
  },
  iconCheck: {
    padding: wp('0.5'),
    borderWidth: 2,
    borderRadius: 20,
    borderColor: 'rgba(0, 0, 0, 0.301961)',
  },
  viewCircle: {
    padding: wp('3'),
    borderWidth: 2,
    borderRadius: 20,
    borderColor: 'rgba(0, 0, 0, 0.301961)',
  },
});
const mapStateFromProps = state => {
  console.log('state', state);
	return {
		language: state.system.language
	};
};

export default connect(mapStateFromProps, {...system})(UserInformation);
