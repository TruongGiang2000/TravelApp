import React, {Component} from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import StarRating from 'react-native-star-rating';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import TraTe from '../../../components/TraTe';

export default class ItemRating extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {
      starCount,
      title,
      review,
      numberofreview,
      style,
      onPress,
    } = this.props;
    return (
      <TouchableOpacity style={style} onPress={onPress}>
        <TraTe style={styles.title} i18nKey={title} />
        <View style={styles.down}>
          <View style={styles.rating}>
            <StarRating
              disabled={false}
              maxStars={5}
              rating={starCount}
              fullStarColor={'#F0C909'}
              starSize={wp('5')}
            />
            <TraTe style={styles.numberofreview} i18nKey={numberofreview} />
          </View>
          <View style={styles.reviews}>
            <TraTe style={styles.review} i18nKey={review} />
            <Icon
              name="arrowright"
              style={styles.icon}
              size={wp('5')}
              color={'#A8B6C8'}
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  down: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rating: {
    marginLeft: wp('1.5'),
    width: wp('35'),
  },
  title: {
    fontSize: wp('5'),
    marginBottom: wp('1.5'),
    color: '#323B45',
    fontFamily: 'roboto-slab-bold',
  },
  reviews: {
    flexDirection: 'row',
    marginRight: wp('3'),
    justifyContent: 'center',
  },
  review: {
    color: '#5C6979',
    fontSize: wp('3.4'),
    fontFamily: 'roboto-slab.regular',
  },
  icon: {
    marginLeft: wp('2'),
  },
  numberofreview: {
    color: '#5C6979',
    fontSize: wp('3'),
    marginTop: wp('2'),
    fontFamily: 'roboto-slab.regular',
  },
});
