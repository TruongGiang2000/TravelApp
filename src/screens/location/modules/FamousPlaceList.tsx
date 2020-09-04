import React, {Component} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import TraTe from '../../../components/TraTe';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import ItemImage from '../../../components/ItemImage';
import {connect} from 'react-redux';
import {places} from '../../../redux';
class FamousPlace extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount(){
    const {getFamousProvinces} = this.props;
    getFamousProvinces();
  }
  renderItem = ({item}) => {
    return(
    <ItemImage
      title={item.Title}
      source={{uri: item.uriList[0]}}
      style={styles.itemContainer}
      styleImage={{borderRadius: 16}}
    />
    )
  };
  render() {
    console.log('this.props.famousProvinces',this.props.famousProvinces);
    return (
      <View style={this.props.style}>
        <TraTe i18nKey={'famousPlace'} style={styles.title} />
        <FlatList data={this.props.famousProvinces} renderItem={this.renderItem} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  title: {
    fontSize: wp('5'),
    fontFamily: 'roboto-slab-bold',
  },
  itemContainer: {
    marginTop: hp('1'),
    alignSelf: 'center',
    width: wp('90'),
    height: hp('25'),
  },
});
const mapStateFromProps = (state: any) => {
  return {
    famousProvinces: state.places.famousProvinces,
  };
};
export default connect(mapStateFromProps, places)(FamousPlace);
