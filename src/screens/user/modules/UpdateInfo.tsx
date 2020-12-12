import React, {useState} from 'react';
import {View, StyleSheet, Text, Pressable, ToastAndroid} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import InputComponent from '../../../components/InputComponent';
import {translate} from '../../../util/translate';
import {
  validName,
  validNotEmpty,
  validPhone,
} from '../../../constants/systems/validate';
import ButtonCustom from '../../../components/ButtonCustom';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {connect} from 'react-redux';
import {auth} from '../../../redux';
import {actionMain} from '../../../util/mainActions';
const UpdateInfo = (props: any) => {
  const {userInfo, token} = props;
  const [userValue, setUserValue] = useState({...userInfo});
  const onPressBackSpace = () => {
    props.navigation.goBack();
  };
  const onChangeName = (value) => {
    setUserValue({...userValue, Name: value});
  };
  const onChangeAddress = (value) => {
    setUserValue({...userValue, Address: value});
  };
  const onChangePhone = (value) => {
    setUserValue({...userValue, Phone: value});
  };
  const onPress = () => {
    const data = {...userValue, token: token};
    actionMain.loading(true);
    props.updateProfile(data);
    props.navigation.popToTop();
    ToastAndroid.show(translate('updateSuccess'), ToastAndroid.SHORT);
  };
  return (
    <View style={styles.MainContainer}>
      <View style={styles.header}>
        <Pressable onPress={onPressBackSpace}>
          <MaterialIcon
            name={'keyboard-backspace'}
            size={wp('7')}
            color={'#000'}
          />
        </Pressable>
        <Text style={styles.title}>{translate('update_info')}</Text>
        <Text></Text>
      </View>
      <InputComponent
        style={styles.inputComponent}
        label={translate('full_name')}
        regex={validName}
        txtError={translate('valid_firstName')}
        onChangeText={onChangeName}
        defaultValue={userValue?.Name}
      />
      <InputComponent
        style={styles.inputComponent}
        label={translate('address')}
        regex={validNotEmpty}
        onChangeText={onChangeAddress}
        defaultValue={userValue?.Address}
      />
      <InputComponent
        style={styles.inputComponent}
        label={translate('phone')}
        regex={validPhone}
        txtError={translate('valid_phone')}
        onChangeText={onChangePhone}
        defaultValue={userValue?.Phone + ''}
      />
      <ButtonCustom
        style={styles.btnStyle}
        title={translate('update')}
        onPress={onPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingHorizontal: wp('4'),
    paddingVertical: hp('3'),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: 'roboto-slab-bold',
    fontSize: wp('4.2'),
    textAlign: 'center',
  },
  inputComponent: {
    marginTop: hp('2'),
  },
  btnStyle: {
    marginTop: hp('4'),
  },
});
const mapStateFromProps = (state: any) => {
  return {
    token: state.auth.token,
    userInfo: state.auth.userInfo,
    message: state.auth.message,
  };
};
export default connect(mapStateFromProps, auth)(UpdateInfo);
