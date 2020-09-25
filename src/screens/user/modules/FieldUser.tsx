import React, {Component} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import TraTe from '../../../components/TraTe';
class FieldUser extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {style, titleKey, content, onPress, contentKey} = this.props;
    return (
      <TouchableOpacity style={style} onPress={onPress}>
        <TraTe i18nKey={titleKey} style={styles.title} />
        {contentKey ? (
          <TraTe style={styles.content} i18nKey={contentKey} />
        ) : (
          <Text style={styles.content}>{content}</Text>
        )}
        <View style={styles.line} />
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  title: {
    color: '#5C6979',
    fontFamily: 'roboto-slab-bold',
    fontSize: wp('3.8'),
  },
  content: {
    color: '#323B45',
    fontFamily: 'roboto-slab.regular',
    fontSize: wp('3.8'),
  },
  line: {
    marginTop: hp('2'),
    width: '100%',
    height: 1.5,
    backgroundColor: '#E0E6EE',
  },
});
export default FieldUser;
