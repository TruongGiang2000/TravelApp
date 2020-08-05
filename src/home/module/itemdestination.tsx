import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import StarRating from 'react-native-star-rating';
import Icon from 'react-native-vector-icons/dist/AntDesign';

export default class itemdestination extends Component<any, any> {
  constructor(prop) {
    super(prop);
    this.state = {};
  }
  onStarRatingPress(rating) {
    this.setState({
      starCount: rating,
    });
  }
  render() {
    const {style, ImageStyle, number, place, title, name, starCount, onPress} = this.props;
    return (
      <TouchableOpacity onPress={onPress}>
        <View style={[styles.container, style]}>
          <View>
            <Image
              source={this.props.source}
              style={[styles.imgstyle, this.props.ImageStyle]}></Image>
          </View>
          <View style={styles.hearto}>
            <Icon name="hearto" size={27} color="#FFFFFF" />
          </View>

          <View style={styles.down}>
            <View style={styles.down1}>
              <Text style={styles.number}>{number}</Text>
              <Text style={styles.place}>{place}</Text>
            </View>

            <View style={styles.down2}>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.name}>{name}</Text>
              <StarRating
                disabled={false}
                maxStars={5}
                rating={starCount}
                selectedStar={(rating) => this.onStarRatingPress(rating)}
                fullStarColor={'#F0C909'}
                starSize={13}
              />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  imgstyle: {
    width: wp('70'),
    height: hp('50'),
    borderRadius: 5,
    opacity: 0.8,
  },
  title: {
    fontSize: 14,
    lineHeight: 21,
    fontFamily: 'roboto-slab-bold',
  },
  name: {
    fontSize: wp('3'),
    fontFamily: 'roboto-slab.regular',
  },
  down: {
    position: 'absolute',
    top: hp('39'),
    flexDirection: 'row',
  },
  down1: {
    borderRadius: 5,
    backgroundColor: '#292929',
    width: wp('10'),
    height: hp('9'),
    flexDirection: 'column',
    opacity: 0.75,
    right: wp(5),
  },
  down2: {
    flexDirection: 'column',
    right: wp(1),
    top: wp(2),
  },
  number: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'normal',
    fontStyle: 'normal',
    textAlign: 'center',
  },
  place: {
    fontSize: 8,
    color: '#FFFFFF',
    fontStyle: 'normal',
    fontWeight: 'normal',
    lineHeight: 11,
    textAlign: 'center',
  },
  hearto: {
    position: 'absolute',
    borderRadius: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.396078)',
    width: wp('13'),
    height: hp('7'),
    alignItems: 'center',
    justifyContent: 'center',
    right: wp('25'),
    top: hp('2'),
  },
  linearGradient: {
    borderRadius: 5,
  },
});
