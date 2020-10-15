import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, Image, FlatList} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {fiveDots} from '../../constants/systems/main';
const SplashScreen = (props: any) => {
  const [isActiveItem, setActiveItem] = useState(0);
  let setTimeOut;
  useEffect(() => {
    setTimeOut = setTimeout(() => {
      if (isActiveItem === 4) {
        return setActiveItem(0);
      }
      setActiveItem(isActiveItem + 1);
    }, 500);
  }, [isActiveItem]);
  useEffect(() => {
    return () => {
      clearTimeout(setTimeOut);
    };
  }, []);
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
  );
};

const styles = StyleSheet.create({
  MainContainer: {
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
});
export default SplashScreen;
