import React, {Component} from 'react';
import {StyleSheet, ScrollView, View, Text, CheckBox} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import TraTe from '../components/TraTe';
import Icon from 'react-native-vector-icons/MaterialIcons';
import InputComponent from './modules/InputComponent';
import ButtonCustom from '../components/ButtonCustom';
import {validName, validEmail, validPhone} from '../constants/systems/validate';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Stepindicator from 'react-native-step-indicator';
import {getStepIndicatorIconConfig, customStyles} from '../constants/systems/step';
import Header from '../components/HeaderStep';
import HeaderStep from '../components/HeaderStep';

const renderStepIndicator = (params: any) => (
  <Icon {...getStepIndicatorIconConfig(params)} />
);
class ProfileCustomer extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      lastname: '',
      email: '',
      phone: '',
      CurrentPosition: '',
    };
  }
  onPressBookingDetal = () => {
    this.props.navigation.navigate('BookingDetail');
    setCurrentPosition:{currentPosition: +1}
  };
  render() {
    const {name} = this.state;
    return (
      <View style={[styles.MainContainer, this.props.style]}>
        <ScrollView>
          <View style={[styles.header]}>
            <Icon name="keyboard-backspace" size={wp('7')} color="#000" />
            <TraTe style={[styles.title]} i18nKey="yourinformation" />
            <View style={[styles.styleStep]}>
            <Header
            />
      </View>
          </View>
          <View style={{backgroundColor: '#000', height: hp('0.1')}} />
          <View style={styles.content}>
            <TraTe style={[styles.titles]} i18nKey={'customer_infomation'} />
            <InputComponent
              style={styles.inputComponent}
              labelKey={'customername'}
              regex={validName}
              keyTxtError={'valid_firstName'}
            />
            <InputComponent
              style={styles.inputComponent}
              labelKey={'customersurname'}
              regex={validName}
              keyTxtError={'valid_lastName'}
            />
            <TraTe style={[styles.description]} i18nKey={'textname'} />
            <InputComponent
              style={styles.inputComponent}
              labelKey={'emailaddress'}
              regex={validEmail}
              keyTxtError={'valid_email'}
            />
            <TraTe style={[styles.description]} i18nKey={'textemail'} />
            <InputComponent
              style={styles.inputComponent}
              labelKey={'phone'}
              keyboardType={'numeric'}
              regex={validPhone}
              keyTxtError={'valid_phone'}
            />
            <View style={styles.viewCheckBox}>
              <CheckBox 
              
              />
              <TraTe
                style={[styles.titlecheckbox]}
                i18nKey="saveyourinfoforlater"
              />
            </View>
          </View>
        </ScrollView>
        <View style={styles.footer}>
          <View>
            <Text style={styles.price}>đ1.000.000</Text>
            <TraTe
              style={[styles.descriptionFooter]}
              i18nKey="includingtaxesandfees"
            />
          </View>
          <ButtonCustom
            style={styles.buttonStyle}
            title="nextstep"
            titleStyle={styles.buttonText}
            onPress={this.onPressBookingDetal}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    backgroundColor: '#DFDFDF',
  },
  description: {
    color: '#F0C909',
    fontSize: wp('3'),
    fontFamily: 'roboto-slab.regular',
    marginTop: hp('1'),
  },
  title: {
    fontFamily: 'roboto-slab-bold',
    color: '#00162b',
    fontSize: wp('4'),
  },
  titles: {
    fontSize: wp('3.8'),
    fontFamily: 'roboto-slab-bold',
    color: '#323b45',
    top: wp('2'),
  },
  header: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: hp('2'),
    paddingHorizontal: wp('4'),
    backgroundColor: '#ffffff',
  },
  content: {
    paddingHorizontal: wp('4'),
    paddingVertical: hp('2'),
    backgroundColor: '#ffffff',
  },
  footer: {
    flexDirection: 'row',
    paddingHorizontal: wp('4'),
    paddingVertical: hp('2'),
    alignItems: 'center',
    backgroundColor: '#ffffff',
    justifyContent: 'space-between',
  },
  titlecheckbox: {
    fontFamily: 'roboto-slab-bold',
    fontSize: wp('4'),
  },
  descriptionFooter: {
    color: '#585858',
    fontSize: wp('3.7'),
    fontFamily: 'roboto-slab-bold',
  },
  inputComponent: {
    marginTop: hp('1'),
  },
  viewCheckBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp('2'),
  },
  buttonText: {
    fontSize: wp('4'),
  },
  price: {
    fontSize: wp('3.7'),
    fontFamily: 'roboto-slab-bold',
  },
  buttonStyle: {
    paddingHorizontal: wp('10'),
    paddingVertical: hp('2'),
  },
  styleStep:{
  width: wp('30')
  },
});
export default ProfileCustomer;
