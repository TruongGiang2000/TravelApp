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
          <TouchableOpacity style={[styles.MainContainer, this.props.style ]}
          >
          <View>
              <Image
                style={[styles.styleImage, this.props.styleImage]}
                source={this.props.source}
              />
              <View style={styles.styleview}>
              <Text style={[styles.textTitle, this.props.styleTitle]}>
                    {this.props.titlehotel}
              </Text>
              <Text style={[styles.textContent, this.props.styleContent]}>
                  {this.props.titleplace}
              </Text>
              </View>
          </View>
          </TouchableOpacity>
     )
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    borderRadius: 8,
    width: wp('90'),
    height: hp('15'),

  },
  styleImage:{
    borderRadius: 3,
    width: wp('25'),
    height: hp('15'),
  },
  textTitle:{
    color: '#00162b',
    fontSize: wp('4'),
    fontWeight: "bold",
    letterSpacing: 0.8,
    fontFamily: 'RobotoSlab-Regular',
  },
  textContent:{
    color: '#353b50',
    fontSize: wp('3'),
    letterSpacing: 0.5 ,
    fontFamily: 'RobotoSlab-Regular', 
},
  styleview:{
    position: 'absolute',
    marginLeft: wp('30'),
    marginTop: 10
  },
});
export default ButtonCustom;
