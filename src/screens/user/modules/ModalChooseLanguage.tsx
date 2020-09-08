import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
class ModalChooseLanguage extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.MainContainer}>
        <Text>index</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    justifyContent: 'flex-end',
  },
});
export default ModalChooseLanguage;
