import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
class Hotel extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.MainContainer}>
        <Text>Hotel</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Hotel;
