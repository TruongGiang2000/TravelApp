import React, {Component} from 'react';
import {View, StyleSheet, Text, Pressable, Image} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import shadow from '../../../util/shadow';
class ItemNew extends Component<any, any> {
  render() {
    const {
      style,
      styleImage,
      styleTitle,
      styleContent,
      title,
      content,
      source,
      onPress,
    } = this.props;
    return (
      <Pressable onPress={onPress} style={[styles.MainContainer, style]}>
        <Image style={[styles.styleImage, styleImage]} source={source} />
        <View style={styles.styleview}>
          <Text style={[styles.textTitle, styleTitle]} numberOfLines={1}>
            {title}
          </Text>
          <Text style={[styles.textContent, styleContent]} numberOfLines={3}>
            {content}
          </Text>
        </View>
      </Pressable>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    flexDirection: 'row',
    height: hp('10'),
  },
  styleImage: {
    width: '30%',
    height: '100%',
    borderRadius: wp('1'),
  },
  textTitle: {
    color: '#00162b',
    fontSize: wp('3.7'),
    fontFamily: 'roboto-slab-bold',
  },
  textContent: {
    color: '#353b50',
    fontSize: wp('3.4'),
    fontFamily: 'roboto-slab.regular',
  },
  styleview: {
    marginLeft: wp('2'),
    flex: 1,
    justifyContent: 'flex-start',
  },
});
export default ItemNew;
