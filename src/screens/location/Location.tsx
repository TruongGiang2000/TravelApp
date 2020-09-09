import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
  Modal,
} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import TraTe from '../../components/TraTe';
import MoutainPlaceList from './modules/MoutainPlaceList';
import OfferPlaceList from './modules/OfferPlaceList';
import FamousPlaceList from './modules/FamousPlaceList';
import ModalFilter from './modules/ModalFilter';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
class Location extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      isShowModalFilter: false,
    };
  }
  showModalFilter = () => {
    this.setState({isShowModalFilter: true});
  };
  hideModalFilter = (value: boolean) => {
    this.setState({isShowModalFilter: value});
  }
  render() {
    return (
      <ScrollView style={styles.MainContainer}>
        <View style={styles.header}>
          <MaterialIcon
            name={'keyboard-backspace'}
            size={wp('7')}
            color={'#000'}
          />
          <TraTe i18nKey={'discover'} style={styles.title} />
          <TouchableOpacity onPress={this.showModalFilter}>
            <Image
              source={require('../../assets/images/filter.png')}
              style={styles.imgHeader}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.viewSearchBar}>
          <AntDesignIcon
            name={'search1'}
            color={'#A8B6C8'}
            size={wp('6')}
            style={styles.iconSearchBar}
          />
          <TextInput
            placeholder={'Search'}
            placeholderTextColor={'#A8B6C8'}
            style={styles.textInput}
            defaultValue={''}
          />
        </View>
        <OfferPlaceList style={styles.offerList} />
        <MoutainPlaceList style={styles.moutainList} />
        <FamousPlaceList style={styles.famousList} />
        <Modal visible={this.state.isShowModalFilter} animated={true} animationType={"slide"} >
          <ModalFilter backSpace={this.hideModalFilter} />
        </Modal>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: wp('3'),
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
  offerList: {
    paddingLeft: wp('6'),
  },
  moutainList: {
    paddingLeft: wp('6'),
    marginTop: hp('2'),
  },
  famousList: {
    paddingHorizontal: wp('6'),
    marginTop: hp('2'),
  },
});
export default Location;
