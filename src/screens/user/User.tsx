import React, {Component} from 'react';
import {StyleSheet, ScrollView, ToastAndroid} from 'react-native';
import UserInformation from './modules/UserInformation';
import UserAchievement from './modules/UserAchievement';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import UserNotLogin from './UserNotLogin';
import {withPages} from '../../util/withPages';
import {connect} from 'react-redux';
import {translate} from '../../util/translate';
import {auth} from '../../redux';
const User = (props) => {
  const {token, message, navigation, userInfo} = props;
  React.useEffect(() => {
    if (token) {
      props.getProfile({token: token});
    }
    if (message) {
      ToastAndroid.show(translate(message), ToastAndroid.SHORT);
    }
  }, [token, message]);
  const logout = () => {
    props.logout();
  };
  return (
    <ScrollView style={styles.MainContainer}>
      {token ? (
        <>
          <UserInformation
            navigation={navigation}
            userInfo={userInfo}
            onPressLogout={logout}
          />
          <UserAchievement style={styles.userAward} userInfo={userInfo} />
        </>
      ) : (
        <UserNotLogin />
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: '#E0E6EE',
  },
  userAward: {
    marginTop: hp('2'),
  },
});
const mapStateFromProps = (state: any) => {
  return {
    token: state.auth.token,
    message: state.auth.message,
    userInfo: state.auth.userInfo,
  };
};
export default connect(mapStateFromProps, auth)(withPages(User));
