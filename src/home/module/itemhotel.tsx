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
    const {style, onPress, imageStyle, titleStyle, contentStyle} = this.props;
     return (
          <TouchableOpacity style={[styles.MainContainer, style]} onPress={onPress} >
          <View>
<<<<<<< HEAD
              <Image 
                style={[styles.styleImage, this.props.styleImage]}
=======
              <Image
                style={[styles.styleImage, imageStyle]}
>>>>>>> 6cb9045d421b9356d67eed8d5fbee18b3815d1ff
                source={this.props.source}
              />
              <View style={styles.styleBackground}>

              </View>
              <View style={styles.styleBackground1}>
              <Image source={require('../../assets/images/ngoisao.png')}
              style={styles.styleitem}/>
              </View>
              
<<<<<<< HEAD
              <Text style={[styles.texthotel, this.props.styleHotel] }>
                    {this.props.titlehotel}
              </Text>
              <Text style={[styles.textplace, this.props.styleHotel]}>
=======
              <Text style={[styles.texthotel, titleStyle]}>
                    {this.props.titlehotel}
              </Text>
              <Text style={[styles.textplace, contentStyle]}>
>>>>>>> 6cb9045d421b9356d67eed8d5fbee18b3815d1ff
                  {this.props.titleplace}
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
    fontWeight: "bold",
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
<<<<<<< HEAD
    marginTop: hp('18'),
=======
    marginTop: hp('17'),
>>>>>>> 6cb9045d421b9356d67eed8d5fbee18b3815d1ff
    marginLeft: 10
  },
  styleBackground1:{
    width: wp('12'),
    height: hp('10'),
    borderRadius: 5,
    position: 'absolute',
<<<<<<< HEAD
    marginTop: hp('18'),
    marginLeft: 10
=======
    marginTop: hp('16'),
    marginLeft: 10,
>>>>>>> 6cb9045d421b9356d67eed8d5fbee18b3815d1ff
  },
  styleitem:{
    position: 'absolute',
    width: wp('5'),
    height: hp('3'),
    borderRadius: 1,
    marginTop: hp('6'),
    marginLeft: wp('3')
    
  },
});
export default ItemHotel;
