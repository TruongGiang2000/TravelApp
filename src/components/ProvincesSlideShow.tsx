import React, {Component} from 'react';
import {View, StyleSheet, Text, ImageBackground} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Pagination} from 'react-native-snap-carousel';
import shadow from './shadow';
import GradientOpacity from './GradientOpacity';
class ProvincesSlideShow extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {data, dotsLength, activeDotIndex} = this.props;
    return (
      <ImageBackground
        source={data.srcImage}
        resizeMode={'cover'}
        style={styles.MainContainer}>
        <MaterialIcon
          name={'keyboard-backspace'}
          size={wp('8')}
          color={'#ffffff'}
        />
        <GradientOpacity
          start={{x: 0.1, y: 0.1}}
          end={{x: 0.1, y: 0.1}}
          styleGradient={styles.gradientOpacity}
        />
        <Text style={styles.title}>{data.title}</Text>
        <Pagination
          containerStyle={styles.paginationStyle}
          dotsLength={dotsLength}
          activeDotIndex={activeDotIndex}
          dotStyle={styles.dotStyle}
          inactiveDotStyle={styles.inactiveDotStyle}
        />
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    paddingHorizontal: wp('4'),
    paddingTop: hp('3'),
  },
  title: {
    fontFamily: 'roboto-slab-bold',
    fontSize: wp('6.5'),
    color: '#ffffff',
    marginTop: hp('10'),
    marginBottom: wp('-7'),
  },
  paginationStyle: {
    height: hp('7'),
    paddingBottom: wp('2'),
  },
  dotStyle: {
    width: wp('3'),
    height: wp('3'),
    borderRadius: wp('1.5'),
    backgroundColor: 'rgba(255, 255, 255, 0.92)',
    ...shadow(10),
  },
  inactiveDotStyle: {
    width: wp('3'),
    height: wp('3'),
    borderRadius: wp('1.5'),
    backgroundColor: 'rgba(255, 255, 255, 0.92)',
    ...shadow(10),
  },
  gradientOpacity: {
    width: wp('100'),
    height: hp('10'),
    marginTop: hp('15.5'),
    opacity: 0.1,
  },
});
export default ProvincesSlideShow;
