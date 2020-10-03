import React, {Component} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
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
    this.state = {
      isShow: this.props.isShow,
    };
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
      stylecalendar,
      styletime,
      styleday,
      onPress
    } = this.props;
    return (
      <TouchableOpacity style={[styles.MainContainer, style]}>
        <View style={{marginTop: wp('2')}}>
          <CircleImage source={source} size={90} style={{}} />
        </View>
        <View style={styles.center}>
          <Text style={[styles.title, styletitle]}>{title}</Text>
          {this.state.isShow && (
            <ButtonCustom title={titlebutton} style={{width: wp(30)}} onPress={onPress} />
          )}
          <View >
            <View style={styles.viewcalendar}>
          <Fontisto
                  name={'calendar'}
                  size={wp('3.5')}
                  color={'#000'}
                />
            <Text style={[styles.calendar, stylecalendar]}>{calendar}</Text>
            </View>
            <View style={styles.viewtime}>
            <Fontisto
                  name={'clock'}
                  size={wp('3.5')}
                  color={'#000'}
                />
            <Text style={[styles.time, styletime]}>{time}</Text>
            </View>
            <Text style={[styles.day, styleday]}>{day}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    width: wp('95'),
  },
  title: {
    fontSize: wp('4'),
    color: '#00162B',
    marginTop: wp('2'),
  },
  calendar: {
    marginTop: wp('-4'),
    fontSize: wp('3'),
    color: '#353B50',
    marginLeft: wp('5'),
  },
  time: {
    fontSize: wp('3'),
    color: '#353B50',
    marginLeft: wp('4'),
    marginTop: wp('-4'),
  },
  day: {
    fontSize: wp('3'),
    color: '#353B50',
    marginLeft: wp('45'),
    marginTop: wp('2'),
  },
  center: {
    width: wp('70'),
    alignSelf: 'flex-end',
    marginTop: wp('2')
  },
  viewcalendar:{
    marginTop: wp('2'),
    position: 'absolute',
  },
  viewtime:{
    marginTop: wp('2'),
    marginLeft: wp('25'),
    position: 'absolute',
  }
});
export default ItemNotification;
