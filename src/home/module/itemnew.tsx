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
              <Text style={styles.texthotel}>
                    {this.props.titlehotel}
              </Text>
              <Text style={styles.textplace}>
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
    backgroundColor: '#F2F2F2',
    borderRadius: 8,
    width: wp('90'),
    height: hp('15'),

  },
  styleImage:{
    borderRadius: 5,
    width: wp('25'),
    height: hp('15'),
  },
  texthotel:{
    color: '#00162b',
    fontStyle: 'normal',
    fontSize: 13,
    fontWeight: "bold",
    lineHeight: 21,
    letterSpacing: 0.8
  },
  textplace:{
    color: '#353b50',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 10,
    lineHeight: 12,
    letterSpacing: 0.5  
},
  styleview:{
    position: 'absolute',
    marginLeft: wp('30'),
    marginTop: 10
  },
});
export default ButtonCustom;