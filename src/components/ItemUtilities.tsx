import React, {Component} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import PropTypes from 'prop-types';
import TraTe from './TraTe';
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
        <Image source={source} style={styles.ImageStyle}></Image>
        <Text style={styles.title}>{title}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    borderRadius: wp('2'),
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.713726)',
    marginRight: wp('3'),
    alignItems: 'center',
    width: wp('20'),
    height: hp('15'),
  },
  title: {
    color: '#353B50',
    textAlign: 'center',
    fontFamily: 'roboto-slab.regular',
    marginTop: hp('1.5'),
    fontSize: wp('2.5'),
  },
  ImageStyle: {
    height: hp('5'),
    width: wp('10'),
  },
});
export default ItemUtilities;
