import React, {Component} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import PropTypes from 'prop-types';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

class ButtonCustom extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      
  }
}

  render() {
     return (
          <TouchableOpacity style={[styles.MainContainer, this.props.style]}>
          <View>
              <Image
                style={styles.styleImage}
                source={this.props.source}
              />
              <View style={styles.styleview}>

              </View>
              <View style={styles.styleview1}>
              <Image source={require('../images/ngoisao.png')}
              style={styles.styleitem}/>
              </View>
              
              <Text style={styles.texthotel}>
                    {this.props.titlehotel}
              </Text>
              <Text style={styles.textplace}>
                  {this.props.titleplace}
              </Text>
          </View>
          </TouchableOpacity>
     )
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    backgroundColor: '#F2F2F2',
    borderRadius: 8,
    width: wp('35'),
    height: hp('38'),

  },
  styleImage:{
    borderRadius: 5,
    width: wp('35'),
    height: hp('30'),
  },
  texthotel:{
    color: '#353b50',
    fontStyle: 'normal',
    fontSize: 12,
    fontWeight: "bold",
    lineHeight: 19,
    opacity: 0.6,
  },
  textplace:{
    color: '#353b50',
    fontStyle: 'normal',
    fontSize: 12,
    lineHeight: 19,
    opacity: 0.6,
  },
  styleview:{
    width: wp('12'),
    height: hp('10'),
    backgroundColor: '#292929',
    opacity: 0.74,
    borderRadius: 5,
    position: 'absolute',
    marginTop: 120,
    marginLeft: 10
  },
  styleview1:{
    width: wp('12'),
    height: hp('10'),
    borderRadius: 5,
    position: 'absolute',
    marginTop: 120,
    marginLeft: 10
  },
  styleitem:{
    position: 'absolute',
    width: wp('5'),
    height: hp('3'),
    borderRadius: 1,
    marginTop: hp('5'),
    marginLeft: wp('3')
    
  },
});
export default ButtonCustom;
