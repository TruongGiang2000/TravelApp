import React, {Component} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
class index extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {style, source, title, imageStyle, titleStyle} = this.props;
    return (
      <View style={[styles.MainContainer, style]}>
        <Image resizeMode={'cover'} style={[styles.imageStyle, imageStyle]} source={source} />
        <Text style={[styles.title, titleStyle]}>{title}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    paddingHorizontal: wp('2'),
    paddingVertical: hp('1'),
    backgroundColor: '#FFEFEC',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  title: {
    fontFamily: 'roboto-slab.regular',
    fontSize: wp('3.2'),
    marginTop: hp('1'),
    color: '#323B45',
  },
  imageStyle: {
    width: wp('16'),
    height: hp('8'),
  }
});
export default index;
