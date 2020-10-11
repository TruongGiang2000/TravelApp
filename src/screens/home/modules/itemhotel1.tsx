import React, {Component} from 'react';
import {Text, View, Pressable, StyleSheet, Image} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import StarRating from 'react-native-star-rating';

export default class ItemHotel1 extends Component<any, any> {
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
    const {source, title, price, address, starCount, votes} = this.props;

    return (
      <Pressable style={styles.MainContainer}>
        <Image style={styles.styleImage} source={source} />
        <View style={styles.down1}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.price}>{price}</Text>
        </View>
        <View style={styles.down2}>
          <Text style={styles.address}>{address}</Text>
          <View style={styles.rating}>
            <StarRating
              disabled={false}
              maxStars={5}
              rating={starCount}
              selectedStar={(rating) => this.onStarRatingPress(rating)}
              fullStarColor={'#F0C909'}
              starSize={hp('2')}
            />
            <Text style={styles.votes}>{votes}</Text>
          </View>
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
    width: wp('80'),
    height: hp('30'),
  },
  styleImage: {
    width: '100%',
    height: hp('20'),
    borderRadius: 5,
  },
  down1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  down2: {
    flexDirection: 'column',
  },
  address: {
    fontSize: wp('3'),
    color: '#C3C3C3',
  },
  title: {
    fontSize: wp('4'),
    color: '#000000',
  },
  price: {
    fontSize: wp('4'),
    color: '#000000',
  },
  rating: {
    flexDirection: 'row',
  },
  votes: {
    left: wp('2'),
    fontSize: wp('3'),
  },
});
