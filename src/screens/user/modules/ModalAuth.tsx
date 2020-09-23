import React, {Component} from 'react';
import {StyleSheet, ImageBackground, TouchableOpacity} from 'react-native';
import SignIn from './SignIn';
import SignUp from './SignUp';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
class index extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      whichAuth: 0,
    };
  }
  onPressDontAccount = () => {
    this.setState({whichAuth: 1});
  };
  onPressHaveAccount = () => {
    this.setState({whichAuth: 0});
  };
  render() {
    const isAuth = this.state.whichAuth === 0;
    return (
      <ImageBackground
        style={styles.MainContainer}
        resizeMode={'cover'}
        source={require('../../../assets/images/background.jpg')}>
        <TouchableOpacity
          onPress={this.props.onPress}
          style={styles.viewBehind}
        />
        {isAuth && <SignIn onPressDontAccount={this.onPressDontAccount} />}
        {!isAuth && <SignUp onPressHaveAccount={this.onPressHaveAccount} />}
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
  },
  viewBehind: {
    position: 'absolute',
    backgroundColor: '#000',
    height: hp('100'),
    width: wp('100'),
    opacity: 0.7,
  },
});
export default index;
