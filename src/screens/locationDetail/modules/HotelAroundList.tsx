import React from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {translate} from '../../../util/translate';
const HotelAroundList = (props: any) => {
  const {style} = props;
  return (
    <View style={style}>
      <Text style={styles.title}>{translate('hotelAround')}</Text>
      <FlatList
        data={location}
        renderItem={this.renderItem}
        extraData={this.props.language}
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
