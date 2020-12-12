import React from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {translate} from '../../../util/translate';
import ItemHotel from './ItemHotel';
const HotelList = (props: any) => {
  const startsNumber = [
    '8.0',
    '9.0',
    '5.0',
    '7.0',
    '7.5',
    '6.0',
    '6.5',
    '8.5',
    '5.5',
  ];
  const {style, data} = props;
  const {language} = props;
  const onPress = (item) => {
    props.navigation.navigate('HotelDetail', {item});
  };
  const renderItem = ({item, index}) => {
    const isVi = language == 'vi';
    return (
      <ItemHotel
        style={styles.item}
        source={{uri: item.Images[1]}}
        titleHotel={isVi ? item.vi.Name : item.en.Name}
        titlePlace={isVi ? item.Province_Name : item.Province_Name}
        onPress={() => onPress(item)}
        starts={startsNumber[index]}
      />
    );
  };
  return (
    <View style={[style, styles.MainContainer]}>
      <Text style={styles.title}>{translate('hotel_best_price')}</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        horizontal={true}
        extraData={language}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
  },
  title: {
    fontFamily: 'roboto-slab.regular',
    fontWeight: '700',
    color: '#323B45',
    fontSize: wp('4.5'),
    marginBottom: hp('2'),
  },
  item: {
    marginRight: wp('4'),
  },
});
export default HotelList;
