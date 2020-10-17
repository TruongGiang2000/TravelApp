import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import StraActivityIndicator from '../../components/StraActivityIndicator';
class Home extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.MainContainer}>
        <StraActivityIndicator />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
  },
});
export default Home;
