import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import ItemHotelMain from './ItemHotelMain';
const HotelList = (props: any) => {
  const {data, language} = props;
  const onPress = (item) => {
    props.navigation.navigate('HotelDetail', {item});
  };
  const renderItem = ({item}) => {
    let isVi = language == 'vi';
    return (
      <ItemHotelMain
        source={{uri: item.Images[1]}}
        title={isVi ? item.vi.Name : item.en.Name}
        price={item.Lowest_Price}
        address={isVi ? item.vi.Address : item.en.Address}
        votes={10}
        style={{marginTop: hp('1.5')}}
        starCount={3.5}
        onPress={() => onPress(item)}
      />
    );
  };
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      style={styles.MainContainer}
      scrollEnabled={false}
    />
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
  },
});
export default HotelList;
