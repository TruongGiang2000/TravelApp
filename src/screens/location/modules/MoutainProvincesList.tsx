import React, {Component} from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import ItemImage from '../../../components/ItemImage';
import {places} from '../../../redux';
import {connect} from 'react-redux';
import {translate} from '../../../util/translate';
class MountainPlace extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {};
  }
  // componentDidMount() {
  //   const {getMountainProvinces} = this.props;
  //   const data = {key: 'Mountain', TypesArea: ['Mountain']};
  //   getMountainProvinces(data);
  // }
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
        <Text style={styles.title}>{translate('moutainPlace')}</Text>
        <FlatList
          data={this.props.mountainProvinces}
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
    mountainProvinces: state.places.mountainProvinces,
  };
};
export default connect(mapStateFromProps, places)(MountainPlace);
