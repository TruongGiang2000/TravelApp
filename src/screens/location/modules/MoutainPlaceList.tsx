import React, {Component} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import TraTe from '../../../components/TraTe';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import ItemImage from '../../../components/ItemImage';
import {places} from '../../../redux';
import {connect} from 'react-redux';
class MountainPlace extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    const {getMountainProvinces} = this.props;
    getMountainProvinces();
  }
  renderItem = ({item}) => (
    <ItemImage
      title={item.Title}
      source={{uri: item.uriList[0]}}
      isShow={true}
      style={styles.itemImage}
    />
  );
  render() {
    return (
      <View style={this.props.style}>
        <TraTe i18nKey={'moutainPlace'} style={styles.title} />
        <FlatList
          data={this.props.mountainProvinces}
          style={styles.flatList}
          renderItem={this.renderItem}
          horizontal={true}
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
