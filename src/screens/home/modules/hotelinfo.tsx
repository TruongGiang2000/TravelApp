import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  FlatList,
  Pressable,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import ButtonCustom from '../../../components/ButtonCustom';
import Itenassess from '../../../components/ItemRating';
import ItemUtilities from '../../../components/ItemUtilities';
import ItemImage from '../../../components/ItemImage';
import SlideShow from '../../../components/SlideShow';
import {translate} from '../../../util/translate';
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
                title={translate('endow')}
                style={styles.buttoncustom}
              />
            </View>
            <Text style={styles.content}>{content}</Text>
            <Text style={styles.detail}>{translate('detail')}</Text>
            <Itenassess
              style={{marginTop: wp('3')}}
              content={translate('review')}
              numberOfReview={10}
            />
          </View>
          <View style={{paddingLeft: wp('5')}}>
            <Text style={styles.convenient}>{translate('convenient')}</Text>
            <FlatList
              style={styles.flatList}
              data={this.state.data1}
              renderItem={this.renderItem}
              horizontal={true}
            />
          </View>
          <Text style={styles.allconvenient}>{translate('allconvenient')}</Text>
          <View style={styles.viewLine} />
          <View style={styles.viewPicture}>
            <Text style={styles.picture}>{translate('picture')}</Text>
            <FlatList
              style={styles.flatListItemImage}
              data={this.state.dataImage}
              renderItem={this.renderItemImage}
              horizontal={true}
            />
          </View>
          <View style={styles.viewLine1} />
        </ScrollView>
        <View style={styles.viewButon}>
          <ButtonCustom title={'choosing_room'} />
          <ButtonCustom title={translate('choosing_room')} />
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
  viewLine1: {
    width: wp('100'),
    height: hp('1.5'),
    backgroundColor: '#E0E6EE',
    alignSelf: 'center',
    marginVertical: hp('2'),
  },
});
export default Hotel;
