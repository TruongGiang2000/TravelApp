import React, {Component} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import PropTypes from 'prop-types';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

class ItemNew extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      
  }
}

  render() {
    const {style, styleImage, styleTitle, styleContent, title, titleContent, source, onPress} = this.props;
     return (
          <TouchableOpacity onPress={onPress}style={[styles.MainContainer, style ]}
          >
          <View>
              <Image
                style={[styles.styleImage, styleImage]}
                source={source}
              />
              <View style={styles.styleview}>
              <Text style={[styles.textTitle, styleTitle]}>
                    {title}
              </Text>
              <Text style={[styles.textContent, styleContent]}>
                  {titleContent}
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
    fontFamily: 'RobotoSlab-Regular',
    height: hp('6'),
  },
  textContent:{
    color: '#353b50',
    fontSize: wp('3'),
    fontFamily: 'RobotoSlab-Regular', 
},
  styleview:{
    position: 'absolute',
    marginLeft: wp('30'),
    marginTop: wp('1')
  },
});
export default ItemNew;
