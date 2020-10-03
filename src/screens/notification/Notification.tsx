import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {translate} from '../../components/translate';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import ItemUserNotification from './modules/ItemUserNotification';
import ItemNotification from './modules/ItemNotification';
import ItemUser from '../user/modules/ItemUser'
class Notification extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.MainContainer}>
        <View style={styles.toolbar}>
          <View style={styles.viewtitle}>
      <Text style={styles.titleheader}>{translate('nofitication')}</Text>
      </View>
      <View style={styles.viewUser}>
      <ItemUserNotification
        core="1000"
        title="Nguyễn Trung Kiên"
        source={require('../../assets/images/s_coin.png')}
        
      />
      </View>
      </View>
      <View style={{height: hp('0.1'), backgroundColor: '#000'}}/>
      <View style={styles.content}>
        <View style={styles.viewitem}>
      <ItemNotification
        source={require('../../assets/images/angiang.jpg')}
        title="chúc mừng bạn vừa đạt được thành tích "
        calendar="11/09/2000"
        day="3 ngày trước"
        time="10:30"
        titlebutton="đúng rồi"
        />
         <View style={{height: hp('0.1'), marginTop: wp('1'), backgroundColor: '#000'}}/>
        </View>
        <View style={styles.viewitem}>
      <ItemNotification
        source={require('../../assets/images/angiang.jpg')}
        title="chúc mừng bạn vừa đạt được thành tích "
        calendar="11/09/2000"
        day="3 ngày trước"
        time="10:30"
        isShow={true}
        titlebutton="đúng rồi"
        />
        </View>
        </View>
        </View>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    width: '100%',
    height: '100%',
  },
  toolbar:{
    width: '100%',
    height: wp('16'),
  },
  viewtitle:{
    width: '50%',
    position: 'absolute',
  },
  viewUser:{
    width: '50%',
    marginLeft: wp('50'),
    marginTop: wp('3',),
    
  },
  titleheader:{
    marginTop: wp('5'),
    color: '#323b45',
    fontFamily: 'roboto-slab-bold',
    fontSize: wp('5'),
    textAlign: "center",
  },
  content:{
    width: '100%',
    height: '100%',
  },
  viewitem:{
    width: wp('90'),
    alignSelf: "center",
    marginTop: wp('2'),
    backgroundColor: '#fff5f5',

  },
});
export default Notification;
