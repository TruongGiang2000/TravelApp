import React, {Component} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import elevation from '../components/shadow';
import Gradient from './GradientOpacity';

class ItemImage extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      isShow: this.props.isShow,
    };
  }
  render() {
    const {style, styleImage, source, styletitle, title, onPress} = this.props;
    return (
      <TouchableOpacity style={[styles.MainContainer, style]} onPress={onPress}>
        {this.state.isShow && (
          <Image
            style={[styles.styleImageAfter, styleImage]}
            source={source}
            resizeMode={'cover'}
          />
        )}

        <Image
          style={[styles.styleImage, styleImage]}
          source={source}
          resizeMode={'cover'}
        />
        <Gradient styleGradient={styles.stylegradient} />
        <Text style={[styles.text, styletitle]}>{title}</Text>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    width: wp('36'),
    height: hp('26'),
  },
  styleImage: {
    borderRadius: 6, 
    width: '100%',
    height: '93%',
  },
  stylegradient: {
    borderRadius: 6,
    width: '100%',
    height: '93%',
  },
  text: {
    color: '#FFFFFF',
    fontSize: wp('3.3'),
    marginHorizontal: wp('3'),
    height: '100%',
    textAlignVertical: 'bottom',
    paddingBottom: hp('3.5'),
    position: 'absolute',
    fontFamily: 'roboto-slab-bold',
  },
  styleImageAfter: {
    position: 'absolute',
    borderRadius: 6,
    width: '85%',
    height: '92%',
    margin: wp('2'),
    alignSelf: 'center',
  },
});
export default ItemImage;
