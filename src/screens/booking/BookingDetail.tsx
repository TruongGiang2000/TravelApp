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
import shadow from '../../components/shadow';
import ModalSuccessfull from './modules/ModalSuccsessfull';
import {translate} from '../../components/translate';
import {withPages} from '../../components/withPages';
class BookingDetail extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false,
    };
  }
  onBack = () => {
    this.props.navigation.goBack();
  };
  showModalSuccessfully = () => {
    this.setState({isShow: true});
  };
  onClose = () => {
    this.setState({isShow: false});
  };
  render() {
    const {isShow} = this.state;
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
                <Text style={styles.namehotel}>BB vila Vũng tàu</Text>
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
                  source={require('../../assets/images/angiang.jpg')}
                  style={styles.image}
                />
              </View>
            </View>
            <View style={styles.viewLine} />
            <Text style={[styles.address]}>
              Số 03 Đường Huỳnh Thúc Kháng, Phường 4, Thành phố Đà Lạt, Lâm Đồng
              66000
            </Text>
            <View style={styles.viewLine} />
            <RowCustom
              style={styles.rowCustom}
              title={translate('takeroom')}
              content="Th6/04/09/2020"
            />
            <View style={styles.viewLine} />
            <RowCustom
              style={styles.rowCustom}
              title={translate('payroom')}
              content="CN/02/09/2020"
            />
            <View style={styles.viewLine} />
            <RowCustom
              style={styles.rowCustom}
              title={translate('nightnumber')}
              content="2 đêm, 1 phòng"
            />
            <View style={styles.viewLine} />
            <RowCustom
              style={styles.rowCustom}
              title={translate('standardroompillowbed')}
              content="VNĐ 4.017.033"
              styleContent={styles.priceStandRoom}
              styleTitle={styles.standRoom}
            />
            <RowCustom
              title={translate('taxesandfees')}
              content="+VNĐ 477.967"
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
              content="-VNĐ 400.000"
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
            content="VNĐ 4.095.000"
            styleContent={styles.finalPrice}
            styleTitle={styles.finalPrice}
          />
          <View style={styles.viewSpaceWhite} />
        </ScrollView>

        <View style={[styles.footer]}>
          <View>
            <Text style={styles.priceFooter}>đ1.000.000</Text>
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
export default withPages(BookingDetail);
