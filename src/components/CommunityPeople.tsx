import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {translate} from './translate';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import CircleImage from './CircleImage';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
class CommunityPeople extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      style,
      firstSrc,
      secondSrc,
      thirdSrc,
      firstName,
      secondName,
      thirdName,
      numberOfPeople,
    } = this.props;
    return (
      <View style={style}>
        <Text style={styles.title}>{translate('community')}</Text>
        <View style={styles.viewContent}>
          <View style={styles.row}>
            <CircleImage source={firstSrc} size={wp('10')} />
            <CircleImage
              style={styles.circleImage}
              source={secondSrc}
              size={wp('10')}
            />
            <CircleImage
              style={styles.circleImageNext}
              source={thirdSrc}
              size={wp('10')}
            />
            <View style={styles.viewName}>
              <Text
                style={
                  styles.name
                }>{`${firstName}, ${secondName}, ${thirdName}`}</Text>
              <Text style={styles.description}>{`${translate(
                'and',
              )} ${numberOfPeople} ${translate(
                'description_community',
              )}`}</Text>
            </View>
          </View>
          <IconAntDesign name={'hearto'} size={wp('5')} color={'#5C6979'} />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  title: {
    fontFamily: 'roboto-slab-bold',
    color: '#323B45',
    fontSize: wp('4.2'),
    marginBottom: hp('1'),
  },
  viewContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  circleImage: {
    position: 'absolute',
    marginLeft: wp('6'),
  },
  circleImageNext: {
    position: 'absolute',
    marginLeft: wp('12'),
  },
  viewName: {
    marginLeft: wp('15'),
  },
  name: {
    fontFamily: 'roboto-slab-bold',
    color: '#323B45',
    fontSize: wp('3.8'),
    marginBottom: hp('0.7'),
  },
  description: {
    fontFamily: 'roboto-slab.regular',
    fontSize: wp('3.5'),
    color: '#5C6979',
  },
});
export default CommunityPeople;
