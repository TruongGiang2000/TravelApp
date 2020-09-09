import React, {Component} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import StarRating from 'react-native-star-rating';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import TraTe from '../../../components/TraTe';

export default class itemassess extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {};
  }
  onStarRatingPress(rating) {
    this.setState({
      starCount: rating,
    });
  }

  render() {
    const {starCount, title, review, numberofreview} = this.props;
    return (
      <TouchableOpacity style={styles.MainItem}>
        <TraTe style={styles.title} i18nKey={title} />
        <View style={styles.down}>
          <View style={styles.rating}>
            <StarRating
              disabled={false}
              maxStars={5}
              rating={starCount}
              selectedStar={(rating) => this.onStarRatingPress(rating)}
              fullStarColor={'#F0C909'}
              starSize={wp('4')}
            />
          </View>
          <View style={styles.reviews}>
            <TraTe style={styles.review} i18nKey={review} />
            <Icon name="arrowright" style={styles.icon} />
          </View>
        </View>
        <TraTe style={styles.numberofreview} i18nKey={numberofreview} />
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  MainItem: {
    width: wp('90'),
    height: hp('15'),
    flexDirection: 'column',
  },
  down: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rating: {
    marginLeft: wp(3),
    width: wp('35'),
  },
  title: {
    fontSize: wp('5'),
    color: '#323B45',
    marginBottom: hp('2'),
    marginTop: hp('2'),
    fontFamily: 'roboto-slab-bold',
  },
  reviews: {
    flexDirection: 'row',
    marginRight: wp('3'),
  },
  review: {
    color: '#5C6979',
    fontSize: wp('4'),
  },
  icon: {
    fontSize: wp('6'),
    color: '#A8B6C8',
    marginLeft: wp('4'),
  },
  numberofreview: {
    color: '#5C6979',
    fontSize: wp('3'),
  },
});
