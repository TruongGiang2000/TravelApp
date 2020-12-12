import React, {Component} from 'react';
import {StyleSheet, Pressable, View, Text, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import ButtonCustom from '../../components/ButtonCustom';
import StarRating from 'react-native-star-rating';
import RowCustom from './modules/RowCustom';
import Header from './modules/HeaderStep';
import {ScrollView} from 'react-native-gesture-handler';
import ModalCustom from 'react-native-modal';
import shadow from '../../util/shadow';
import ModalSuccessfull from './modules/ModalSuccsessfull';
import {translate} from '../../util/translate';
import {withPages} from '../../util/withPages';
import {connect} from 'react-redux';
import {hotels} from '../../redux';
import {actionMain} from '../../util/mainActions';
class BookingDetail extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false,
      dataBooking: this.props.route.params.dataBooking,
    };
  }
  componentDidMount() {
    const {dataBooking} = this.state;
    const {dataRoom} = dataBooking;
    actionMain.loading(true);
    this.props.getHotelById(dataRoom.ID_Hotel);
  }
  onBack = () => {
    this.props.navigation.goBack();
  };
  showModalSuccessfully = () => {
    const {dataBooking} = this.state;
    const {dataRoom} = dataBooking;
    const {token} = this.props;
    const dataBookingFinal = {
      ID_Room: dataRoom._id,
      Token: token,
      User_Name: dataBooking?.lastName + dataBooking?.name,
      Phone: dataBooking?.phone,
      Identity_Card: dataBooking?.idCard,
      Price: dataRoom?.Price + (dataRoom?.Price * 10) / 100,
      Booking_Date: dataBooking?.startDate,
      Check_Out_Date: dataBooking?.endDate,
      Booking_Status: 'booking',
    };
    this.props.booking(dataBookingFinal);
    this.setState({isShow: true});
  };
  onClose = () => {
    this.setState({isShow: false});
  };
  render() {
    const {isShow, dataBooking} = this.state;
    const {hotelById, language} = this.props;
    let isVi = language == 'vi';
    const {dataRoom} = dataBooking;
    console.log('dataBooking', dataBooking);
    let nights = +dataBooking.endDate.diff(dataBooking.startDate, 'days');
    console.log('nights', nights);
    return (
      <View style={[styles.MainContainer, this.props.style]}>
        <ScrollView>
          <Header
            currentPosition={2}
            title={translate('bookingdetail')}
            navigation={this.props.navigation}
          />
          <View style={styles.viewLine} />
          <View style={styles.content}>
            <View style={styles.viewRowTopContent}>
              <View>
                <Text style={styles.namehotel}>
                  {isVi ? hotelById?.vi?.Name : hotelById?.en?.Name}
                </Text>
                <StarRating
                  containerStyle={styles.starRating}
                  disabled={false}
                  maxStars={5}
                  rating={4}
                  fullStarColor={'#F0C909'}
                  starSize={hp('2.5')}
                />
                <ButtonCustom
                  title={translate('secretdeal')}
                  style={styles.buttonSecret}
                  titleStyle={styles.secretText}
                />
              </View>
              <View style={[styles.image, {...shadow(10)}]}>
                <Image
                  source={{uri: hotelById?.Images ? hotelById.Images[0] : ''}}
                  style={styles.image}
                />
              </View>
            </View>
            <View style={styles.viewLine} />
            <Text style={[styles.address]}>
              {isVi ? hotelById?.vi?.Address : hotelById?.en?.Address}
            </Text>
            <View style={styles.viewLine} />
            <RowCustom
              style={styles.rowCustom}
              title={translate('takeroom')}
              content={dataBooking.startDate.format('ddd/DD/MM/YYYY')}
            />
            <View style={styles.viewLine} />
            <RowCustom
              style={styles.rowCustom}
              title={translate('payroom')}
              content={dataBooking.endDate.format('ddd/DD/MM/YYYY')}
            />
            <View style={styles.viewLine} />
            <RowCustom
              style={styles.rowCustom}
              title={translate('nightnumber')}
              content={translate(nights > 1 ? 'nights' : 'night').format(
                nights,
              )}
            />
            <View style={styles.viewLine} />
            <RowCustom
              style={styles.rowCustom}
              title={
                isVi
                  ? `${dataRoom?.vi?.Name} ${dataRoom?.vi?.Bed}`
                  : `${dataRoom?.en?.Name} ${dataRoom?.en?.Bed}`
              }
              content={`VNĐ ${dataRoom?.Price}`}
              styleContent={styles.priceStandRoom}
              styleTitle={styles.standRoom}
            />
            <RowCustom
              title={translate('taxesandfees')}
              content={`+VNĐ ${(dataRoom?.Price * 10) / 100}`}
              styleContent={[
                styles.standRoom,
                {fontFamily: 'roboto-slab.regular'},
              ]}
              styleTitle={[
                styles.standRoom,
                {fontFamily: 'roboto-slab.regular'},
              ]}
            />
            <RowCustom
              style={styles.rowCustom}
              title={translate('totalincentives')}
              content="-VNĐ 0"
              styleContent={[
                styles.standRoom,
                {fontFamily: 'roboto-slab.regular', color: '#00B92A'},
              ]}
              styleTitle={[
                styles.standRoom,
                {fontFamily: 'roboto-slab.regular', color: '#00B92A'},
              ]}
            />
          </View>
          <RowCustom
            style={styles.customRowGreen}
            title={translate('finalprice')}
            content={`VNĐ ${dataRoom?.Price + (dataRoom?.Price * 10) / 100}`}
            styleContent={styles.finalPrice}
            styleTitle={styles.finalPrice}
          />
          <View style={styles.viewSpaceWhite} />
        </ScrollView>

        <View style={[styles.footer]}>
          <View>
            <Text style={styles.priceFooter}>{`đ ${
              dataRoom?.Price + (dataRoom?.Price * 10) / 100
            }`}</Text>
            <Text style={styles.taxesAndFee}>
              {translate('includingtaxesandfees')}
            </Text>
          </View>
          <ButtonCustom
            style={styles.buttonFooter}
            title={translate('booknow')}
            titleStyle={{fontSize: wp('4')}}
            onPress={this.showModalSuccessfully}
          />
        </View>
        <ModalCustom isVisible={isShow} onBackdropPress={this.onClose}>
          <ModalSuccessfull onPressClose={this.onClose} show={isShow} />
        </ModalCustom>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: '#DFDFDF',
  },
  viewLine: {
    backgroundColor: '#E0E6EE',
    height: 1,
  },
  title: {
    fontFamily: 'roboto-slab-bold',
    color: '#00162b',
    fontSize: wp('4'),
  },
  viewRowTopContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: hp('2'),
  },
  content: {
    backgroundColor: '#fff',
    paddingHorizontal: wp('4'),
  },
  starRating: {
    marginVertical: wp('1.5'),
    width: wp('30'),
  },
  image: {
    width: wp('22'),
    marginRight: wp('5'),
    height: hp('12'),
    borderRadius: wp('2'),
  },
  rowCustom: {
    marginVertical: hp('1.5'),
  },
  footer: {
    height: hp('10'),
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  titlefooter: {
    color: '#585858',
    fontSize: wp('3.5'),
    fontFamily: 'roboto-slab-bold',
  },
  namehotel: {
    fontFamily: 'roboto-slab-bold',
    fontSize: wp('5'),
    color: '#323b45',
  },
  address: {
    fontSize: wp('3.6'),
    fontFamily: 'roboto-slab.regular',
    color: '#00162B',
    marginVertical: hp('1.5'),
  },
  styleStep: {
    width: wp('30'),
  },
  buttonSecret: {
    width: wp('25'),
    paddingHorizontal: 0,
    paddingVertical: wp('1'),
  },
  secretText: {
    fontSize: wp('3.4'),
    fontWeight: '400',
  },
  standRoom: {
    fontSize: wp('3.8'),
    fontFamily: 'roboto-slab-bold',
    color: '#323B45',
  },
  priceStandRoom: {
    fontSize: wp('3.8'),
    fontFamily: 'roboto-slab-bold',
  },
  customRowGreen: {
    paddingHorizontal: wp('4'),
    paddingVertical: hp('2'),
    backgroundColor: '#009110',
  },
  finalPrice: {
    fontSize: wp('4'),
    color: '#fff',
    fontFamily: 'roboto-slab-bold',
  },
  viewSpaceWhite: {
    backgroundColor: '#ffffff',
    height: hp('2'),
  },
  priceFooter: {
    fontFamily: 'roboto-slab-bold',
    fontSize: wp('3.7'),
    color: '#323B45',
  },
  taxesAndFee: {
    color: '#585858',
    fontFamily: 'roboto-slab-bold',
    fontSize: wp('3.7'),
  },
  buttonFooter: {
    paddingHorizontal: wp('15'),
    paddingVertical: hp('2'),
  },
});
const mapStateFromProps = (state: any) => {
  return {
    hotelById: state.hotel.hotelById,
    token: state.auth.token,
  };
};
export default connect(mapStateFromProps, hotels)(withPages(BookingDetail));
