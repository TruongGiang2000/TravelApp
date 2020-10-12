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
import AntDesign from 'react-native-vector-icons/AntDesign';
class HotelSlideShow extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {data, dotsLength, activeDotIndex} = this.props;
    return (
      <ImageBackground
        source={{uri: data}}
        resizeMode={'cover'}
        style={styles.MainContainer}>
        <AntDesign
          name={'close'}
          size={wp('8')}
          color={'#ffffff'}
          style={{marginLeft: wp('4')}}
        />
        <View style={styles.viewPagination}>
          <GradientOpacity styleGradient={styles.gradientOpacity} />
          <Pagination
            containerStyle={styles.paginationStyle}
            dotsLength={dotsLength}
            activeDotIndex={activeDotIndex}
            dotStyle={styles.dotStyle}
            inactiveDotStyle={styles.inactiveDotStyle}
          />
        </View>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    paddingTop: hp('3'),
    height: hp('30'),
  },
  viewPagination: {
    flex: 1,
    justifyContent: 'flex-end',
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
    opacity: 0.6,
  },
  gradientOpacity: {
    width: wp('100'),
    height: hp('10'),
  },
});
export default HotelSlideShow;
