import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import PropTypes from 'prop-types';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import ButtonCustom from '../components/ButtonCustom';
import TraTe from '../components/TraTe';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import DatePicker from 'react-native-datepicker';
import MultiSlider from 'react-native-multi-slider';
import MenuList from 'react-native-menu-list';
class HotelSeacrh extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      
    };
  }
  selectDate = (date) => {
    this.setState({date: date});
  };
  data: [
    {id:1 , name:'item1'},
    {id:2, name: 'item2'},
    {id:3 , name:'item1'},
    {id:4, name: 'item2'},
  ]
  data1: [
    {id:1 , name:'item1'},
    {id:2, name: 'item2'},
    {id:3 , name:'item1'},
    {id:4, name: 'item2'},
  ]
  data2: [
    {id:1 , name:'item1'},
    {id:2, name: 'item2'},
    {id:3 , name:'item1'},
    {id:4, name: 'item2'},
  ]
  enableScroll = () => this.setState({scrollEnabled: true});
  disableScroll = () => this.setState({scrollEnabled: false});
  render() {
    const {style, styleheader} = this.props;

    return (
      <TouchableOpacity style={[styles.MainContainer, style]}>
        <View style={styles.arrowleft}>
          <Icon name="arrowleft" size={27} color="#000" />
        </View>
        <View style={[styles.header, styleheader]}>
          <TraTe
            style={[styles.title, this.props.titleStyle]}
            i18nKey={'hotelSeacrh'}
          />
        </View>
        <View style={[styles.information]}>
          
          <TraTe
            style={[styles.titleinformation, this.props.titleStyle]}
            i18nKey={'information'}
          />
          <View style={{ width: '50%', left: wp('5')}}>
          <View style={styles.calendar}>
            <Icon name="calendar" size={30} color="#000" />
          </View>
          <TraTe
            style={[styles.titlecheckin, this.props.titleStyle]}
            i18nKey={'checkin'}
          />
          <DatePicker
            hideText={true}
            showIcon={false}
            format="DD/MM/yyyy"
            style={{width: 200}}
            date={this.state.date}
            onDateChange={this.selectDate}
          >
          </DatePicker>
          <Text style={{width: '50%', color:'#000', position:'absolute', top:wp('10'), left:wp('15')}}>{this.state.date}</Text>
          <TraTe
            style={[styles.titlepassengets, this.props.titleStyle]}
            i18nKey={'passengets'}
          />
         
          <MenuList
            data={this.data}
            keyExtractor={item => item.id}
          >
            <View style={styles.downsquare}>
            <Icon name="downsquare" size={30} color="#000" />
          </View>
          </MenuList>
          </View>
          <View style={{position:"absolute", width: '50%', right: wp('5')}}>
          <TraTe
            style={[styles.titlerooms, this.props.titleStyle]}
            i18nKey={'rooms'}
          />
          <MenuList
            
            data={this.data1}
            keyExtractor={item => item.id}
            firstTitleText={'123'}
          >
            <View style={styles.downsquare2}>
            <Icon name="downsquare" size={30} color="#000" />
          </View>
          </MenuList>
          
          
          <TraTe
            style={[styles.titlepassengers, this.props.titleStyle]}
            i18nKey={'passengers'}
          />
          <MenuList
            data={this.data2}
            keyExtractor={item => item.id}
          >
            <View style={styles.downsquare3}>
            <Icon name="downsquare" size={30} color="#000" />
          </View>
          </MenuList>
          
          </View>
        </View>
        <View style={[styles.price]}>
          <TraTe
            style={[styles.titleprice, this.props.titleStyle]}
            i18nKey={'price'}
          />
          <TraTe
            style={[styles.titleprices, this.props.titleStyle]}
            i18nKey={'price'}
          />
        </View>
        <View style={[styles.bottom]}>
          <ButtonCustom
            title="search"
            style={{height: hp('8'), width: wp('90')}}
            titleStyle={{fontSize: wp('5')}}
          />
          <ButtonCustom
            title="reset"
            style={{backgroundColor: '#0000', height: hp('8'), width: wp('90')}}
            titleStyle={{color: '#000', fontSize: wp('5')}}
          />
        </View>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    width: '100%',
    height: '100%',
  },
  header: {
    width: wp('90'),
    height: hp('8'),
    alignItems: 'center',
  },
  title: {
    color: '#000',
    fontSize: wp('5'),
    textAlign: 'center',
  },
  titleinformation: {
    color: '#000',
    fontSize: wp('5'),
  },
  titleprice: {
    color: '#000',
    fontSize: wp('5'),
  },
  titlecheckin: {
    fontSize: wp('3'),
    position: 'absolute',
    left: wp('15'),
    top: wp('4'),
  },
  titlepassengets: {
    fontSize: wp('3'),
    top: wp('10'),
    left: wp('15'),
  },
  titlerooms: {
    fontSize: wp('3'),
    top: wp('10'),
    position: 'absolute',
    right: wp('12'),
  },
  titlepassengers: {
    fontSize: wp('3'),
    top: wp('33'),
    position: 'absolute',
    right: wp('12'),
  },
  titleprices: {
    fontSize: wp('3'),
    top: wp('10'),
    position: 'absolute',
    left: wp('5'),
  },
  information: {
    width: wp('90'),
    height: hp('30'),
    alignSelf: 'center',
  },
  price: {
    width: wp('90'),
    height: hp('30'),
    alignSelf: 'center',
  },
  bottom: {
    width: '100%',
    height: hp('20'),
    alignItems: 'center',
  },
  arrowleft: {
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0.396078)',
    left: wp('10'),
  },
  calendar: {
    top: wp('5'),
    left: wp('3'),
  },
  downsquare:{
    top: wp('5'),
    left: wp('3'),
  },
  downsquare2:{
    top: wp('10'),
    right: wp('3'),
    position: 'absolute',
  },
  downsquare3:{
    top: wp('33'),
    right: wp('3'),
    position: 'absolute',
    
  },
});
export default HotelSeacrh;
