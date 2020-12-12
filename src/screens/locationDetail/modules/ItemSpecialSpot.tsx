import React, {Component} from 'react';
import {View, StyleSheet, Text, Image, Pressable} from 'react-native';
import {translate} from '../../../util/translate';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
class ItemSpecialSpot extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {source, title, peopleLike, style, onPress} = this.props;
    return (
      <Pressable style={[styles.MainContainer, style]} onPress={onPress}>
        <Image style={styles.image} source={source} />
        <View style={styles.contentView}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>
            {`${peopleLike} ${translate('descriptionLikeSpot')}`}
          </Text>
        </View>
      </Pressable>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    flexDirection: 'row',
  },
  image: {
    width: wp('30'),
    height: hp('10'),
    borderRadius: wp('2'),
  },
  contentView: {
    marginLeft: wp('4'),
    flex: 1,
  },
  title: {
    fontFamily: 'roboto-slab-bold',
    fontSize: wp('3.8'),
    color: '#323B45',
  },
  description: {
    fontFamily: 'roboto-slab.regular',
    fontSize: wp('3.4'),
    color: '#5C6979',
    opacity: 0.7,
  },
});
export default ItemSpecialSpot;
