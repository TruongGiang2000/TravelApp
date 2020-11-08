import React, {Component} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import PropTypes from 'prop-types';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
class ItemUtilities extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {source, title} = this.props;
    return (
      <View style={[styles.MainContainer, this.props.style]}>
        <Image
          source={source}
          resizeMode={'contain'}
          style={styles.ImageStyle}
        />
        <Text style={styles.title}>{title}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    borderRadius: wp('2'),
    justifyContent: 'center',
    backgroundColor: '#F2F2F2',
    marginRight: wp('3'),
    alignItems: 'center',
    paddingHorizontal: wp('1'),
    paddingBottom: wp('0.5'),
  },
  title: {
    color: '#353B50',
    textAlign: 'center',
    fontFamily: 'roboto-slab.regular',
    fontSize: wp('2.4'),
    width: wp('20'),
  },
  ImageStyle: {
    height: wp('13'),
    width: wp('13'),
  },
});
export default ItemUtilities;
