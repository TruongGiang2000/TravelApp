import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Pressable,
  Image,
  ImageBackground,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

class ItemHotel extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      style,
      onPress,
      imageStyle,
      contentStyle,
      source,
      titlePlace,
      titleHotel,
    } = this.props;
    return (
      <Pressable style={[styles.container, style]} onPress={onPress}>
        <ImageBackground
          style={[styles.styleImage, imageStyle]}
          source={source}
          resizeMode={'cover'}
          borderRadius={wp('1.5')}>
          <View style={styles.styleBackground}>
            <Image
              source={require('../../../assets/images/ngoisao.png')}
              style={styles.starStyle}
            />
          </View>
        </ImageBackground>

        <Text numberOfLines={1} style={styles.txtHotel}>
          {titleHotel}
        </Text>
        <Text style={[styles.textplace, contentStyle]}>{titlePlace}</Text>
      </Pressable>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    width: wp('35'),
  },
  styleImage: {
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    height: hp('30'),
  },
  txtHotel: {
    color: '#353b50',
    fontSize: wp('3.6'),
    fontFamily: 'roboto-slab.regular',
    fontWeight: '700',
    marginTop: wp('2'),
    opacity: 0.6,
  },
  textplace: {
    color: '#353b50',
    fontSize: wp('3'),
    fontFamily: 'roboto-slab.regular',
    opacity: 0.6,
  },
  styleBackground: {
    width: '35%',
    height: '35%',
    borderRadius: wp('1'),
    marginTop: hp('17'),
    marginLeft: wp('2'),
    marginBottom: hp('1'),
    backgroundColor: 'rgba(41, 41, 41, 0.74)',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  starStyle: {
    width: wp('5'),
    height: wp('5'),
    marginBottom: hp('2'),
  },
});
export default ItemHotel;
