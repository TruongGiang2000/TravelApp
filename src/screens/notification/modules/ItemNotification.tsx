import React, {Component} from 'react';
import {View, StyleSheet, Text, Pressable} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import ButtonCustom from '../../../components/ButtonCustom';
import CircleImage from '../../../components/CircleImage';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {translate} from '../../../components/translate';

class ItemNotification extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {
      style,
      source,
      styletitle,
      titlebutton,
      title,
      calendar,
      time,
      day,
      onPress,
    } = this.props;
    return (
      <Pressable style={[styles.MainContainer, style]}>
        <CircleImage source={source} size={wp('15')} />
        <View style={styles.viewContent}>
          <Text numberOfLines={2} style={[styles.title, styletitle]}>
            {this.props.children || title}
          </Text>
          {this.props.isShow && (
            <ButtonCustom
              title={titlebutton}
              style={{width: wp(30)}}
              onPress={onPress}
            />
          )}
          <View style={styles.viewDate}>
            <View style={styles.viewRow}>
              <Fontisto name={'calendar'} size={wp('3.5')} color={'#000'} />
              <Text style={styles.textDate}>{calendar}</Text>
            </View>
            <View style={styles.viewRow}>
              <Fontisto name={'clock'} size={wp('3.5')} color={'#000'} />
              <Text style={styles.textDate}>{time}</Text>
            </View>
            <Text style={styles.textDate}>{day}</Text>
          </View>
        </View>
      </Pressable>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF5F5',
  },
  viewContent: {
    flex: 1,
    marginLeft: wp('3'),
  },
  title: {
    fontSize: wp('3.7'),
    color: '#00162B',
    fontFamily: 'roboto-slab.regular',
  },
  viewDate: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: wp('8'),
    marginTop: hp('1'),
  },
  textDate: {
    fontSize: wp('3.2'),
    color: '#353B50',
    marginLeft: wp('1'),
    fontFamily: 'roboto-slab.regular',
  },
  viewRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
export default ItemNotification;
