import React, {Component} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import PropTypes from 'prop-types';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Gradient from '../../components/GradientOpacity';

class ItemImage extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      isShow: this.props.isShow,
      
  }
}
  render() {
    const {style, styleImage, source, styletitle, title}= this.props;
     return (
          <TouchableOpacity style={[styles.MainContainer, style]}>
            
             {( this.state.isShow && <Image 
                style={[styles.styleImageAfter, styleImage]}
                source={source}
              />)}
              
              <Image 
                style={[styles.styleImage, styleImage]}
                source={source}
              />
               <Gradient 
               styleGradient = {styles.stylegradient}
              />
              <Text style={[styles.text, styletitle] }>
                    {title}
              </Text>
          </TouchableOpacity>
     )
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    width: wp('35'),
    height: hp('32'),
  },
  styleImage:{
    borderRadius: 10,
    width: '100%',
    height: hp('30'),
  },
  stylegradient:{
    borderRadius: 10,
    width: '100%',
    height: hp('30'),
  },
  text:{
    color: '#FFFFFF',
    fontSize: wp('4'),
    marginHorizontal: wp('3'),
    marginVertical: hp('25'),
    position:'absolute',
    fontFamily: 'RobotoSlab-Regular',
  },
  styleImageAfter:{
    position: 'absolute',
    borderRadius: 8,
    width: wp('30'),
    height: hp('30'),
    margin: wp('2')
  },
});
export default ItemImage;
