import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
  Modal,
  Text,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import HotelSearchingModal from './modules/HotelSearching';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import moment from 'moment';
import {translate} from '../../components/translate';
import {withPages} from '../../components/withPages';
class Hotel extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      isShowFilterModal: false,
      date: moment(),
      room: 1,
      adult: 1,
      child: 1,
      minValue: 0,
      maxValue: 1,
      moneyStart: 0,
      moneyEnd: 10000000,
    };
  }
  showModalFilter = () => {
    this.setState({isShowFilterModal: true});
  };
  hideModalFilter = () => {
    this.setState({isShowFilterModal: false});
  };
  onBackSpace = (
    date,
    room,
    adult,
    child,
    minValue,
    maxValue,
    moneyStart,
    moneyEnd,
  ) => {
    this.setState({
      date,
      room,
      adult,
      child,
      minValue,
      maxValue,
      moneyStart,
      moneyEnd,
    });
    this.hideModalFilter();
  };
  onPressBackSpace = () => {
    this.props.navigation.navigate('Booking');
  };
  render() {
    const {
      isShowFilterModal,
      date,
      room,
      adult,
      child,
      minValue,
      maxValue,
      moneyStart,
      moneyEnd,
    } = this.state;
    return (
      <ScrollView style={styles.MainContainer}>
        <View style={styles.header}>
          <TouchableOpacity onPress={this.onPressBackSpace}>
            <MaterialIcon
              name={'keyboard-backspace'}
              size={wp('7')}
              color={'#000'}
            />
          </TouchableOpacity>
          <Text style={styles.title}>{translate('hotelSearching')}</Text>
          <TouchableOpacity onPress={this.showModalFilter}>
            <Image
              source={require('../../assets/images/filter.png')}
              resizeMode={'contain'}
              style={styles.imgHeader}
            />
          </TouchableOpacity>
        </View>
        <View>
          <View style={styles.viewSearchBar}>
            <AntDesignIcon
              name={'search1'}
              color={'#A8B6C8'}
              size={wp('6')}
              style={styles.iconSearchBar}
            />
            <TextInput
              placeholder={translate('search')}
              placeholderTextColor={'#A8B6C8'}
              style={styles.textInput}
              defaultValue={''}
            />
          </View>
        </View>
        <Modal
          visible={isShowFilterModal}
          animated={true}
          animationType={'slide'}>
          <HotelSearchingModal
            onBackSpacePress={this.onBackSpace}
            date={date}
            room={room}
            adult={adult}
            child={child}
            minValue={minValue}
            maxValue={maxValue}
            moneyStart={moneyStart}
            moneyEnd={moneyEnd}
          />
        </Modal>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: wp('6'),
  },
  imgHeader: {
    width: wp('4'),
    height: hp('2'),
  },
  title: {
    fontFamily: 'roboto-slab-bold',
    fontSize: wp('4'),
  },
  viewSearchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: hp('2'),
  },
  textInput: {
    width: wp('70'),
    fontFamily: 'roboto-slab.regular',
    fontSize: wp('4'),
  },
  iconSearchBar: {
    marginRight: 10,
  },
});
export default withPages(Hotel);
