import React, {Component} from 'react';
import {View, StyleSheet, Text, ImageBackground, TextInput} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import ButtonCustom from './ButtonCustom';
import shadow from '../util/shadow';
import GradientOpacity from './GradientOpacity';
import {translate} from '../util/translate';
import {withPages} from '../util/withPages';
class HomeSlideShow extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {};
  }
   
  render() {
    const {style, data, language, onPress} = this.props;
    
    let isVi = language === 'vi';
    return (
      <ImageBackground
        resizeMode={'cover'}
        source={{uri: data.Images[0]}}
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
          <Text style={styles.titleStyle}>
            {isVi ? data.vi.Title : data.en.Title}
          </Text>
          <Text style={styles.content} numberOfLines={2}>
            {isVi ? data.vi.Content : data.en.Content}
          </Text>
          <ButtonCustom
            style={styles.buttonStyle}
            title={translate('discover')}
            onPress = {onPress}
          />
        </View>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    paddingVertical: hp('3'),
  },
  searchBarView: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    width: wp('90'),
    borderRadius: wp('3'),
    ...shadow(3),
    alignItems: 'center',
    paddingHorizontal: wp('4'),
    alignSelf: 'center',
  },
  textInputStyle: {
    width: '75%',
    fontSize: wp('3.8'),
    height: '100%',
  },
  viewBottom: {
    marginTop: '20%',
    paddingHorizontal: wp('6'),
  },
  titleStyle: {
    fontFamily: 'roboto-slab-bold',
    fontSize: wp('6'),
    color: '#ffffff',
  },
  content: {
    fontFamily: 'roboto-slab-bold',
    color: '#F7F3F3',
    fontSize: wp('3.4'),
  },
  buttonStyle: {
    width: wp('40'),
    marginTop: hp('2'),
    paddingVertical: hp('1'),
  },
  gradientOpacity: {
    width: wp('100'),
    height: hp('10'),
    opacity: 0.4,
  },
});
export default withPages(HomeSlideShow);
