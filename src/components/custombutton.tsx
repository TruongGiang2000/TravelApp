import React, {Component} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Button} from 'react-native';
import PropTypes from 'prop-types';
import TraTe from './TraTe';
import { widthPercentageToDP as wp} from 'react-native-responsive-screen';
class ButtonCustom extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {onPress, title, titleStyle, style} = this.props;
    return (
      <TouchableOpacity style={[styles.MainContainer, style]} onPress={onPress}>
        <TraTe style={[styles.title, titleStyle]} i18nKey={title} />
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    backgroundColor: '#FA2A00',
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
export default ButtonCustom;
