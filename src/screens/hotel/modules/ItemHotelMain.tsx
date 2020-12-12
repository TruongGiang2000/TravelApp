import React, {Component} from 'react';
import {Text, View, Pressable, StyleSheet, Image} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import StarRating from 'react-native-star-rating';
import {translate} from '../../../util/translate';
export default class ItemHotelMain extends Component<any, any> {
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
    const {
      source,
      title,
      price,
      address,
      starCount,
      votes,
      style,
      onPress,
    } = this.props;

    return (
      <Pressable style={[styles.MainContainer, style]} onPress={onPress}>
        <Image style={styles.styleImage} resizeMode={'cover'} source={source} />
        <View style={styles.viewTop}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.price}>{`đ${price}`}</Text>
        </View>
        <Text style={styles.address} numberOfLines={2}>
          {address}
        </Text>
        <View style={styles.rating}>
          <StarRating
            disabled={false}
            maxStars={5}
            rating={starCount}
            selectedStar={(rating) => this.onStarRatingPress(rating)}
            fullStarColor={'#F0C909'}
            starSize={wp('3')}
            starStyle={{margin: wp('1')}}
          />
          <Text style={styles.votes}>{`${votes} ${translate('rate')}`}</Text>
        </View>
      </Pressable>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
    width: wp('90'),
    height: hp('30'),
  },
  styleImage: {
    width: '100%',
    height: '68%',
    borderRadius: wp('2'),
  },
  viewTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: wp('1'),
    alignItems: 'center',
    marginLeft: wp('1'),
  },
  address: {
    fontSize: wp('3'),
    color: '#C3C3C3',
    fontFamily: 'roboto-slab.regular',
    marginLeft: wp('1'),
  },
  title: {
    fontSize: wp('3.8'),
    color: '#000000',
    fontFamily: 'roboto-slab-bold',
  },
  price: {
    fontSize: wp('3.8'),
    color: '#000000',
    fontFamily: 'roboto-slab.regular',
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: wp('1'),
  },
  votes: {
    left: wp('2'),
    fontSize: wp('3'),
    fontFamily: 'roboto-slab.regular',
    color: '#838383',
  },
});
