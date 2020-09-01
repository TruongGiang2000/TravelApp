import React, {Component} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import PropTypes from 'prop-types';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Gradient from '../../../components/GradientOpacity';
import CustomCirle from '../../../components/CustomCircle';
class ItemImage extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {style, stylecore, source, stylename, core, name} = this.props;
    return (
      <TouchableOpacity style={[styles.MainContainer, style]}>
        <CustomCirle source={source} size={50} style={{    alignItems: 'flex-end',justifyContent: 'center'}} />
        <Text style={[styles.name, stylename]}>{name}</Text>

        <Text style={[styles.core, stylecore]}>{core}</Text>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    width: '50%',
    height: '10%',
    //backgroundColor: "#ff0f"
  },
  name: {
    fontSize: wp('4'),
    fontFamily: 'RobotoSlab-Regular',
    marginLeft: wp('2'),
    //top: hp('1'),
  },
  core: {
    fontSize: wp('4'),
    fontFamily: 'RobotoSlab-Regular',
    marginLeft: wp('2'),
    //top: hp('1'),
    backgroundColor: '#0003',
    borderRadius: wp('2'),
    width: '70%',
  },
});
export default ItemImage;
