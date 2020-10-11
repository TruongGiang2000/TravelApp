import React, {Component} from 'react';
import {StyleSheet, Pressable, Text} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
class ButtonCustom extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {title, style, titleStyle, onPress} = this.props;
    return (
      <Pressable style={[styles.MainContainer, style]} onPress={onPress}>
        <Text style={[styles.title, titleStyle]}>{title}</Text>
      </Pressable>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    backgroundColor: '#FA2A00',
    borderRadius: wp('2'),
    paddingHorizontal: wp('4'),
    paddingVertical: wp('3'),
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
export default ButtonCustom;
