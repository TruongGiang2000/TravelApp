import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import HomeSlideShow from './HomeSlideShow';
import ProvincesSlideShow from './ProvincesSlideShow';
import SpotSlideShow from './SpotSlideShow';
import Carousel from 'react-native-snap-carousel';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
class SlideShow extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      activeSlide: 0,
    };
  }
  renderItem = ({item}) => {
    const {activeSlide} = this.state;
    const {isHome, isProvinces, isSpot, data} = this.props;
    return (
      <View>
        {isHome && <HomeSlideShow data={item} />}
        {isProvinces && (
          <ProvincesSlideShow
            data={item}
            dotsLength={data.length}
            activeDotIndex={activeSlide}
          />
        )}
        {isSpot && (
          <SpotSlideShow
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
