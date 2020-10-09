import React, {Component} from 'react';
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Kindofroom from '../../home/modules/kindofroom';
import {translate} from '../../../components/translate';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Carousel from 'react-native-snap-carousel';

class ChooseRoom extends Component<any, any> {
  constructor(prop) {
    super(prop);
    this.state = {
      data: [
        {
          Source: require('../../../assets/images/room.png'),
          Size: '27m2',
          Bed: '1 giường đôi',
          Amount: '2 người',
          Title: 'Phòng tiêu chuẩn',
          Policy: 'Chính sách hủy phòng',
          Quantum: 'Còn 4 phòng trống',
          Internet: 'Miễn Phí Internet',
          Iconinternet: require('../../../assets/images/shape.png'),
        },
        {
          Source: require('../../../assets/images/giang.jpg'),
          Size: '27m2',
          Bed: '1 giường đôi',
          Amount: '2 người',
          Title: 'Phòng Bú Cu',
          Policy: 'Chính sách hủy phòng',
          Quantum: 'Còn 4 phòng trống',
          Internet: 'Miễn Phí Internet',
          Iconinternet: require('../../../assets/images/shape.png'),
        },
        {
          Source: require('../../../assets/images/room.png'),
          Size: '27m2',
          Bed: '1 giường đôi',
          Amount: '2 người',
          Title: 'Phòng Mắt Dạy',
          Policy: 'Chính sách hủy phòng',
          Quantum: 'Còn 4 phòng trống',
          Internet: 'Miễn Phí Internet',
          Iconinternet: require('../../../assets/images/shape.png'),
        },
      ],
    };
  }

  renderItem = ({item}) => (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Kindofroom
        source={item.Source}
        size={item.Size}
        bed={item.Bed}
        amount={item.Amount}
        title={item.Title}
        policy={item.Policy}
        quantum={item.Quantum}
        internet={item.Internet}
        iconinternet={item.Iconinternet}
        isShow={true}
      />
    </View>
  );
  render() {
    const {image, title} = this.props;
    return (
      <ImageBackground source={image} style={styles.ImageBackground}>
        <View style={styles.container}>
          <MaterialIcon
            name={'keyboard-backspace'}
            size={wp('7')}
            color={'#FFFFFF'}
            style={styles.Icon}
          />
          <Carousel
            data={this.state.data}
            renderItem={this.renderItem}
            sliderWidth={wp('100')}
            itemWidth={wp('100')}
          />

          <View style={styles.title}>
            <Text style={styles.NameTypeRoom}>{title}</Text>
            <Text style={styles.NumberTyperoom}>
              {translate('numbertyperoom')}
            </Text>
          </View>
        </View>
      </ImageBackground>
    );
  }
}
export default ChooseRoom;
const styles = StyleSheet.create({
  ImageBackground: {
    width: '100%',
    height: '100%',
  },
  NameTypeRoom: {
    fontFamily: 'roboto-slab-bold',
    fontSize: wp('8'),
    color: '#FFFFFF',
  },
  NumberTyperoom: {
    color: '#FFFFFF',
    fontSize: wp('5'),
    fontFamily: 'roboto-slab-light',
  },
  Icon: {
    alignSelf: 'flex-start',
    marginLeft: wp('2'),
  },
  title: {
    marginTop: hp('2'),
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: hp('3'),
    paddingHorizontal: wp('4'),
  },
});
