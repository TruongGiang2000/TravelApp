import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import TraTe from '../../../components/TraTe';
import ButtonCustom from '../../../components/ButtonCustom';
import Itenassess from './ItemRating';
import ItemUtilities from '../../../components/ItemUtilities';
import ItemImage from '../../../components/ItemImage';
import SlideShow from '../../../components/SlideShow';
class Hotel extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          srcImage: require('../../../assets/images/angiang.jpg'),
        },
        {
          srcImage: require('../../../assets/images/angiang.jpg'),
        },
        {
          srcImage: require('../../../assets/images/angiang.jpg'),
        },
        {
          srcImage: require('../../../assets/images/angiang.jpg'),
        },
        {
          srcImage: require('../../../assets/images/angiang.jpg'),
        },
        {
          srcImage: require('../../../assets/images/angiang.jpg'),
        },
      ],
      data1: [
        {
          Title: 'Giữ Xe',
          Icon: require('../../../assets/images/parking-ticket.png'),
        },
        {
          Title: 'TV',
          Icon: require('../../../assets/images/television.png'),
        },
        {
          Title: 'Bồn Tắm',
          Icon: require('../../../assets/images/bathtub.png'),
        },
        {
          Title: 'Máy Giặt',
          Icon: require('../../../assets/images/laundry.png'),
        },
        {
          Title: 'Máy Giặt',
          Icon: require('../../../assets/images/laundry.png'),
        },
        {
          Title: 'Máy Giặt',
          Icon: require('../../../assets/images/laundry.png'),
        },
      ],
      dataImage: [
        {
          src: require('../../../assets/images/congtamquan.jpg'),
        },
        {
          src: require('../../../assets/images/congtamquan.jpg'),
        },
        {
          src: require('../../../assets/images/congtamquan.jpg'),
        },
        {
          src: require('../../../assets/images/congtamquan.jpg'),
        },
        {
          src: require('../../../assets/images/congtamquan.jpg'),
        },
        {
          src: require('../../../assets/images/congtamquan.jpg'),
        },
        {
          src: require('../../../assets/images/congtamquan.jpg'),
        },
        {
          src: require('../../../assets/images/congtamquan.jpg'),
        },
      ],
    };
  }
  renderItem = ({item}) => (
    <ItemUtilities title={item.Title} source={item.Icon} isShow={true} />
  );
  renderItemImage = ({item}) => {
    return (
      <ItemImage style={styles.itemImage} source={item.src} isShow={true} />
    );
  };

  render() {
    const {title, price, content} = this.props;
    return (
      <View style={styles.MainContainer}>
        <ScrollView>
          <SlideShow isSpot={true} data={this.state.data}></SlideShow>
          <View style={{padding: wp('5')}}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.price}>{price}</Text>
            <View>
              <ButtonCustom
                title={'endow'}
                style={styles.buttoncustom}></ButtonCustom>
            </View>
            <Text style={styles.content}>{content}</Text>
            <TraTe i18nKey={'detail'} style={styles.detail}></TraTe>
            <Itenassess
              style={{marginTop: wp('3')}}
              title={'rate'}
              review={'review'}
              numberofreview={'numberofreview'}></Itenassess>
          </View>
          <View style={{paddingLeft: wp('5')}}>
            <TraTe i18nKey={'convenient'} style={styles.convenient}></TraTe>
            <FlatList
              style={styles.flatList}
              data={this.state.data1}
              renderItem={this.renderItem}
              horizontal={true}
            />
          </View>
          <TraTe i18nKey={'allconvenient'} style={styles.allconvenient}></TraTe>
          <View style={styles.viewLine} />
          <View style={styles.viewPicture}>
            <TraTe i18nKey={'picture'} style={styles.picture}></TraTe>
            <FlatList
              style={styles.flatListItemImage}
              data={this.state.dataImage}
              renderItem={this.renderItemImage}
              horizontal={true}
            />
          </View>
        </ScrollView>
        <View style={styles.viewButon}>
          <ButtonCustom style={styles.buttonStyle} title={'choosing_room'} />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.713726)',
  },
  title: {
    fontSize: wp('5'),
    fontFamily: 'roboto-slab-bold',
  },
  price: {
    fontSize: wp('4.5'),
    color: '#FA2A00',
    fontFamily: 'roboto-slab-bold',
  },
  buttoncustom: {
    marginTop: hp('1.5'),
    width: wp('30'),
    paddingVertical: wp('1'),
  },
  content: {
    marginTop: hp('1.5'),
    fontFamily: 'roboto-slab.regular',
    fontSize: wp('3.7'),
  },
  detail: {
    marginTop: hp('0.5'),
    color: '#0F00DA',
    fontFamily: 'roboto-slab-bold',
  },
  convenient: {
    fontFamily: 'roboto-slab-bold',
    fontSize: wp('5'),
  },
  allconvenient: {
    fontFamily: 'roboto-slab-bold',
    color: '#5C6979',
    textAlign: 'center',
    fontSize: wp('2.5'),
    marginVertical: hp('3'),
  },
  picture: {
    color: '#323B45',
    fontSize: wp('5'),
    fontFamily: 'roboto-slab-bold',
  },
  flatList: {
    marginTop: wp('2'),
  },
  viewLine: {
    width: wp('80'),
    height: 1.5,
    backgroundColor: '#E4E6E8',
    alignSelf: 'center',
  },
  viewPicture: {
    paddingLeft: wp('5'),
    marginTop: hp('2'),
  },
  itemImage: {
    width: wp('18'),
    height: hp('11.5'),
    marginRight: wp('3.2'),
  },
  flatListItemImage: {
    marginTop: hp('1'),
  },
  viewButon: {
    width: wp('100'),
    height: hp('14'),
    padding: wp('2.5'),
  },

  buttonStyle: {},
});
export default Hotel;
