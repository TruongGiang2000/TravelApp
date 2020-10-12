import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import HomeSlideShow from './HomeSlideShow';
import LocationSlideShow from './LocationSlideShow';
import HotelSlideShow from './HotelSlideShow';
import Carousel from 'react-native-snap-carousel';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
class SlideShow extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      activeSlide: 0,
    };
  }
  renderItem = ({item}) => {
    const {activeSlide} = this.state;
    const {
      isHome,
      isLocation,
      isHotel,
      title,
      data,
      onPressBackSpace,
      isPagination,
    } = this.props;
    return (
      <View>
        {isHome && <HomeSlideShow data={item} />}
        {isLocation && (
          <LocationSlideShow
            data={item}
            dotsLength={data.length}
            activeDotIndex={activeSlide}
            title={title}
            onPressBackSpace={onPressBackSpace}
            isPagination={isPagination}
          />
        )}
        {isHotel && (
          <HotelSlideShow
            data={item}
            dotsLength={data.length}
            activeDotIndex={activeSlide}
          />
        )}
      </View>
    );
  };
  render() {
    return (
      <View style={styles.MainContainer}>
        <Carousel
          data={this.props.data}
          renderItem={this.renderItem}
          sliderWidth={wp('100')}
          itemWidth={wp('100')}
          onSnapToItem={(index) => this.setState({activeSlide: index})}
          autoplay={true}
          loop={true}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
  },
});
export default SlideShow;
