import React, {Component} from 'react';
import {View, StyleSheet, Text, ImageBackground, TextInput} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import ButtonCustom from './ButtonCustom';
import shadow from './shadow';
import GradientOpacity from './GradientOpacity';
import {translate} from '../components/translate';
class HomeSlideShow extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {style, data} = this.props;
    return (
      <ImageBackground
        resizeMode={'cover'}
        source={data.srcImage}
        style={[styles.MainContainer, style]}>
        <View style={styles.searchBarView}>
          <MaterialIcons
            name={'location-on'}
            color={'#353B50'}
            size={wp('6')}
          />
          <TextInput
            placeholder={translate('search')}
            placeholderTextColor={'#A8B6C8'}
            style={styles.textInputStyle}
          />
        </View>

        <View style={styles.viewBottom}>
          <GradientOpacity
            start={{x: 0.1, y: 0.1}}
            end={{x: 0.1, y: 0.1}}
            styleGradient={styles.gradientOpacity}
          />
          <Text style={styles.titleStyle}>{data.title}</Text>
          <Text style={styles.content}>{data.content}</Text>
          <ButtonCustom
            style={styles.buttonStyle}
            title={translate('discover')}
          />
        </View>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    paddingVertical: hp('4'),
  },
  searchBarView: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    width: wp('90'),
    borderRadius: wp('3'),
    ...shadow(3),
    alignItems: 'center',
    marginTop: hp('2'),
    paddingHorizontal: wp('4'),
    alignSelf: 'center',
  },
  textInputStyle: {
    width: wp('75'),
    fontSize: wp('3.8'),
  },
  viewBottom: {
    marginTop: hp('12'),
    paddingHorizontal: wp('6'),
  },
  titleStyle: {
    fontFamily: 'roboto-slab-bold',
    fontSize: wp('6.5'),
    color: '#ffffff',
  },
  content: {
    fontFamily: 'roboto-slab-bold',
    color: '#F7F3F3',
    fontSize: wp('3.8'),
  },
  buttonStyle: {
    width: wp('40'),
    marginTop: wp('2'),
  },
  gradientOpacity: {
    width: wp('100'),
    height: hp('10'),
    opacity: 0.2,
  },
});
export default HomeSlideShow;
