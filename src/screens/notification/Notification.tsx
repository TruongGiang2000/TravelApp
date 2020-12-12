import React, {Component} from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import {translate} from '../../util/translate';
import {dateFormat} from '../../util/dateFormatAgo';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import ItemNotification from './modules/ItemNotification';
import {withPages} from '../../util/withPages';
import ItemUser from '../user/modules/ItemUser';
import moment from 'moment';
import {connect} from 'react-redux';
class Notification extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      dataDummy: [
        {
          src: require('..//..//assets/images/vali.png'),
          title: 'Chúc mừng bạn vừa đạt được thành tích',
          date: moment('10/4/2020 14:02'),
        },
        {
          src: require('..//..//assets/images/airplane.png'),
          title: 'Chúc mừng bạn vừa đạt được thành tích',
          date: moment('10/6/2020 23:41:20'),
        },
        {
          src: require('..//..//assets/images/shipp.png'),
          title: 'Chúc mừng bạn vừa đạt được thành tích',
          date: moment('10/5/2020 12:22'),
        },
        {
          src: require('..//..//assets/images/logo_nobg.png'),
          title:
            'Tạo tài khoản thành công, Bắt đầu du lịch cùng Stravel nào !!!',
          date: moment('8/24/2020 00:58'),
        },
      ],
    };
  }
  renderItem = ({item, index}) => {
    const {dataDummy} = this.state;
    let isLine = index === dataDummy.length - 1;
    let isShow = index == dataDummy.length - 1;

    return (
      <View>
        <ItemNotification
          style={[
            styles.itemNotifi,
            {backgroundColor: isShow ? '#fff' : '#fff5f5'},
          ]}
          source={item.src}
          title={item.title}
          calendar={moment(item.date).format('DD/MM/yyyy')}
          time={moment(item.date).format('HH:mm:00')}
          day={dateFormat(item.date)}
          isShow={isShow ? true : undefined}
          titlebutton={translate('start')}
          size={isShow ? wp('8') : undefined}
        />
        {!isLine && <View style={[styles.line, {width: wp('85')}]} />}
      </View>
    );
  };
  render() {
    const {userInfo} = this.props;
    return (
      <View style={styles.MainContainer}>
        <View style={styles.header}>
          <Text style={styles.titleheader}>{translate('nofitication')}</Text>
          <ItemUser
            core="1000"
            name={userInfo?.Name || 'Unknown'}
            source={require('../../assets/images/Bitmap.png')}
          />
        </View>
        <View style={styles.line} />
        <FlatList
          data={this.state.dataDummy}
          renderItem={this.renderItem}
          extraData={this.props.language}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: hp('1'),
    paddingHorizontal: wp('4'),
    backgroundColor: '#fff',
  },
  titleheader: {
    color: '#323b45',
    fontFamily: 'roboto-slab-bold',
    fontSize: wp('4.5'),
  },
  content: {
    paddingBottom: hp('1'),
  },
  viewitem: {
    width: wp('90'),
    alignSelf: 'center',
    marginTop: wp('2'),
    backgroundColor: '#fff5f5',
  },
  line: {
    height: 0.5,
    backgroundColor: '#323b45',
    width: wp('100'),
    alignSelf: 'center',
  },
  itemNotifi: {
    paddingTop: hp('2'),
    paddingBottom: hp('0.8'),
    paddingHorizontal: wp('3.8'),
  },
});
const mapStateFromProps = (state: any) => {
  return {
    userInfo: state.auth.userInfo,
  };
};
export default connect(mapStateFromProps, null)(withPages(Notification));
