import React, {Component} from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import SlideShow from '../../components/SlideShow';
import {withPages} from '../../components/withPages';
import MapView from './modules/MapView';
import Rating from '../../components/ItemRating';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import lodash from 'lodash';
import {translate} from '../../components/translate';
import CommunityPeople from '../../components/CommunityPeople';
class SpotDetail extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.route.params.item,
    };
  }
  onPressBackSpace = () => {
    this.props.navigation.navigate('LocationDetail');
  };
  render() {
    const {language} = this.props;
    const {data} = this.state;
    let isVi = language === 'vi';
    return (
      <ScrollView style={styles.MainContainer}>
        <SlideShow
          isLocation={true}
          data={data.Images}
          title={isVi ? data.vi.Title : data.en.Title}
          onPressBackSpace={this.onPressBackSpace}
        />
        <MapView
          latitude={lodash.toNumber(data.Long)}
          longitude={lodash.toNumber(data.Lat)}
          addRess={isVi ? data.vi.Address : data.en.Address}
          title={isVi ? data.vi.Title : data.en.Title}
        />

        <View style={styles.contentView}>
          <Text style={styles.content}>{isVi ? data.vi.Content : data.en.Content}</Text>
          <Rating
            style={styles.marginTop}
            numberOfReview={100}
            starCount={2}
            content={translate('review')}
          />
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
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    paddingBottom: hp('2'),
  },
  contentView: {
    paddingHorizontal: wp('4'),
    paddingVertical: hp('2'),
  },
  content: {
    fontSize: wp('3.8'),
    fontFamily: 'roboto-slab.regular',
    fontWeight: '300',
    textAlign: 'auto',
    lineHeight: wp('6'),
    color: '#5C6979',
  },
  marginTop: {
    marginTop: hp('2'),
  },
});
export default withPages(SpotDetail);
