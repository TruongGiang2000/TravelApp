import React, { useCallback } from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import ItemNews from '../../home/modules/ItemNew';
import {translate} from '../../../util/translate';
const NewsList = (props: any) => {
  const {style, data, language, onPressShowAll} = props;
  
  const renderItem = ({item}) => {
    let isVi = language == 'vi';
    return (
      <ItemNews
        source={{uri: item.Images[0]}}
        title={isVi ? item.vi.Title : item.en.Title}
        content={isVi ? item.vi.Content : item.en.Content}
        style={styles.item}
      />
    );
  };
  return (
    
    <View style={[styles.MainContainer, style]}>
      <FlatList data={data} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
  },
  item: {
    marginTop: hp('2'),
  },
  
});
export default NewsList;
