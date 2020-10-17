import React, {Component} from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {connect} from 'react-redux';
import {places} from '../../../redux';
import ItemImage from '../../../components/ItemImage';
import {translate} from '../../../util/translate';
class OfferPlace extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {};
  }
  // componentDidMount() {
  //   const data = {key: 'Offer', TypesArea: ['Mountain', 'Sea']};
  //   this.props.getOfferProvinces(data);
  // }
  onPressItem = (item: any) => () => {
    this.props.navigation.navigate('LocationDetail', {item});
  };
  renderItem = ({item}) => (
    <ItemImage
      title={item.Title}
      source={{uri: item.Images[1]}}
      isShow={true}
      style={styles.itemImage}
      onPress={this.props.onPress(item)}
    />
  );
  render() {
    return (
      <View style={this.props.style}>
        <Text style={styles.title}>{translate('offer')}</Text>
        <FlatList
          data={this.props.offerProvinces}
          style={styles.flatList}
          renderItem={this.renderItem}
          horizontal={true}
          keyExtractor={(item) => item.Title}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  title: {
    fontSize: wp('3.8'),
    fontFamily: 'roboto-slab-bold',
  },
  flatList: {
    marginTop: hp('2'),
  },
  itemImage: {
    marginRight: wp('3.5'),
  },
});
const mapStateFromProps = (state: any) => {
  return {
    offerProvinces: state.places.offerProvinces,
  };
};
export default connect(mapStateFromProps, places)(OfferPlace);
