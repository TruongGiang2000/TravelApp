import { request } from 'http';
import { url } from 'inspector';
import React, {Component} from 'react';
import {View, StyleSheet, Image, Pressable} from 'react-native';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
  } from 'react-native-responsive-screen';
  import AntDesign from 'react-native-vector-icons/AntDesign';
class ModalImage extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
      const {source, style, onPress} = this.props;
    return (
      <View style={styles.MainContainer}>
        <Image style={[style]}
        source={source}/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: hp('70')
  },
  
});
export default ModalImage;
