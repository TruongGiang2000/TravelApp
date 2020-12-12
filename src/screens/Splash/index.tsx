import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, Image, FlatList} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {fiveDots} from '../../constants/systems/main';
import CodePush from 'react-native-code-push';
import {connect} from 'react-redux';
import lodash from 'lodash';
import {dataFetchProvince} from '../../constants/systems/main';
import {places, hotels, system} from '../../redux';
const SplashScreen = (props: any) => {
  const [isActiveItem, setActiveItem] = useState(0);
  const [syncMessage, setSyncMessage] = useState('');
  const [codePushSuccess, setCodePushSuccess] = useState(false);
  const [cacheActive, setCacheActive] = useState(false);
  const {
    getOfferProvinces,
    offerProvinces,
    getMountainProvinces,
    mountainProvinces,
    getFamousProvinces,
    famousProvinces,
    getAllProvinces,
    allProvinces,
    getAllHotel,
    allHotel,
    getAllNews,
    allNews,
  } = props;
  useEffect(() => {
    CodePush.sync(
      {
        installMode: CodePush.InstallMode.IMMEDIATE,
      },
      codePushStatusDidChange,
    );
  }, []);
  useEffect(() => {
    if (cacheActive) {
      return;
    }
    setTimeout(() => {
      if (isActiveItem === 4) {
        return setActiveItem(0);
      }
      setActiveItem(isActiveItem + 1);
    }, 100);
  }, [isActiveItem]);
  const loadingApp = () => {
    setCodePushSuccess(true);
  };
  useEffect(() => {
    if (
      !lodash.isEmpty(offerProvinces) &&
      !lodash.isEmpty(mountainProvinces) &&
      !lodash.isEmpty(famousProvinces) &&
      !lodash.isEmpty(allProvinces) &&
      !lodash.isEmpty(allHotel) &&
      !lodash.isEmpty(allNews) &&
      codePushSuccess
    ) {
      setTimeout(() => {
        props.navigation.navigate('MainScreen');
        setCacheActive(true);
      }, 2000);
    }
  }, [
    offerProvinces,
    mountainProvinces,
    famousProvinces,
    codePushSuccess,
    allNews,
  ]);
  useEffect(() => {
    getOfferProvinces(dataFetchProvince[2]);
    getFamousProvinces(dataFetchProvince[0]);
    getMountainProvinces(dataFetchProvince[1]);
    getAllProvinces();
    getAllHotel();
    getAllNews();
  }, []);
  const codePushStatusDidChange = (syncStatus: any) => {
    switch (syncStatus) {
      case CodePush.SyncStatus.CHECKING_FOR_UPDATE:
        setSyncMessage('');
        break;
      case CodePush.SyncStatus.DOWNLOADING_PACKAGE:
        setSyncMessage('downloading package');
        break;
      case CodePush.SyncStatus.AWAITING_USER_ACTION:
        setSyncMessage('awaiting user action');
        break;
      case CodePush.SyncStatus.INSTALLING_UPDATE:
        setSyncMessage('installing update');
        break;
      case CodePush.SyncStatus.UPDATE_IGNORED:
        setSyncMessage('update cancelled by user');
        loadingApp();
        break;
      case CodePush.SyncStatus.UPDATE_INSTALLED:
        setSyncMessage('update installed and will be applied on restart');
        setTimeout(() => {
          CodePush.restartApp();
        }, 1000);
        break;
      case CodePush.SyncStatus.UNKNOWN_ERROR:
        console.log('messege', syncMessage);
        setSyncMessage('an unknown error occurred');
        loadingApp();
        break;
      case CodePush.SyncStatus.UP_TO_DATE:
      default:
        setSyncMessage('ɚ 1.6');
        loadingApp();
        break;
    }
  };
  const renderFiveDots = ({index}) => {
    let isLastItem = index === fiveDots.length - 1;
    let isActive = index == isActiveItem;
    return (
      <View
        style={[
          isActive ? styles.dotViewActive : styles.dotView,
          isLastItem ? undefined : {marginRight: wp('1')},
        ]}
      />
    );
  };
  return (
    <View style={styles.MainContainer}>
      <View style={styles.viewCenter}>
        <View style={styles.viewRow}>
          <Text style={styles.sStyle}>S</Text>
          <Image
            style={styles.imageStyle}
            source={require('../../assets/images/logo_nobg.png')}
          />
        </View>
        <Text style={styles.bookingStyle}>BOOKING</Text>
        <View style={styles.viewFlatlist}>
          <FlatList
            data={fiveDots}
            renderItem={renderFiveDots}
            horizontal={true}
          />
        </View>
      </View>
      <Text style={styles.version}>{syncMessage}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
  },
  viewCenter: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  viewRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sStyle: {
    fontFamily: 'roboto-slab-bold',
    fontSize: wp('10'),
    color: '#FC8419',
  },
  imageStyle: {
    marginLeft: wp('-1.5'),
  },
  bookingStyle: {
    fontFamily: 'roboto-slab-bold',
    color: '#ED2121',
    fontSize: wp('5'),
    marginTop: hp('-1.5'),
  },
  dotView: {
    width: wp('2'),
    height: wp('2'),
    borderWidth: 1.8,
    borderColor: '#ED2121',
    borderRadius: wp('1'),
    alignSelf: 'center',
  },
  dotViewActive: {
    width: wp('2'),
    height: wp('2'),
    borderRadius: wp('1'),
    backgroundColor: '#ED2121',
    marginTop: hp('-1'),
    alignSelf: 'center',
  },
  viewFlatlist: {
    height: hp('3'),
    marginTop: hp('0.5'),
  },
  version: {
    fontFamily: 'roboto-slab.regular',
    fontSize: wp('4'),
    color: '#000',
    alignSelf: 'flex-end',
    marginBottom: hp('1'),
    marginRight: wp('3'),
  },
});
const mapStateFromProps = (state: any) => {
  return {
    offerProvinces: state.places.offerProvinces,
    mountainProvinces: state.places.mountainProvinces,
    famousProvinces: state.places.famousProvinces,
    allProvinces: state.places.allProvinces,
    allHotel: state.hotel.allHotel,
    allNews: state.system.allNews,
  };
};
export default connect(mapStateFromProps, {...places, ...hotels, ...system})(
  SplashScreen,
);
