import React, {Component} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  CheckBox,
  Image,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import TraTe from '../components/TraTe';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import InputComponent from './modules/InputComponent';
import ButtonCustom from '../components/ButtonCustom';
import ItemImage from '../components/ItemImage';
import StarRating from 'react-native-star-rating';
import { elementAt } from 'rxjs/operators';
import PaddingComponent from './modules/PaddingComponent';
class BookingDetail extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  onStarRatingPress(rating) {
    this.setState({
      starCount: rating,
    });
  }
  render() {
    const {titleStyle, onPress} = this.props;
    return (
      <TouchableOpacity
        style={[styles.MainContainer, this.props.style]}
        >
          <View style={[styles.header]}>
          <View style={[styles.arrowleft]}>
          <Icon name="arrowleft" size={27} color="#000" />
        </View>
          <TraTe
            style={[styles.title]}
            i18nKey="bookingdetail"/>
          </View>
          <View style={{backgroundColor: '#000', height: hp('0.1')}}/>
          <View style={styles.content}>
            <View style={{height: hp('20')}}>
            <Text style={[styles.namehotel]}>BB vila Vũng tàu</Text>
            <View style={{width: wp('40'), top: wp('5')}}>
            <StarRating
              disabled={false}
              maxStars={5}
              rating={4}
              selectedStar={(rating) => this.onStarRatingPress(rating)}
              fullStarColor={'#F0C909'}
              starSize={hp('3')}
            />
            </View>
            <ButtonCustom
            title="secretdeal"
            style={{height: hp('4'), width: wp('35'), top: wp('6'),justifyContent: 'center'}}
            titleStyle={{fontSize: wp('4'), fontFamily: 'Roboto-Slab'}}
            />
              <Image
                source={require('../assets/images/angiang.jpg')}
                style={{
                  height: hp('15'),
                  width:wp('25'),
                  borderRadius: wp('5'),
                  position: "absolute",
                  left: wp('60'),
                  top: wp('5')
                }}
                
              />
              
              <View style={{backgroundColor: '#000', height: hp('0.1'), top: wp('13')}}/>
              </View>
              <View style={{height: hp('9')}}>
              <Text style={[styles.address]}>Số 03 Đường Huỳnh Thúc Kháng, Phường 4, Thành phố Đà Lạt, Lâm Đồng 66000</Text>
              
              <View style={{backgroundColor: '#000', height: hp('0.1'), top: wp('5')}}/>
                </View>
                <View style={{height: hp('5')}}>
                <PaddingComponent
                  nkey="takeroom"
                  title="Th6/04/09/2020"
                />
                <View style={{backgroundColor: '#000', height: hp('0.1')}}/>
                </View>
                <View style={{height: hp('5'), top: wp('3')}}>
                <PaddingComponent
                  nkey="payroom"
                  title="CN/02/09/2020"
                />
                <View style={{backgroundColor: '#000', height: hp('0.1')}}/>
                </View>
                <View style={{height: hp('5'), top: wp('6')}}>
                <PaddingComponent
                  nkey="nightnumber"
                  title="2 đêm, 1 phòng"
                />
                <View style={{backgroundColor: '#0008', height: hp('0.1')}}/>
                </View>
                <View style={{height: hp('5'), top: wp('8')}}>
                <PaddingComponent
                  nkey="standardroompillowbed"
                  title="VNĐ 4.017.033"
                  styletext={{fontSize: wp('4')}}
                  styletitle={{fontSize: wp('4'), color: '#323B45'}}
                />
                <PaddingComponent
                  nkey="taxesandfees"
                  title="+VNĐ 477.967"
                  style={{top: wp('3')}}
                  styletext={{fontSize: wp('4')}}
                  styletitle={{fontSize: wp('4'), color: '#323B45'}}

                />
                <PaddingComponent
                  nkey="totalincentives"
                  title="-VNĐ 400.000"
                  style={{top: wp('6')}}
                  styletext={{fontSize: wp('4'), color: '#00B92A'}}
                  styletitle={{fontSize: wp('4'), color: '#00B92A'}}

                />
                </View>
          </View>
          <View style={{width: '100%', height: hp('8'), backgroundColor: '#009110'}}>
            <View style={{width: '90%', alignSelf: "center", }}>
          <PaddingComponent
                  nkey="finalprice"
                  title="VNĐ 4.095.000"
                  styletext={{fontSize: wp('5'), color: '#FFFFFF', top: wp('2.5')}}
                  styletitle={{fontSize: wp('5'), color: '#FFFFFF', top: wp('2.5')}}
                  
                />
                </View>
          </View>
          <View style={[styles.image]}>

          </View>
          <View style={[styles.footer]}>
              <Text style={{top: wp('2'), fontSize: wp('3.5'), fontFamily: 'roboto-slab-bold', }}>đ1.000.000</Text>
              <TraTe
            style={[styles.titlefooter]}
            i18nKey="includingtaxesandfees"/>
            <View style={{position: "absolute"}}>
            <ButtonCustom
            title="booknow"
            style={{height: hp('7'), width: wp('50'), top: wp('2'), left: wp('40')}}
            titleStyle={{fontSize: wp('5')}}
          />
          </View>
          </View>
          
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  title:{
    position: "absolute",
    fontFamily: "roboto-slab-bold",
    color: "#00162b",
    fontSize: wp('5'),
    textAlign: "center",
    alignSelf: "center"
  },
  titles:{
    fontSize: wp('4'),
    fontFamily: 'roboto-slab-bold',
    color: '#323b45',
    top: wp('2')
  },
  header:{
    width: "100%",
    height: hp('8'),
    justifyContent: "center",
    
  },
  arrowleft: {
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0.396078)',
    left: wp('8'),
  },
  content:{
    width: "90%",
    height: hp('60'),
    alignSelf: "center",
    top: wp('1')
  },
  image:{
    width: "100%",
    height: hp('10'),
    backgroundColor: '#0003',
    top: wp('1')
  },
  footer:{
    width: "90%",
    height: hp('10'),
    alignSelf: "center",
    top: wp('1')
  },
  titlefooter:{
    top: wp('2'),
    color: '#585858',
    fontSize: wp('3.5'),
    fontFamily: 'roboto-slab-bold',
  },
  namehotel:{
    fontFamily: 'roboto-slab-bold',
    fontSize: wp('6'),
    color: '#323b45',
    top: wp('4')
  },
  rating: {
    flexDirection: 'row',
  },
  address:{
    fontSize: wp('3'),
    fontFamily: 'roboto-slab-light',
    color: "#00162b",
    top: wp('2')
  },
});
export default BookingDetail;
