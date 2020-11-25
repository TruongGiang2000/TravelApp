import { request } from 'http';
import { url } from 'inspector';
import React, {Component} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
  } from 'react-native-responsive-screen';
class ModalImage extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
      const {source, style} = this.props;
    return (
      <View style={styles.MainContainer}>
        <Image style={[styles.Images, style]}
        source={source}/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  Images: {
    width: wp('90'),
    height: hp('60')
  },
});
export default ModalImage;
