import React, {Component} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
class ItemRow extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {style, title, titleStyle, onPress} = this.props;
    return (
      <TouchableOpacity style={[styles.MainContainer, style]} onPress={onPress}>
        <Text style={[styles.title, titleStyle]}>{title}</Text>
        <Entypo
          name={'chevron-right'}
          color={'rgba(0, 0, 0, 0.541176)'}
          size={wp('5')}
        />
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: 'roboto-slab.regular',
    fontSize: wp('3.8'),
    color: '#323B45',
  },
});
export default ItemRow;
