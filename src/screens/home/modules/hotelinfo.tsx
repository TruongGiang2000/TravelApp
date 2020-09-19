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
import ButtonCustom from '../../../components/CustomButton';
import Itenassess from './ItemMassess';
import ItemUtilities from '../../../components/ItemUtilities';

class Hotel extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      data: [
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
      ],
    };
  }
  renderItem = ({item}) => (
    <ItemUtilities title={item.Title} source={item.Icon} isShow={true} />
  );
  render() {
    const {title, price, content} = this.props;
    return (
      <View style={styles.MainContainer}>
        <ScrollView>
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
            title={'rate'}
            review={'review'}
            numberofreview={'numberofreview'}></Itenassess>
          <TraTe i18nKey={'convenient'} style={styles.convenient}></TraTe>
          <FlatList
            data={this.state.data}
            renderItem={this.renderItem}
            horizontal={true}
          />
          <TraTe i18nKey={'allconvenient'} style={styles.allconvenient}></TraTe>
          <TraTe i18nKey={'picture'} style={styles.picture}></TraTe>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    marginLeft: wp(5),
    justifyContent: 'center',
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
    marginRight: wp('10'),
    marginTop: hp('1.5'),
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
  },
  picture: {
    color: '#323B45',
    fontSize: wp('5'),
    fontFamily: 'roboto-slab-bold',
  },
});
export default Hotel;
