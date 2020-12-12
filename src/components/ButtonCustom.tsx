import { title } from 'process';
import React, {Component} from 'react';
<<<<<<< HEAD
import {View, StyleSheet, Text, TouchableOpacity, Button} from 'react-native';
=======
import {StyleSheet, Pressable, Text} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
>>>>>>> 3f6512e8f222a764bfa73c7da3932c202053dbb8
class ButtonCustom extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
<<<<<<< HEAD
    const {title} = this.props;
     return (
          <TouchableOpacity style={[styles.MainContainer, this.props.style]}>
            <Text style={[styles.title,this.props.titleStyle]} >
              {title}
            </Text>
          </TouchableOpacity>
     )
=======
    const {title, style, titleStyle, onPress} = this.props;
    return (
      <Pressable style={[styles.MainContainer, style]} onPress={onPress}>
        <Text style={[styles.title, titleStyle]}>{title}</Text>
      </Pressable>
    );
>>>>>>> 3f6512e8f222a764bfa73c7da3932c202053dbb8
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
    textAlign: 'center',
    fontFamily: 'roboto-slab.regular',
  },
});
export default ButtonCustom;
