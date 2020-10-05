import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import {translate} from './translate';
class ButtonFBCustom extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {onPress, title, titleStyle, style} = this.props;
    return (
      <TouchableOpacity style={[style]} onPress={onPress}>
        <LinearGradient
          colors={['#4c669f', '#3b5998', '#192f6a']}
          style={styles.linearGradient}>
          <Text style={[styles.title, titleStyle]}>{title}</Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  linearGradient: {
    borderRadius: wp('2'),
    paddingVertical: wp('3'),
  },
  title: {
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'roboto-slab-bold',
    fontSize: wp('3.8'),
  },
});
export default ButtonFBCustom;
