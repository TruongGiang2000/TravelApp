import React, {Component} from 'react';
import {View, StyleSheet, Text, Pressable, ScrollView} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import ButtonCustom from '../../../components/ButtonCustom';
import Fontisto from 'react-native-vector-icons/Fontisto';
import DatePicker from 'react-native-datepicker';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import moment from 'moment';
import CustomModal from 'react-native-modal';
import ModalChooseNumber from './ModalChooseNumber';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import Octicons from 'react-native-vector-icons/Octicons';
import shawdow from '../../../util/shadow';
import {translate} from '../../../util/translate';
class HotelSearching extends Component<any, any> {
  constructor(props) {
    super(props);
    const {
      date,
      room,
      adult,
      child,
      minValue,
      maxValue,
      moneyStart,
      moneyEnd,
    } = this.props;
    this.state = {
      date: date,
      isShowModal: false,
      moneyStart: moneyStart,
      moneyEnd: moneyEnd,
      room: room,
      adult: adult,
      child: child,
      keyShowModal: '',
      minValue: minValue,
      maxValue: maxValue,
    };
  }
  selectDate = (date: Date) => {
    this.setState({date: date});
  };
  showModal = (keyShowModal: string) => {
    this.setState({isShowModal: true, keyShowModal});
  };
  hideModal = () => {
    this.setState({isShowModal: false});
  };
  formatMoney = (money: number) => {
    let moneyFormat = '';
    moneyFormat = money.toLocaleString('vi', {
      style: 'currency',
      currency: 'VND',
    });
    return moneyFormat;
  };
  onItemChange = (value) => {
    const {keyShowModal} = this.state;
    switch (keyShowModal) {
      case 'room':
        this.setState({room: value});
        this.hideModal();
        return;
      case 'passengerAdult':
        this.setState({adult: value});
        this.hideModal();
        return;
      case 'passengerChild':
        this.setState({child: value});
        this.hideModal();
        return;
      default:
        return null;
    }
  };
  setAgain = () => {
    this.setState({
      date: moment(),
      moneyStart: 0,
      moneyEnd: 10000000,
      room: 1,
      adult: 1,
      child: 1,
      minValue: 0,
      maxValue: 1,
    });
  };
  onChangeValue = (value: any) => {
    const moneyStart = 10000000 * value[0];
    const moneyEnd = 10000000 * value[1];
    this.setState({
      moneyStart,
      moneyEnd,
      minValue: value[0],
      maxValue: value[1],
    });
  };
  render() {
    const {
      date,
      isShowModal,
      moneyStart,
      moneyEnd,
      room,
      adult,
      child,
      minValue,
      maxValue,
    } = this.state;
    return (
      <View style={styles.MainContainer}>
        <ScrollView style={styles.viewTop}>
          <View style={styles.rowHeader}>
            <Pressable
              onPress={() =>
                this.props.onBackSpacePress(
                  date,
                  room,
                  adult,
                  child,
                  minValue,
                  maxValue,
                  moneyStart,
                  moneyEnd,
                )
              }>
              <MaterialIcon
                name={'keyboard-backspace'}
                size={wp('7')}
                color={'#000'}
              />
            </Pressable>
            <Text style={styles.title}>{translate('hotelSearching')}</Text>
            <Text></Text>
          </View>
          <Text style={styles.titlePart}>{translate('information')}</Text>
          <View style={styles.contentInformation}>
            <View style={styles.viewRowSpaceBetween}>
              <View style={styles.viewRow}>
                <Fontisto
                  name={'date'}
                  size={wp('6')}
                  color={'#1A1919'}
                  style={{marginTop: wp('2')}}
                />
                <View style={[styles.contentColumn, {marginLeft: wp('2')}]}>
                  <Text style={styles.titleEachField}>
                    {translate('checkin')}
                  </Text>
                  <Text style={styles.contentEachField}>
                    {moment(date).format('DD MMM, YYYY')}
                  </Text>
                </View>
                <DatePicker
                  hideText={true}
                  showIcon={false}
                  date={this.state.date}
                  onDateChange={this.selectDate}
                  mode={'date'}
                  style={{
                    with: '100%',
                    height: '100%',
                    position: 'absolute',
                  }}
                />
              </View>
              <Pressable
                style={styles.viewRow}
                onPress={() => this.showModal('room')}>
                <View style={[styles.contentColumn, {marginRight: wp('4')}]}>
                  <Text style={styles.titleEachField}>{translate('room')}</Text>
                  <Text style={styles.contentEachField}>{room}</Text>
                </View>
                <Fontisto
                  name={'angle-down'}
                  size={wp('3.5')}
                  color={'#ffffff'}
                  style={styles.arrowDown}
                />
              </Pressable>
            </View>
            <View style={[styles.viewRowSpaceBetween, {marginTop: hp('2')}]}>
              <Pressable
                style={styles.viewRow}
                onPress={() => this.showModal('passengerAdult')}>
                <View style={[styles.contentColumn, {marginRight: wp('4')}]}>
                  <Text style={styles.titleEachField}>
                    {translate('passenger')}
                  </Text>
                  <Text style={styles.contentEachField}>{`${adult} ${translate(
                    adult > 1 ? 'adults' : 'adult',
                  )}`}</Text>
                </View>
                <Fontisto
                  name={'angle-down'}
                  size={wp('3.5')}
                  color={'#ffffff'}
                  style={styles.arrowDown}
                />
              </Pressable>
              <Pressable
                style={styles.viewRow}
                onPress={() => this.showModal('passengerChild')}>
                <View style={[styles.contentColumn, {marginRight: wp('4')}]}>
                  <Text style={styles.titleEachField}>
                    {translate('passenger')}
                  </Text>
                  <Text style={styles.contentEachField}>
                    {`${child} ${translate(child > 1 ? 'children' : 'child')}`}
                  </Text>
                </View>
                <Fontisto
                  name={'angle-down'}
                  size={wp('3.5')}
                  color={'#ffffff'}
                  style={styles.arrowDown}
                />
              </Pressable>
            </View>
          </View>
          <Text style={[styles.titlePart, {marginTop: hp('4')}]}>
            {translate('price')}
          </Text>
          <View style={[styles.viewRowSpaceBetween, {marginTop: hp('2')}]}>
            <Text style={styles.textPrice}>đ0</Text>
            <Text style={styles.textPrice}>đ10.000.000</Text>
          </View>
          <MultiSlider
            trackStyle={styles.trackStyle}
            selectedStyle={{backgroundColor: '#FA2A20'}}
            allowOverlap={false}
            containerStyle={{alignSelf: 'center', marginHorizontal: wp('1')}}
            snapped={true}
            values={[minValue, maxValue]}
            max={1}
            minMarkerOverlapDistance={wp('8')}
            sliderLength={wp('80')}
            step={0.01}
            isMarkersSeparated={true}
            onValuesChange={(value) => this.onChangeValue(value)}
            customMarkerLeft={(e) => {
              return (
                <Octicons
                  style={styles.iconCircleActive}
                  name={'primitive-dot'}
                  color={'#FA2A20'}
                  size={wp('6')}
                />
              );
            }}
            customMarkerRight={(e) => {
              return (
                <Octicons
                  style={styles.iconCircleActive}
                  name={'primitive-dot'}
                  color={'#FA2A20'}
                  size={wp('6')}
                />
              );
            }}
          />
          <View style={styles.viewRow}>
            <Text style={styles.price}>{`${translate('price_from')}: `}</Text>
            <Text style={[styles.price, {fontFamily: 'roboto-slab-bold'}]}>
              {`${this.formatMoney(moneyStart)} - ${this.formatMoney(
                moneyEnd,
              )}`}
            </Text>
          </View>
        </ScrollView>
        <View style={styles.viewBottom}>
          <ButtonCustom
            style={styles.styleButton}
            title={translate('find')}
            titleStyle={styles.titleButtonStyle}
          />
          <Pressable onPress={this.setAgain}>
            <Text style={styles.set_again}>{translate('set_again')}</Text>
          </Pressable>
        </View>
        <CustomModal isVisible={isShowModal} onBackdropPress={this.hideModal}>
          {isShowModal && (
            <ModalChooseNumber onItemChange={this.onItemChange} />
          )}
        </CustomModal>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingBottom: hp('3'),
    paddingTop: hp('1.5'),
    paddingHorizontal: wp('6'),
  },
  rowHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  viewTop: {
    flex: 1,
  },
  title: {
    color: '#323B45',
    fontFamily: 'roboto-slab-bold',
    fontSize: wp('4'),
  },
  titlePart: {
    color: '#323B45',
    fontFamily: 'roboto-slab-bold',
    fontSize: wp('4'),
    marginTop: hp('2'),
  },
  viewBottom: {
    justifyContent: 'flex-end',
  },
  titleButtonStyle: {
    fontSize: wp('4'),
  },
  styleButton: {
    paddingVertical: hp('2'),
  },
  set_again: {
    fontSize: wp('3.8'),
    fontFamily: 'roboto-slab-bold',
    color: '#323B45',
    marginTop: wp('3'),
    alignSelf: 'center',
  },
  contentInformation: {
    paddingHorizontal: wp('4'),
  },
  viewRowSpaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  viewRow: {
    flexDirection: 'row',
    alignItems: 'center',
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
  arrowDown: {
    padding: wp('2'),
    backgroundColor: '#353B50',
    borderRadius: wp('2'),
    marginTop: wp('2'),
  },
  textPrice: {
    fontFamily: 'roboto-slab.regular',
    fontSize: wp('3.6'),
    color: '#353B50',
    opacity: 0.5,
  },
  iconCircleActive: {
    backgroundColor: '#ffffff',
    paddingHorizontal: wp('1.5'),
    borderRadius: 30,
    ...shawdow(4),
  },
  trackStyle: {
    width: '100%',
    height: 6,
    borderRadius: 10,
    backgroundColor: '#E0E6EE',
  },
  price: {
    fontFamily: 'roboto-slab.regular',
    fontSize: wp('3.8'),
    color: '#323B45',
  },
});
export default HotelSearching;
