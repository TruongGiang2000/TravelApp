import React, {Component} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import PropTypes from 'prop-types';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

class ItemImage extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      isShow: this.props.isShow,
      
  }
}
  render() {
     return (
          <TouchableOpacity style={[styles.MainContainer, this.props.style]}>
             {( this.state.isShow && <Image 
                style={[styles.styleImageAfter, this.props.styleImage]}
                source={this.props.source}
              />)}
              <Image 
                style={[styles.styleImage, this.props.styleImage]}
                source={this.props.source}
              />
              <Text style={[styles.text, this.props.style] }>
                    {this.props.title}
              </Text>
          </TouchableOpacity>
     )
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    borderRadius: 8,
    width: wp('35'),
    height: hp('38'),

  },
  styleImage:{
    borderRadius: 10,
    width: wp('35'),
    height: hp('30'),
  },
  text:{
    color: '#FFFFFF',
    fontSize: wp('4'),
    marginHorizontal: wp('3'),
    marginVertical: hp('25'),
    fontWeight: "bold",
    position:'absolute',
    fontFamily: 'RobotoSlab-Regular',
  },
  styleImageAfter:{
    position: 'absolute',
    borderRadius: 8,
    width: wp('30'),
    height: hp('31'),
    marginHorizontal: 10
  },
});
export default ItemImage;
