import React, {Component} from 'react';
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  FlatList,
  Pressable,
  ToastAndroid,
} from 'react-native';
import Kindofroom from '../home/modules/kindofroom';
import {translate} from '../../util/translate';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {connect} from 'react-redux';
import {hotels} from '../../redux';
import {actionMain} from '../../util/mainActions';
import DatePicker from 'react-native-datepicker';
import moment from 'moment';
import Fontisto from 'react-native-vector-icons/Fontisto';
import shadow from '../../util/shadow';
class ChooseRoom extends Component<any, any> {
  constructor(prop) {
    super(prop);
    this.state = {
      idHotel: this.props.route.params.idHotel,
      imageHotel: this.props.route.params.imageHotel,
      startDate: moment(),
      endDate: moment().add(1, 'days'),
    };
  }
  componentDidMount() {
    actionMain.loading(true);
    this.props.getTypeRoomByHol(this.state.idHotel);
  }
  onPressItem = (item) => () => {
    if (!this.props.token) {
      this.props.navigation.navigate('User');
      return;
    }
    const {startDate, endDate} = this.state;
    this.props.navigation.navigate('CustomerForm', {
      item,
      startDate: startDate,
      endDate: endDate,
    });
  };
  selecStarttDate = (date: Date) => {
    const {endDate} = this.state;
    let subDay = +moment(endDate).diff(date, 'days');
    this.setState({startDate: date});
    if (subDay < 0) {
      this.setState({endDate: moment(date).add(1, 'days')});
    }
  };
  selectEndDate = (date: Date) => {
    const {startDate} = this.state;
    let subDay = +moment(date).diff(startDate, 'days');
    if (subDay <= 0) {
      ToastAndroid.show(translate('description_fail_date'), ToastAndroid.SHORT);
      return;
    }
    this.setState({endDate: date});
  };
  componentDidUpdate() {}
  renderItem = ({item}) => (
    <Kindofroom
      source={{uri: item.Images[0]}}
      size={`${item.Acreage}m2`}
      bed={item.vi.Bed}
      amount={item.People}
      title={item.vi.Name}
      policy={translate('policy_cancel')}
      quantum={translate('desc_empty_room').format(item.Empty_Room)}
      internet={translate('free_internet')}
      iconinternet={require('../../assets/images/shape.png')}
      isShow={true}
      containerStyle={{marginTop: hp('-10')}}
      onPress={this.onPressItem(item)}
    />
  );
  render() {
    const {typeRoom} = this.props;
    const {imageHotel, startDate, endDate} = this.state;
    return (
      <ImageBackground
        source={{uri: imageHotel}}
        style={styles.ImageBackground}>
        <View style={styles.container}>
          <Pressable
            style={styles.Icon}
            onPress={() => this.props.navigation.goBack()}>
            <MaterialIcon
              name={'keyboard-backspace'}
              size={wp('7')}
              color={'#000'}
            />
          </Pressable>

          <FlatList
            data={typeRoom}
            renderItem={this.renderItem}
            horizontal={true}
          />

          <View style={styles.title}>
            <View style={styles.viewRowContainer}>
              <View style={styles.viewRow}>
                <Fontisto
                  name={'date'}
                  size={wp('6')}
                  color={'#1A1919'}
                  style={{marginTop: wp('2')}}
                />
                <View style={[styles.contentColumn, {marginLeft: wp('2')}]}>
                  <Text style={styles.titleEachField}>
                    {translate('start_date')}
                  </Text>
                  <Text style={styles.contentEachField}>
                    {moment(startDate).format('DD MMM, YYYY')}
                  </Text>
                </View>
                <DatePicker
                  hideText={true}
                  showIcon={false}
                  date={startDate}
                  onDateChange={this.selecStarttDate}
                  mode={'date'}
                  style={{
                    with: '100%',
                    height: '100%',
                    position: 'absolute',
                  }}
                  minDate={moment()}
                />
              </View>
              <View style={styles.viewRow}>
                <Fontisto
                  name={'date'}
                  size={wp('6')}
                  color={'#1A1919'}
                  style={{marginTop: wp('2')}}
                />
                <View style={[styles.contentColumn, {marginLeft: wp('2')}]}>
                  <Text style={styles.titleEachField}>
                    {translate('end_date')}
                  </Text>
                  <Text style={styles.contentEachField}>
                    {moment(endDate).format('DD MMM, YYYY')}
                  </Text>
                </View>
                <DatePicker
                  hideText={true}
                  showIcon={false}
                  date={endDate}
                  onDateChange={this.selectEndDate}
                  mode={'date'}
                  style={{
                    with: '100%',
                    height: '100%',
                    position: 'absolute',
                  }}
                  minDate={moment().add(1, 'days')}
                />
              </View>
            </View>
            <Text style={styles.NumberTyperoom}>
              {translate('numbertyperoom').format(typeRoom?.length)}
            </Text>
          </View>
        </View>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  ImageBackground: {
    width: '100%',
    height: '100%',
  },
  NameTypeRoom: {
    fontFamily: 'roboto-slab-bold',
    fontSize: wp('8'),
    color: '#FFFFFF',
  },
  NumberTyperoom: {
    color: '#FFFFFF',
    fontSize: wp('5'),
    fontFamily: 'roboto-slab-bold',
  },
  Icon: {
    alignSelf: 'flex-start',
    marginLeft: wp('2'),
  },
  title: {
    marginTop: hp('2'),
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: hp('3'),
  },
  viewRowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#cccccc',
    paddingHorizontal: wp('4'),
    paddingVertical: hp('1'),
    ...shadow(4),
    marginBottom: hp('1'),
  },
  viewRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: wp('5'),
  },
  contentColumn: {
    marginTop: wp('2'),
    justifyContent: 'center',
  },
  titleEachField: {
    fontFamily: 'roboto-slab.regular',
    fontSize: wp('3'),
    color: '#353B50',
    opacity: 0.5,
  },
  contentEachField: {
    fontFamily: 'roboto-slab.regular',
    fontSize: wp('3.6'),
    color: '#353B50',
  },
});
const mapStateFromProps = (state: any) => {
  return {
    typeRoom: state.hotel.typeRoom,
    token: state.auth.token,
  };
};
export default connect(mapStateFromProps, hotels)(ChooseRoom);
