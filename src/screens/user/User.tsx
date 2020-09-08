import React, {Component} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import UserInformation from './modules/UserInformation';
import UserAchievement from './modules/UserAchievement';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
class User extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <ScrollView style={styles.MainContainer}>
        <UserInformation navigation={this.props.navigation} />
        <UserAchievement style={styles.userAward} />
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: '#E0E6EE',
  },
  userAward: {
    marginTop: hp('2'),
  },
});
export default User;
