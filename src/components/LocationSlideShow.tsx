import React, {Component} from 'react';
import {View, StyleSheet, Text, ImageBackground, Pressable} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Pagination} from 'react-native-snap-carousel';
import shadow from '../util/shadow';
import GradientOpacity from './GradientOpacity';
class ProvincesSlideShow extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {data, dotsLength, activeDotIndex, title, isPagination} = this.props;
    return (
      <ImageBackground
        source={{uri: data}}
        resizeMode={'cover'}
        style={styles.MainContainer}>
        <Pressable onPress={this.props.onPressBackSpace}>
          <MaterialIcon
            name={'keyboard-backspace'}
            size={wp('8')}
            color={'#ffffff'}
            style={{...shadow(100), height: hp('5'), width: wp('20')}}
          />
        </Pressable>
        <GradientOpacity
          start={{x: 0.1, y: 0.1}}
          end={{x: 0.1, y: 0.1}}
          styleGradient={
            isPagination
              ? styles.gradientOpacity
              : styles.gradientOpacityNotPanigation
          }
          color={['#000', '#000', '#000', '#000']}
        />
        <Text
          style={isPagination ? styles.title : styles.titleNotPagination}
          numberOfLines={1}>
          {title}
        </Text>
        {isPagination && (
          <Pagination
            containerStyle={styles.paginationStyle}
            dotsLength={dotsLength}
            activeDotIndex={activeDotIndex}
            dotStyle={styles.dotStyle}
            inactiveDotStyle={styles.inactiveDotStyle}
          />
        )}
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    paddingHorizontal: wp('4'),
    paddingTop: hp('3'),
    height: hp('30'),
  },
  title: {
    fontFamily: 'roboto-slab-bold',
    fontSize: wp('6.5'),
    color: '#ffffff',
    marginTop: hp('13'),
    marginBottom: wp('-7'),
    width: wp('85'),
  },
  titleNotPagination: {
    fontFamily: 'roboto-slab-bold',
    fontSize: wp('5.8'),
    color: '#ffffff',
    marginBottom: wp('-7'),
    width: wp('85'),
    marginTop: hp('16'),
  },
  paginationStyle: {
    height: hp('10'),
    paddingBottom: wp('2'),
  },
  dotStyle: {
    width: wp('3'),
    height: wp('3'),
    borderRadius: wp('1.5'),
    backgroundColor: 'rgba(255, 255, 255, 0.92)',
    ...shadow(10),
    marginRight: wp('-3'),
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
    marginTop: hp('20'),
    opacity: 0.3,
    height: hp('10'),
  },
  gradientOpacityNotPanigation: {
    width: wp('100'),
    marginTop: hp('24'),
    opacity: 0.3,
    height: hp('6'),
  },
});
export default ProvincesSlideShow;
