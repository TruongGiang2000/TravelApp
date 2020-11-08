import React, {Component} from 'react';
import {StyleSheet, ScrollView, View, Text} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import InputComponent from './modules/InputComponent';
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
      lastname: '',
      email: '',
      phone: '',
    };
  }
  onPressBookingDetal = () => {
    this.props.navigation.navigate('BookingDetail');
  };
  render() {
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
            />
            <InputComponent
              style={styles.inputComponent}
              label={translate('customersurname')}
              regex={validName}
              txtError={translate('valid_lastName')}
            />
            <Text style={styles.description}>{translate('textname')}</Text>
            <InputComponent
              style={styles.inputComponent}
              label={translate('emailaddress')}
              regex={validEmail}
              txtError={translate('valid_email')}
            />
            <Text style={styles.description}>{translate('textemail')}</Text>
            <InputComponent
              style={styles.inputComponent}
              label={translate('phone')}
              keyboardType={'numeric'}
              regex={validPhone}
              txtError={translate('valid_phone')}
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
            <Text style={styles.price}>đ1.000.000</Text>
            <Text style={styles.descriptionFooter}>
              {translate('includingtaxesandfees')}
            </Text>
          </View>
          <ButtonCustom
            style={styles.buttonStyle}
            title={translate('nextstep')}
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
