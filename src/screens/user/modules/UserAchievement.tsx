import React, {Component} from 'react';
import {View, StyleSheet, Text, Image, FlatList} from 'react-native';
import TraTe from '../../../components/TraTe';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import shawdow from '../../../components/shadow';
import Octicons from 'react-native-vector-icons/Octicons';
import ItemArmotial from './ItemArmorial';
class UserAchievement extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          source: require('../../../assets/images/vali.png'),
          title: 'Cuồng du lịch',
        },
        {
          source: require('../../../assets/images/vali.png'),
          title: 'Người sưu tầm',
        },
        {
          source: require('../../../assets/images/vali.png'),
          title: 'Du lịch triệu đô',
        },
        {
          source: require('../../../assets/images/vali.png'),
          title: 'Vua chụp ảnh',
        },
      ],
    };
  }
  renderItem = ({item}) => (
    <ItemArmotial style={styles.item} source={item.source} title={item.title} />
  );
  render() {
    const {style} = this.props;
    return (
      <View style={[styles.MainContainer, style]}>
        <View style={styles.viewRowHeader}>
          <TraTe style={styles.title} i18nKey={'achievement'} />
          <View>
            <Image source={require('../../../assets/images/iconInfo.png')} />
            <Image
              style={styles.kingHat}
              source={require('../../../assets/images/kinghat.png')}
            />
          </View>
        </View>
        <Image
          resizeMode={'cover'}
          style={styles.imageBanner}
          source={require('../../../assets/images/archivement_banner.png')}
        />
        <View style={styles.viewStraCoin}>
          <TraTe i18nKey={'you_are'} style={styles.textCoinStraNormal}>
            {' Genius cấp 0 '}
          </TraTe>
          <View style={styles.viewRowStraCoin}>
            <Text style={styles.textCoinStra}>0 S-tra</Text>
            <Text style={styles.textCoinStra}>10.000 S-tra</Text>
          </View>
          <View style={styles.containerBarCoinStra}>
            <View style={styles.viewBarCoinStra} />
            <View style={styles.viewBarCoinStraActive}>
              <Octicons
                style={styles.iconCircleActive}
                name={'primitive-dot'}
                color={'#FA2A20'}
                size={wp('6')}
              />
            </View>
          </View>
          <View style={styles.viewRowTextAchievement}>
            <TraTe i18nKey={'you_achieve'} style={styles.textCoinStraNormal} />
            <Text style={styles.textCoinStraBold}> 7.000 S-tra</Text>
          </View>
        </View>
        <View style={styles.viewArmorial}>
          <TraTe style={styles.titleYourArmorial} i18nKey={'your_armorial'} />
          <FlatList
            style={styles.flatListHorital}
            data={this.state.data}
            renderItem={this.renderItem}
            horizontal={true}
          />
          <TraTe style={styles.textNeedHelp} i18nKey={'helping'} />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    backgroundColor: '#ffffff',
    paddingTop: hp('2'),
    paddingBottom: hp('3'),
  },
  viewRowHeader: {
    flexDirection: 'row',
    paddingHorizontal: wp('5.5'),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: wp('4'),
    color: '#5C6979',
    fontFamily: 'roboto-slab-bold',
  },
  kingHat: {
    position: 'absolute',
    marginTop: hp('-2'),
    marginLeft: wp('3'),
    width: wp('4'),
    height: hp('4'),
  },
  imageBanner: {
    width: '100%',
    height: hp('18'),
    marginTop: hp('2'),
  },
  viewStraCoin: {
    paddingHorizontal: wp('5.5'),
    paddingVertical: hp('2'),
  },
  textCoinStraNormal: {
    fontSize: wp('3.6'),
    fontFamily: 'roboto-slab.regular',
    color: '#323B45',
  },
  viewRowStraCoin: {
    flexDirection: 'row',
    marginTop: hp('2'),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textCoinStra: {
    color: '#A8B6C8',
    fontSize: wp('3.6'),
    fontFamily: 'roboto-slab.regular',
  },
  containerBarCoinStra: {
    marginTop: hp('1'),
  },
  viewBarCoinStra: {
    width: '100%',
    height: 6,
    borderRadius: 10,
    backgroundColor: '#E0E6EE',
  },
  viewBarCoinStraActive: {
    width: '30%',
    height: 6,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: '#FA2A00',
  },
  iconCircleActive: {
    backgroundColor: '#ffffff',
    paddingHorizontal: wp('1.5'),
    borderRadius: 30,
    ...shawdow(4),
  },
  viewRowTextAchievement: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp('2'),
  },
  textCoinStraBold: {
    fontSize: wp('3.6'),
    fontFamily: 'roboto-slab-bold',
    color: '#323B45',
  },
  viewArmorial: {
    paddingLeft: wp('5.5'),
    marginTop: hp('0.5'),
  },
  titleYourArmorial: {
    fontSize: wp('3.8'),
    color: '#5C6979',
    fontFamily: 'roboto-slab-bold',
  },
  flatListHorital: {
    marginTop: hp('2'),
  },
  item: {
    marginRight: wp('2'),
  },
  textNeedHelp: {
    fontFamily: 'roboto-slab.regular',
    color: '#FA2A00',
    fontSize: wp('3.8'),
    alignSelf: 'center',
    marginTop: hp('3'),
    textDecorationLine: 'underline',
  },
});
export default UserAchievement;
