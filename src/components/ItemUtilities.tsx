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
    backgroundColor: '#F2F2F2',
    marginRight: wp('3'),
    alignItems: 'center',
    width: wp('20'),
    height: hp('11'),
    paddingTop: hp('2'),
    paddingBottom: hp('1'),
  },
  title: {
    color: '#353B50',
    textAlign: 'center',
    fontFamily: 'roboto-slab.regular',
    marginTop: hp('1'),
    fontSize: wp('2.5'),
  },
  ImageStyle: {
    height: hp('5'),
    width: wp('10'),
  },
});
export default ItemUtilities;
