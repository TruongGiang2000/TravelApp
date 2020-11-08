import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, View, FlatList, Image} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {connect} from 'react-redux';
import {translate} from '../util/translate';
import {threeDots} from '../constants/systems/main';
import ModalCustom from 'react-native-modal';
const StraActivityIndicator = (props) => {
  const [dotsActive, setDotsActive] = useState({});
  const {loading} = props;
  useEffect(() => {
    if (!loading) {
      return;
    }
    setTimeout(() => {
      if (Object.values(dotsActive).length == 3) {
        return setDotsActive({});
      }

      if (Object.values(dotsActive).length == 0) {
        return setDotsActive({...dotsActive, ['zezo']: 0});
      }
      if (Object.values(dotsActive).length == 1) {
        return setDotsActive({...dotsActive, ['one']: 1});
      }
      setDotsActive({...dotsActive, ['two']: 2});
    }, 100);
  }, [dotsActive]);
  const renderThreeDots = ({index}) => {
    let isLastItem = index === threeDots.length - 1;
    let isActive = Object.values(dotsActive).some((it) => it === index);
    return (
      <View
        style={[
          isActive ? styles.dotViewActive : styles.dotView,
          isLastItem ? undefined : {marginRight: wp('2')},
        ]}
      />
    );
  };
  console.log('dotsActive', dotsActive);
  return (
    <ModalCustom isVisible={true}>
      <View style={styles.mainContainer}>
        <Image
          style={styles.image}
          source={require('../assets/images/StravelLoading.png')}
        />
        <View style={styles.viewFlatlist}>
          <FlatList
            data={threeDots}
            renderItem={renderThreeDots}
            horizontal={true}
          />
        </View>
        <Text style={styles.loadingTxt}>{translate('loading')}</Text>
      </View>
    </ModalCustom>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: wp('30'),
    height: wp('30'),
  },
  viewFlatlist: {
    height: hp('3'),
    marginTop: hp('5'),
  },
  dotView: {
    width: wp('4'),
    height: wp('4'),
    borderWidth: 1.8,
    borderColor: '#ED2121',
    borderRadius: wp('2'),
    alignSelf: 'center',
  },
  dotViewActive: {
    width: wp('4'),
    height: wp('4'),
    borderRadius: wp('2'),
    marginTop: hp('-1'),
    borderColor: '#ED2121',
    borderWidth: wp('1.2'),
    alignSelf: 'center',
  },
  loadingTxt: {
    fontFamily: 'roboto-slab.regular',
    fontSize: wp('5'),
    color: '#ED2121',
    marginTop: wp('1'),
  },
});
const mapStateFromProps = (state: any) => ({
  loading: state.system.loading,
});
export default connect(mapStateFromProps, null)(StraActivityIndicator);
