import React, {Component} from 'react';
import {StyleSheet, ScrollView, View, Text, ToastAndroid} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import InputComponent from '../../components/InputComponent';
import ButtonCustom from '../../components/ButtonCustom';
import {
  validName,
  validEmail,
  validPhone,
} from '../../constants/systems/validate';
import Header from './modules/HeaderStep';
import {translate} from '../../util/translate';
import {withPages} from '../../util/withPages';
import CheckBox from '@react-native-community/checkbox';
class ProfileCustomer extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      lastName: '',
      email: '',
      phone: '',
      idCard: '',
      validName: false,
      validLastName: false,
      validEmail: false,
      validPhone: false,
      validIdCard: false,
      dataRoom: this.props.route.params.item,
    };
  }
  onPressBookingDetail = () => {
    const {
      validName,
      validLastName,
      validEmail,
      validPhone,
      validIdCard,
      name,
      lastName,
      email,
      phone,
      idCard,
      dataRoom,
    } = this.state;
    const {startDate, endDate} = this.props.route?.params;
    const valid = {
      validName: validName,
      validLastName: validLastName,
      validEmail: validEmail,
      validPhone: validPhone,
      validIdCard: validIdCard,
    };
    if (Object.values(valid).some((it) => !it)) {
      return ToastAndroid.show(translate('valid_info'), ToastAndroid.SHORT);
    }
    const dataBooking = {
      dataRoom: dataRoom,
      startDate: startDate,
      endDate: endDate,
      name: name,
      lastName: lastName,
      email: email,
      phone: phone,
      idCard: idCard,
    };
    this.props.navigation.navigate('BookingDetail', {dataBooking});
  };
  onChangeName = (value, valid) => {
    this.setState({name: value, validName: valid});
  };
  onChangeLastName = (value, valid) => {
    this.setState({lastName: value, validLastName: valid});
  };
  onChangeEmail = (value, valid) => {
    this.setState({email: value, validEmail: valid});
  };
  onChangePhone = (value, valid) => {
    this.setState({phone: value, validPhone: valid});
  };
  onChangeCMND = (value, valid) => {
    this.setState({idCard: value, validIdCard: valid});
  };
  render() {
    const {dataRoom} = this.state;
    let priceTax = dataRoom?.Price + dataRoom?.Price * 10;
    return (
      <View style={[styles.MainContainer, this.props.style]}>
        <ScrollView>
          <Header
            currentPosition={1}
            title={translate('yourinformation')}
            navigation={this.props.navigation}
          />
          <View style={{backgroundColor: '#000', height: hp('0.1')}} />
          <View style={styles.content}>
            <Text style={styles.titles}>
              {translate('customer_infomation')}
            </Text>
            <InputComponent
              style={styles.inputComponent}
              label={translate('customername')}
              regex={validName}
              txtError={translate('valid_firstName')}
              onChangeText={this.onChangeName}
            />
            <InputComponent
              style={styles.inputComponent}
              label={translate('customersurname')}
              regex={validName}
              txtError={translate('valid_lastName')}
              onChangeText={this.onChangeLastName}
            />
            <InputComponent
              style={styles.inputComponent}
              label={translate('id_card')}
              keyboardType={'numeric'}
              regex={validPhone}
              txtError={translate('valid_id')}
              onChangeText={this.onChangeCMND}
            />
            <Text style={styles.description}>{translate('textname')}</Text>
            <InputComponent
              style={styles.inputComponent}
              label={translate('emailaddress')}
              regex={validEmail}
              txtError={translate('valid_email')}
              onChangeText={this.onChangeEmail}
            />
            <Text style={styles.description}>{translate('textemail')}</Text>
            <InputComponent
              style={styles.inputComponent}
              label={translate('phone')}
              keyboardType={'numeric'}
              regex={validPhone}
              txtError={translate('valid_phone')}
              onChangeText={this.onChangePhone}
            />
            <View style={styles.viewCheckBox}>
              <CheckBox />
              <Text style={styles.titlecheckbox}>
                {translate('saveyourinfoforlater')}
              </Text>
            </View>
          </View>
        </ScrollView>
        <View style={styles.footer}>
          <View>
            <Text style={styles.price}>{`đ${priceTax}`}</Text>
            <Text style={styles.descriptionFooter}>
              {translate('includingtaxesandfees')}
            </Text>
          </View>
          <ButtonCustom
            style={styles.buttonStyle}
            title={translate('nextstep')}
            titleStyle={styles.buttonText}
            onPress={this.onPressBookingDetail}
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
  titles: {
    fontSize: wp('3.8'),
    fontFamily: 'roboto-slab-bold',
    color: '#323b45',
    top: wp('2'),
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
});
export default withPages(ProfileCustomer);
