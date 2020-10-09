import React, {Component} from 'react';
import {StyleSheet, Image, Text, View, FlatList} from 'react-native';
import ModalCustom from 'react-native-modal';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {translate} from '../components/translate';
class StraActivityIndicator extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      dataDots: [{key: 'firstDot'}, {key: 'secondDot'}, {key: 'thirdDot'}],
      activeDot: {},
      numberActiveDot: 0,
    };
  }
  componentDidUpdate() {
    setTimeout(() => {
      this.setState({numberActiveDot: this.state.numberActiveDot + 1});
      this.setState((state) => ({
        activeDot: {
          ...state.activeDot,
          [state.dataDots[state.numberActiveDot]]:
            state.dataDots[state.numberActiveDot],
        },
      }));
    }, 100);
  }
  renderItem = (item) => {
    const {activeDot} = this.state;
    console.log('activeDot', activeDot);
    let active = Object.values(activeDot).some((it) => it === item.key);
    return (
      <View style={active ? [styles.dot, {borderWidth: 3}] : styles.dot} />
    );
  };
  render() {
    const {dataDots, activeDot} = this.state;
    return (
      <ModalCustom isVisible={false} style={styles.MainContainer}>
        <Image
          source={require('../assets/images/StravelLoading.png')}
          style={styles.image}
          resizeMode={'contain'}
        />
        <View style={styles.viewFlatlist}>
          <FlatList
            data={dataDots}
            renderItem={this.renderItem}
            extraData={activeDot}
            horizontal={true}
          />
        </View>
        <Text style={styles.loadingText}>{translate('loading')}</Text>
      </ModalCustom>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: wp('40'),
    height: hp('20'),
  },
  loadingText: {
    color: '#FA2A00',
    fontFamily: 'roboto-slab-light',
    fontSize: wp('4.6'),
  },
  dot: {
    width: wp('4'),
    height: wp('4'),
    marginRight: wp('2'),
    borderWidth: 2,
    borderColor: '#FA2A00',
    borderRadius: wp('2'),
  },
  viewFlatlist: {
    marginTop: hp('2'),
    height: hp('3'),
  },
});
export default StraActivityIndicator;
