import React from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {translate} from '../../../util/translate';
import ItemHotelAround from './ItemHotelAroundHere';
const HotelAroundList = (props: any) => {
  const renderItem = ({item}) => {
    console.log('item', item);
    const {language} = props;
    let isVi = language == 'vi';
    return (
      <ItemHotelAround
        source={{uri: item.Images[0]}}
        title={isVi ? item.vi.Name : item.en.Name}
        starCount={4}
        content={'Cách thành phố Đà Lạt 45km'}
        price={'1000'}
        style={{marginRight: wp('3')}}
      />
    );
  };
  const {style, hotelByProvince} = props;
  console.log('hotelByProvince', hotelByProvince);
  return (
    <View style={style}>
      <Text style={styles.title}>{translate('hotelAround')}</Text>
      <FlatList
        data={hotelByProvince}
        renderItem={renderItem}
        extraData={props.language}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
  },
  title: {
    fontFamily: 'roboto-slab-bold',
    color: '#323B45',
    fontSize: wp('4.2'),
    marginBottom: hp('0.5'),
  },
});
export default HotelAroundList;
