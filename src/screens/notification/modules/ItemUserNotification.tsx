import React, {Component} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {translate} from '../../../components/translate';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
  } from 'react-native-responsive-screen';
import CircleImage from '../../../components/CircleImage';
class ItemUserNotification extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {style, stylecore, source, styletitle, core, title,viewstra} = this.props;

    return (
      <View style={[styles.MainContainer, style]}>
        <Text style={[styles.title, styletitle]}>{title}</Text>
        <View style={[styles.viewStraCore, viewstra]}>
            <Text style={[styles.core, stylecore]}>{`${translate(
              'stra_core',
            )}: ${core}`}</Text>
            <Image
              source={require('../../../assets/images/s_coin.png')}
              style={styles.imageCoin}
            />
          </View>
          <CircleImage
          source={source}
          size={wp('12')}
          style={styles.containerCirCleImage}
          styleImage={styles.circleImage}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    width: '90%',
    //alignItems: 'center',
    height: '1%',
  },
  title:{
    fontSize: wp('3'),
    fontFamily: 'roboto-slab',
    color: '#323b45',
    marginLeft: wp('1')
  },
  viewStraCore:{
    backgroundColor: '#0003',
    paddingLeft: wp('1'),
    flexDirection: 'row',
    borderRadius: wp('4'),
    alignItems: 'center',
    justifyContent: 'center',
    width: '70%',
    marginTop: wp('2'),
  },
  core:{
    fontSize: wp('3'),
    fontFamily: 'roboto-slab.regular',
  },
  imageCoin:{
    width: wp('5.5'),
    height: wp('5.5'),
  },
  containerCirCleImage:{
    marginLeft: wp('30'),
    marginTop: hp('-21'),
    alignItems: 'flex-end',
},
  circleImage:{
    borderWidth: 1,
    borderColor: '#323B45',
  }
});
export default ItemUserNotification;
