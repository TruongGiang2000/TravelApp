import React, {Component} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import PropTypes from 'prop-types';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

class ItemHotel extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      
  }
}

  render() {
    const {style, onPress, imageStyle, titleStyle, contentStyle, source, titleplace,titlehotel} = this.props;
     return (
          <TouchableOpacity style={[styles.MainContainer, style]} onPress={onPress} >
          <View>
              <Image
                style={[styles.styleImage, imageStyle]}
                source={source}
              />
              <View style={styles.styleBackground}>

              </View>
              <View style={styles.styleBackground1}>
              <Image source={require('../../assets/images/ngoisao.png')}
              style={styles.styleitem}/>
              </View>
              
              <Text style={[styles.texthotel, titleStyle]}>
                    {titlehotel}
              </Text>
              <Text style={[styles.textplace, contentStyle]}>
                  {titleplace}
              </Text>
          </View>
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
    borderRadius: 5,
    width: '100%',
    height: hp('30'),
  },
  texthotel:{
    color: '#353b50',
    fontSize: wp('3'),
    fontFamily: 'RobotoSlab-Regular',
    opacity: 0.6,
  },
  textplace:{
    color: '#353b50',
    fontSize: wp('3'),
    fontFamily: 'RobotoSlab-Regular',
    opacity: 0.6,
  },
  styleBackground:{
    width: wp('12'),
    height: hp('10'),
    backgroundColor: '#292929',
    opacity: 0.74,
    borderRadius: 5,
    position: 'absolute',
    marginTop: hp('17'),
    marginLeft: wp('3')
  },
  styleBackground1:{
    width: wp('12'),
    height: hp('10'),
    borderRadius: 5,
    position: 'absolute',
    marginTop: hp('17'),
    marginLeft: wp('3')

  },
  styleitem:{
    position: 'absolute',
    width: wp('5'),
    height: hp('3'),
    borderRadius: 1,
    marginTop: hp('5'),
    marginLeft: wp('3'),
  },
});
export default ItemHotel;
