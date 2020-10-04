import React, {Component} from 'react';
import {Text, View, ImageBackground, StyleSheet} from 'react-native';
import Kindofroom from '../../home/modules/kindofroom';
import TraTe from '../../../components/TraTe';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

class ChooseRoom extends Component<any, any> {
  render() {
    const {image, title} = this.props;
    return (
      <ImageBackground source={image} style={styles.ImageBackground}>
        <MaterialIcon
          name={'keyboard-backspace'}
          size={wp('7')}
          color={'#FFFFFF'}
          style={styles.Icon}
        />
        <Kindofroom />
        <View style={styles.title}>
          <Text style={styles.NameTypeRoom}>{title}</Text>
          <TraTe i18nKey={'numbertyperoom'} style={styles.NumberTyperoom} />
        </View>
      </ImageBackground>
    );
  }
}
export default ChooseRoom;
const styles = StyleSheet.create({
  ImageBackground: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  NameTypeRoom: {
    fontFamily: 'roboto-slab-bold',
    fontSize: wp('8'),
    color: '#FFFFFF',
  },
  NumberTyperoom: {
    color: '#FFFFFF',
    fontSize: wp('5'),
  },
  Icon: {
    alignSelf: 'flex-start',
    marginLeft: wp('2'),
  },
  title: {
    marginTop: hp('2'),
    alignItems: 'center',
  },
});
