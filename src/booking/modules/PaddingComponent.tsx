import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import TraTe from '../../components/TraTe';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
class PaddingComponent extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {nkey, title, style, styletitle, styletext} = this.props;
    return (
      <View style={[styles.MainContainer, style]}>
        <TraTe
            style={[styles.title, styletitle]}
            i18nKey={nkey}/>
          <Text style={[styles.titles, styletext]}>{title}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    textAlign: "center"
  },
  title:{
    textAlign: 'left',
    position: 'absolute',
    color: '#00162b',
    fontFamily: 'roboto-slab-bold',
    fontSize: wp('3')
  },
  titles:{
    textAlign: 'right',
    color: '#00162b',
    fontFamily: 'roboto-Slab-light',
    fontSize: wp('3')
  },
});
export default PaddingComponent;
