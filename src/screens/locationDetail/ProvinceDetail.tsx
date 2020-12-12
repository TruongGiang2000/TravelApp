import React, {Component} from 'react';
import {View, StyleSheet, ScrollView, Text, FlatList} from 'react-native';
import SlideShow from '../../components/SlideShow';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {withPages} from '../../util/withPages';
import ProvinceImageList from './modules/ProvinceImageList';
import Rating from '../../components/ItemRating';
import {translate} from '../../util/translate';
import {actionMain} from '../../util/mainActions';
import SpecialSpot from './modules/SpecialSpot';
import CommunityPeople from '../../components/CommunityPeople';
import HotelAroundList from './modules/HotelAroundList';
import {places, hotels} from '../../redux';
import {connect} from 'react-redux';

class ProvinceDetail extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.route.params.item,

    };
  }
  
  componentDidMount() {
    const {data} = this.state;
    const {getHotelByProvince, getLocationByProvince} = this.props;
    actionMain.loading(true);
    getLocationByProvince(data.ID);
    getHotelByProvince(data.ID);
  }
  onPressBackSpace = () => {
    this.props.navigation.goBack()
  };
  render() {
    const {data} = this.state;
    const {language, navigation, location, hotelByProvince} = this.props;
    let isVi = language === 'vi';
    return (
      <ScrollView style={styles.MainContainer}>
        <SlideShow
          isLocation={true}
          data={data.Images}
          title={isVi ? data.vi.Title : data.en.Title}
          onPressBackSpace={this.onPressBackSpace}
          isPagination={true}
        />
        <View style={styles.styleView}>
          <Text style={styles.content}>
            {isVi ? data.vi.Content.trim() : data.en.Content.trim()}
          </Text>
          <ProvinceImageList style={styles.marginTop} data={data.Images} />
          <CommunityPeople
            style={styles.marginTop}
            firstSrc={require('../../assets/images/Bitmap.png')}
            secondSrc={require('../../assets/images/angiang.jpg')}
            thirdSrc={require('../../assets/images/lai_chau.jpg')}
            firstName={'Kiên'}
            secondName={'Tiến'}
            thirdName={'Quang'}
            numberOfPeople={16}
          />
          <Rating
            numberOfReview={10}
            starCount={3.5}
            style={styles.marginTop}
            content={translate('review')}
          />
          <SpecialSpot
            navigation={navigation}
            style={styles.marginTop}
            location={location}
            language={language}
          />
          <HotelAroundList
            navigation={navigation}
            style={styles.marginTop}
            language={language}
            hotelByProvince={hotelByProvince}
          />
        </View>
        
      </ScrollView>
      
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    paddingBottom: hp('3'),
  },
  styleView: {
    paddingHorizontal: wp('4'),
    paddingVertical: hp('2'),
    backgroundColor: '#ffffff',
  },
  content: {
    fontFamily: 'roboto-slab.regular',
    fontSize: wp('3.7'),
    color: '#5C6979',
    textAlign: 'auto',
    lineHeight: wp('6'),
  },
  marginTop: {
    marginTop: hp('3'),
  },
});
const mapStateFromProps = (state: any) => {
  return {
    location: state.places.location,
    hotelByProvince: state.hotel.hotelByProvince,
  };
};
export default connect(mapStateFromProps, {...places, ...hotels})(
  withPages(ProvinceDetail),
);
