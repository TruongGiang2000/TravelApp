import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import ButtonCustom from '../../../components/CustomButton';
import TraTe from '../../../components/TraTe';
import Fontisto from 'react-native-vector-icons/Fontisto';
import DatePicker from 'react-native-datepicker';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import moment from 'moment';
import CustomModal from 'react-native-modal';
import ModalChooseNumber from './ModalChooseNumber';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import Octicons from 'react-native-vector-icons/Octicons';
import shawdow from '../../../components/shadow';
import NumberFormat from 'react-number-format';
class HotelSeacrhing extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      date: moment(),
      isShowModal: false,
      moneyStart: 0,
      moneyEnd: 10000000,
    };
  }
  selectDate = (date) => {
    this.setState({date: date});
  };
  showModal = () => {
    this.setState({isShowModal: true});
  };
  hideModal = () => {
    this.setState({isShowModal: false});
  };
  formatMoney = (money: number) => {
    let moneyFinal = '';
    moneyFinal =
      money.toString().slice(0, 4) +
      ',' +
      money.toString().slice(4, money.toString.length);
    return moneyFinal;
  };
  render() {
    const {date, isShowModal, moneyStart, moneyEnd} = this.state;
    return (
      <View style={styles.MainContainer}>
        <ScrollView style={styles.viewTop}>
          <View style={styles.rowHeader}>
            <TouchableOpacity onPress={this.props.onBackSpacePress}>
              <MaterialIcon
                name={'keyboard-backspace'}
                size={wp('7')}
                color={'#000'}
              />
            </TouchableOpacity>
            <TraTe i18nKey={'hotelSearching'} style={styles.title} />
            <Text></Text>
          </View>
          <TraTe style={styles.titlePart} i18nKey={'information'} />
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
                  <TraTe style={styles.titleEachField} i18nKey={'checkin'} />
                  <Text style={styles.contentEachField}>
                    {moment(date).format('DD MMM, YYYY')}
                  </Text>
                </View>
                <DatePicker
                  hideText={true}
                  showIcon={false}
                  format="DD/MM/yyyy"
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
              <TouchableOpacity style={styles.viewRow} onPress={this.showModal}>
                <View style={[styles.contentColumn, {marginRight: wp('4')}]}>
                  <TraTe style={styles.titleEachField} i18nKey={'room'} />
                  <Text style={styles.contentEachField}>1</Text>
                </View>
                <Fontisto
                  name={'angle-down'}
                  size={wp('3.5')}
                  color={'#ffffff'}
                  style={styles.arrowDown}
                />
              </TouchableOpacity>
            </View>
            <View style={[styles.viewRowSpaceBetween, {marginTop: hp('2')}]}>
              <TouchableOpacity style={styles.viewRow} onPress={this.showModal}>
                <View style={[styles.contentColumn, {marginRight: wp('4')}]}>
                  <TraTe style={styles.titleEachField} i18nKey={'passenger'} />
                  <View style={{flexDirection: 'row'}}>
                    <Text style={styles.contentEachField}>{'1 '}</Text>
                    <TraTe style={styles.contentEachField} i18nKey={'adult'} />
                  </View>
                </View>
                <Fontisto
                  name={'angle-down'}
                  size={wp('3.5')}
                  color={'#ffffff'}
                  style={styles.arrowDown}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.viewRow} onPress={this.showModal}>
                <View style={[styles.contentColumn, {marginRight: wp('4')}]}>
                  <TraTe style={styles.titleEachField} i18nKey={'passenger'} />
                  <View style={{flexDirection: 'row'}}>
                    <Text style={styles.contentEachField}>{'1 '}</Text>
                    <TraTe style={styles.contentEachField} i18nKey={'child'} />
                  </View>
                </View>
                <Fontisto
                  name={'angle-down'}
                  size={wp('3.5')}
                  color={'#ffffff'}
                  style={styles.arrowDown}
                />
              </TouchableOpacity>
            </View>
          </View>
          <TraTe
            style={[styles.titlePart, {marginTop: hp('4')}]}
            i18nKey={'price'}
          />
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
            values={[0, 1]}
            max={1}
            minMarkerOverlapDistance={wp('10')}
            sliderLength={wp('80')}
            step={0.01}
            isMarkersSeparated={true}
            customMarkerLeft={(e) => {
              console.log('e', e);
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
            <TraTe style={styles.price} i18nKey={'price_from'}>
              {': '}
            </TraTe>
            <Text style={[styles.price, {fontFamily: 'roboto-slab-bold'}]}>
              {`đ${moneyStart} - đ${this.formatMoney(moneyEnd)}`}
            </Text>
          </View>
        </ScrollView>
        <View style={styles.viewBottom}>
          <ButtonCustom
            style={styles.styleButton}
            title={'find'}
            titleStyle={styles.titleButtonStyle}
          />
          <TouchableOpacity>
            <TraTe style={styles.set_again} i18nKey={'set_again'} />
          </TouchableOpacity>
        </View>
        <CustomModal isVisible={isShowModal} onBackdropPress={this.hideModal}>
          {isShowModal && <ModalChooseNumber />}
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
export default HotelSeacrhing;
