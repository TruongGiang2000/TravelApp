import React, {Component} from 'react';
import {View, StyleSheet, Text, Pressable, Image} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import ButtonCustom from '../../../components/ButtonCustom';
import StarRating from 'react-native-star-rating';
import {translate} from '../../../util/translate';
class ItemHotelAroundHere extends Component<any, any> {
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
      style,
      onPress,
      imageStyle,
      titleStyle,
      contentStyle,
      title,
      content,
      price,
      source,
      starCount,
    } = this.props;
    return (
      <Pressable style={[styles.MainContainer, style]} onPress={onPress}>
        <Image
          source={source}
          style={[styles.styleImage, imageStyle]}
          resizeMode={'cover'}
        />
        <View style={styles.content}>
          <Text style={[styles.styletitle, titleStyle]}>{title}</Text>
          <StarRating
            maxStars={5}
            rating={starCount}
            selectedStar={(rating) => this.onStarRatingPress(rating)}
            fullStarColor={'#000'}
            starSize={13}
            containerStyle={styles.styleStart}
          />
          <Text style={[styles.styleContent, contentStyle]}>{content}</Text>
          <Text style={styles.price}>{`VNĐ ${price}`}</Text>
          <ButtonCustom
            title={translate('book_room')}
            style={styles.buttonBook}
            titleStyle={styles.titleButton}
          />
        </View>
      </Pressable>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    width: wp('70'),
    height: hp('25'),
    flexDirection: 'row',
    alignItems: 'center',
  },
  styleStart: {
    width: '60%',
    marginTop: hp('0.5'),
  },
  styleImage: {
    width: '40%',
    height: '100%',
  },
  styletitle: {
    fontSize: wp('3.8'),
    color: '#353b50',
    fontFamily: 'roboto-slab-bold',
  },
  styleContent: {
    fontSize: wp('3.6'),
    color: '#353b50',
    opacity: 0.6,
    fontFamily: 'roboto-slab.regular',
    marginTop: hp('0.5'),
  },
  price: {
    fontSize: wp('4'),
    color: '#FC4850',
    fontFamily: 'roboto-slab.regular',
    fontWeight: '400',
  },
  content: {
    marginLeft: wp('3'),
    flex: 1,
  },
  buttonBook: {
    paddingVertical: hp('0.8'),
    paddingHorizontal: wp('3'),
    marginTop: hp('2.5'),
  },
  titleButton: {
    fontSize: wp('3.4'),
    fontWeight: '700',
  },
});
export default ItemHotelAroundHere;
