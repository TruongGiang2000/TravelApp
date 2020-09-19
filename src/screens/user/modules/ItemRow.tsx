import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import TraTe from '../../../components/TraTe';
import Entypo from 'react-native-vector-icons/Entypo';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
class ItemRow extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {style, titleKey, title, titleStyle} = this.props;
    return (
      <View style={[styles.MainContainer, style]}>
        <TraTe style={[styles.title, titleStyle]} i18nKey={titleKey}>
          {title}
        </TraTe>
        <Entypo
          name={'chevron-right'}
          color={'rgba(0, 0, 0, 0.541176)'}
          size={wp('5')}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: 'roboto-slab.regular',
    fontSize: wp('3.8'),
    color: '#323B45',
  },
});
export default ItemRow;
