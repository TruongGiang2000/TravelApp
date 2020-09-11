import React, {Component} from 'react';
import {View, StyleSheet, FlatList, Image} from 'react-native';
import TraTe from '../../../components/TraTe';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import ItemImage from '../../../components/ItemImage';
import {connect} from 'react-redux';
import Button from '../../../components/CustomButton';
import shadow  from '../../../components/shadow';
class SearchingProvinces extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {};
  }
  renderItem = ({item}) => {
    return (
      <ItemImage
        title={item.Title}
        source={{uri: item.uriList[1]}}
        style={styles.itemContainer}
      />
    );
  };
  renderItemEmpty = () => {
    return (
      <View style={styles.viewEmpty}>
        <Image source={require('../../../assets/images/sleep.png')} />
        <TraTe style={styles.textDescription} i18nKey={'description_null'} />
        <Button
          title={'try_again'}
          style={styles.styleButton}
          titleStyle={styles.titleButtonStyle}
          onPress={this.props.onTryAgainPress}
        />
      </View>
    );
  };
  render() {
    return (
      <FlatList
        data={this.props.searchingProvinces}
        renderItem={this.renderItem}
        keyExtractor={(item) => item.Title}
        scrollEnabled={false}
        ListEmptyComponent={this.renderItemEmpty}
        ListHeaderComponent={() => {
          return <TraTe style={styles.title} i18nKey={'filtered_result'} />;
        }}
      />
    );
  }
}
const styles = StyleSheet.create({
  title: {
    fontFamily: 'roboto-slab-bold',
    fontSize: wp('4'),
    color: '#323B45',
    marginTop: hp('2'),
    marginBottom: hp('1'),
    paddingHorizontal: wp('6'),
  },
  itemContainer: {
    marginTop: hp('1'),
    alignSelf: 'center',
    width: wp('90'),
    height: hp('15'),
    ...shadow(4),
  },
  viewEmpty: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  textDescription: {
    fontFamily: 'roboto-slab.regular',
    color: '#323B45',
    fontSize: wp('3.8'),
    marginVertical: hp('1'),
  },
  titleButtonStyle: {
    fontSize: wp('3.8'),
  },
  styleButton: {
    paddingVertical: hp('1.5'),
    width: wp('30'),
  },
});
const mapStateFromProps = (state: any) => {
  return {
    searchingProvinces: state.places.searchingProvinces,
  };
};
export default connect(mapStateFromProps, null)(SearchingProvinces);
