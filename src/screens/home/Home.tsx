import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import StraAcitiIndi from '../../components/StraActivityIndicator';
class Home extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.MainContainer}>
        <StraAcitiIndi/>
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
export default Home;
