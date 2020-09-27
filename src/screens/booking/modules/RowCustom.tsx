import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
class RowCustom extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {title, content, style, styleTitle, styleContent} = this.props;
    return (
      <View style={[styles.MainContainer, style]}>
        <Text style={[styles.title, styleTitle]}>{title}</Text>
        <Text style={[styles.content, styleContent]}>{content}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: '#00162b',
    fontFamily: 'roboto-slab-bold',
    fontSize: wp('3.6'),
  },
  content: {
    color: '#00162b',
    fontFamily: 'roboto-slab.regular',
    fontSize: wp('3.6'),
  },
});
export default RowCustom;
