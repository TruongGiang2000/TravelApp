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
import MoutainPlaceList from './modules/MoutainProvincesList';
import OfferPlaceList from './modules/OfferProvincesList';
import FamousPlaceList from './modules/FamousProvincesList';
import ModalFilter from './modules/ModalFilter';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import SearchingProvinces from './modules/SearchingProvinces';
class Location extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      isShowModalFilter: false,
      isSearching: false,
      keyActiveArea: '',
      activeTypesArea: {},
    };
  }
  showModalFilter = () => {
    this.setState({isShowModalFilter: true});
  };
  hideModalFilter = (areaActive: any, typesAreaActive: any) => {
    this.setState({
      isShowModalFilter: false,
      keyActiveArea: areaActive,
      activeTypesArea: typesAreaActive,
    });
  };
  onFindPress = (areaActive: any, typesAreaActive: any) => {
    this.setState({
      isSearching: true,
      isShowModalFilter: false,
      keyActiveArea: areaActive,
      activeTypesArea: typesAreaActive,
    });
  };
  onPressBackSpace = () => {
    const {isSearching} = this.state;
    if (isSearching) {
      this.setState({isSearching: false});
      return;
    }
    this.props.navigation.goBack();
  };
  render() {
    const {
      isSearching,
      keyActiveArea,
      activeTypesArea,
      isShowModalFilter,
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
          <TraTe i18nKey={'discover'} style={styles.title} />
          <TouchableOpacity onPress={this.showModalFilter}>
            <Image
              source={require('../../assets/images/filter.png')}
              resizeMode={'contain'}
              style={styles.imgHeader}
            />
          </TouchableOpacity>
        </View>
        {!isSearching && (
          <View>
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
          </View>
        )}
        <Modal
          visible={isShowModalFilter}
          animated={true}
          animationType={'slide'}>
          <ModalFilter
            backSpace={this.hideModalFilter}
            onFindPress={this.onFindPress}
            keyActiveArea={keyActiveArea}
            activeTypesArea={activeTypesArea}
          />
        </Modal>
        {isSearching && (
          <SearchingProvinces onTryAgainPress={this.showModalFilter} />
        )}
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
