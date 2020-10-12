import React, {Component} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import UserInformation from './modules/UserInformation';
import UserAchievement from './modules/UserAchievement';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import UserNotLogin from './modules/UserNotLogin';
import {withPages} from '../../components/withPages';
class User extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <ScrollView style={styles.MainContainer}>
        <UserInformation />
        <UserAchievement style={styles.userAward} />
        {/* <UserNotLogin/> */}
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
export default withPages(User);
