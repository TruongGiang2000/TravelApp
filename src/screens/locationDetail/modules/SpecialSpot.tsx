import React, {Component} from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import {translate} from '../../../util/translate';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import ItemSpecialSpot from './ItemSpecialSpot';
import {connect} from 'react-redux';
import {places} from '../../../redux';
import {actionMain} from '../../../util/mainActions';
class SpecialSpot extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    actionMain.loading(true);
    this.props.getLocationByProvince(this.props.idProvince);
  }
  itemPress = (item) => () => {
    this.props.navigation.navigate('SpotDetail', {item});
  };
  renderItem = ({item, index}) => {
    let _isFirstItem = index === 0;
    const {language} = this.props;
    return (
      <ItemSpecialSpot
        style={_isFirstItem ? {marginTop: wp('1.5')} : {marginTop: hp('2.5')}}
        source={{uri: item.Images[0]}}
        title={language == 'vi' ? item.vi.Title : item.en.Title}
        peopleLike={4}
        onPress={this.itemPress(item)}
      />
    );
  };
  render() {
    const {style, location} = this.props;
    return (
      <View style={style}>
        <Text style={styles.title}>{translate('specialSpot')}</Text>
        <FlatList
          data={location}
          renderItem={this.renderItem}
          extraData={this.props.language}
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
});
const mapStateFromProps = (state: any) => ({
  location: state.places.location,
  language: state.system.language,
});
export default connect(mapStateFromProps, {...places})(SpecialSpot);
