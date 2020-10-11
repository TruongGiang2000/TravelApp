import React, {Component} from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import ItemImage from '../../../components/ItemImage';
import {translate} from '../../../components/translate';
class ProvinceImageList extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {};
  }
  renderItem = ({item}) => {
    return (
      <ItemImage
        style={styles.containerItem}
        source={{uri: item}}
        isShow={true}
      />
    );
  };
  render() {
    const {style, data} = this.props;
    return (
      <View style={style}>
        <Text style={styles.title}>{translate('image')}</Text>
        <FlatList
          data={data}
          renderItem={this.renderItem}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  title: {
    fontFamily: 'roboto-slab-bold',
    color: '#323B45',
    fontSize: wp('4.2'),
    marginBottom: hp('0.5'),
  },
  containerItem: {
    marginRight: wp('3'),
    width: wp('15'),
    height: hp('10'),
  },
});
export default ProvinceImageList;
