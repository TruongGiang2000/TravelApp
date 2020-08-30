import React, {Component} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import PropTypes from 'prop-types';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Gradient from '../components/GradientOpacity';
import ButtonCustom from '../components/custombutton';
import CustomCirle from '../components/CustomCircle';

class ItemImage extends Component<any, any> {
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
    } = this.props;
    return (
      <TouchableOpacity style={[styles.MainContainer, style]}>
        <View style={{marginTop:wp('2')}}>
        <CustomCirle
          source={source}
          size={100}
          style={{}}
        />
        </View>
        <View style={styles.center}>
          <Text style={[styles.title, styletitle]}>{title}</Text>
          {this.state.isShow && (
            <ButtonCustom title={titlebutton} style={{width: wp(30)}} />
          )}
          <View>
            <Text style={[styles.calendar, stylecalendar]}>{calendar}</Text>
            <Text style={[styles.time, styletime]}>{time}</Text>
            <Text style={[styles.day, styleday]}>{day}</Text>
          </View>
        </View>
        
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    width: wp('100'),
    height: hp('20'),
  },
  title: {
    fontSize: wp('5'),
    color: '#00162B',
    marginTop:wp('2')
  },
  calendar: {
    marginTop: wp('2'),
    fontSize: wp('3'),
    color: '#353B50',
    position: 'absolute',
  },
  time: {
    marginTop: wp('2'),
    fontSize: wp('3'),
    color: '#353B50',
    position: 'absolute',
    marginLeft: wp('20'),
  },
  day: {
    marginTop: wp('2'),
    fontSize: wp('3'),
    color: '#353B50',
    marginLeft: wp('40'),
  },
  center: {
    width: wp('70'),
    alignSelf:'flex-end',  
  },
  
});
export default ItemImage;
