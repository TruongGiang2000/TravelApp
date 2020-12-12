import React from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {translate} from '../../../util/translate';
import ItemDestination from './ItemDestination';
const SpecialSpot = (props: any) => {
  const {style, data, language} = props;
  const onPress = (item) => {
    props.navigation.navigate('LocationDetail', {item});
    
  };
  const renderItem = ({item}) => {
    let isVi = language == 'vi';
    return (
      <ItemDestination
        source={{uri: item.Images[2]}}
        numberFavorite={18}
        style={styles.item}
        title={isVi ? item.vi.Title : item.en.Title}
        place={item.Province_Name}
        starCount={3.5}
        onPress={() => onPress(item)}
      />
    );
  };
  return (
    <View style={[style, styles.MainContainer]}>
      <Text style={styles.title}>{translate('highlightSpot')}</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        horizontal={true}
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
    marginRight: wp('5'),
  },
});
export default SpecialSpot;
