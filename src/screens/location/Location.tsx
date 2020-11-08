import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Image,
  ScrollView,
  Pressable,
  Modal,
  Text,
} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import MoutainPlaceList from './modules/MoutainProvincesList';
import OfferPlaceList from './modules/OfferProvincesList';
import FamousPlaceList from './modules/FamousProvincesList';
import ModalFilter from './modules/ModalFilter';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import SearchingProvinces from './modules/SearchingProvinces';
import {translate} from '../../util/translate';
import {withPages} from '../../util/withPages';
import shadow from '../../util/shadow';
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
  onPressItem = (item: any) => () => {
    this.props.navigation.navigate('LocationDetail', {item});
  };
  render() {
    const {
      isSearching,
      keyActiveArea,
      activeTypesArea,
      isShowModalFilter,
    } = this.state;
    const {navigation} = this.props;
    return (
      <ScrollView style={styles.MainContainer}>
        <View style={styles.header}>
          <Pressable onPress={this.onPressBackSpace}>
            <MaterialIcon
              name={'keyboard-backspace'}
              size={wp('7')}
              color={'#000'}
            />
          </Pressable>
          <Text style={styles.title}>{translate('discover')}</Text>
          <Pressable onPress={this.showModalFilter}>
            <Image
              source={require('../../assets/images/filter.png')}
              resizeMode={'contain'}
              style={styles.imgHeader}
            />
          </Pressable>
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
                placeholder={translate('search')}
                placeholderTextColor={'#A8B6C8'}
                style={styles.textInput}
                defaultValue={''}
              />
            </View>
            <OfferPlaceList
              onPress={this.onPressItem}
              style={styles.offerList}
            />
            <MoutainPlaceList
              onPress={this.onPressItem}
              style={styles.moutainList}
            />
            <FamousPlaceList
              onPress={this.onPressItem}
              style={styles.famousList}
            />
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
          <SearchingProvinces
            onPress={this.onPressItem}
            onTryAgainPress={this.showModalFilter}
          />
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
    ...shadow(5),
    backgroundColor: '#fff',
    borderRadius: wp('2'),
    paddingHorizontal: wp('2'),
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
export default withPages(Location);
