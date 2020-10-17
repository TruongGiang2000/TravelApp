import React, {Component} from 'react';
import {View, Pressable, StyleSheet, Text} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import StarRating from 'react-native-star-rating';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import {translate} from '../util/translate';
export default class ItemRating extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {
      starCount,
      content,
      numberOfReview,
      style,
      onPress,
    } = this.props;
    return (
      <Pressable style={style} onPress={onPress}>
        <Text style={styles.title}>{translate('rate')}</Text>
        <View style={styles.down}>
          <View style={styles.rating}>
            <StarRating
              disabled={false}
              maxStars={5}
              rating={starCount}
              fullStarColor={'#F0C909'}
              starSize={wp('5')}
            />
            <Text style={styles.numberofreview}>{`${numberOfReview} ${translate(
              'rate',
            )}`}</Text>
          </View>
          <View style={styles.reviews}>
            <Text style={styles.review}>{content}</Text>
            <Icon
              name="arrowright"
              style={styles.icon}
              size={wp('5')}
              color={'#A8B6C8'}
            />
          </View>
        </View>
      </Pressable>
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
    fontSize: wp('4.2'),
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
    textTransform: 'lowercase',
  },
});
