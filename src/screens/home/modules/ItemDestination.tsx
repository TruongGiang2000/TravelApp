import React, {Component} from 'react';
import {Text, View, Image, Pressable, StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import StarRating from 'react-native-star-rating';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import GradientOpacity from '../../../components/GradientOpacity';
import {translate} from '../../../util/translate';
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
    const {
      style,
      numberFavorite,
      title,
      place,
      starCount,
      onPress,
      source,
      ImageStyle,
    } = this.props;
    return (
      <Pressable style={[styles.container, style]} onPress={onPress}>
        <Image source={source} style={[styles.viewImage, ImageStyle]} />
        <Icon name="hearto" size={27} color="#FFFFFF" style={styles.hearto} />
        <GradientOpacity
          styleGradient={styles.styleGradient}
          color={['#fff', '#fff', '#fff', '#0000']}
        />
        <View style={styles.bottom}>
          <View style={styles.viewFavorite}>
            <Text style={styles.numberFavorite}>{numberFavorite}</Text>
            <Text style={styles.descriptionSpotHome}>
              {translate('description_spot_home')}
            </Text>
          </View>

          <View style={styles.viewColumn}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.place}>{place}</Text>
            <StarRating
              disabled={false}
              maxStars={5}
              rating={starCount}
              selectedStar={(rating) => this.onStarRatingPress(rating)}
              fullStarColor={'#F0C909'}
              starSize={wp('3.4')}
              containerStyle={styles.startRating}
            />
          </View>
        </View>
      </Pressable>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: wp('65'),
    height: hp('50'),
  },
  viewImage: {
    width: '100%',
    height: '70%',
    borderRadius: wp('2'),
  },
  styleGradient: {
    width: '100%',
    height: '50%',
    marginTop: '63%',
  },
  title: {
    fontSize: wp('3.8'),
    fontFamily: 'roboto-slab-bold',
    color: '#353B50',
  },
  place: {
    fontSize: wp('3.6'),
    color: '#353B50',
    fontFamily: 'roboto-slab.regular',
  },
  bottom: {
    flexDirection: 'row',
    height: '25%',
    width: '100%',
    marginTop: hp('1.5'),
    alignItems: 'center',
    marginLeft: wp('3'),
  },
  viewColumn: {
    marginLeft: wp('4'),
    justifyContent: 'center',
    flex: 1,
  },
  viewFavorite: {
    width: wp('15'),
    backgroundColor: 'rgba(41, 41, 41, 0.75)',
    borderRadius: wp('2'),
    paddingHorizontal: wp('0.4'),
    paddingVertical: wp('1'),
    height: hp('12'),
  },
  numberFavorite: {
    color: '#FFFFFF',
    fontSize: wp('4.4'),
    fontFamily: 'roboto-slab.regular',
    textAlign: 'center',
  },
  descriptionSpotHome: {
    fontFamily: 'roboto-slab.regular',
    color: '#ffffff',
    fontSize: wp('3.4'),
    textAlign: 'center',
  },
  hearto: {
    position: 'absolute',
    borderRadius: wp('1'),
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    padding: wp('2'),
    marginTop: hp('2'),
    left: '78%',
  },
  startRating: {
    width: '60%',
    marginTop: wp('1'),
  },
});
