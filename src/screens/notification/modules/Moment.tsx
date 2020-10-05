import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import moment from 'moment';
class Moment extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    var today = new Date();
    var date = today.getHours()+'-'+(today.getMinutes()+1)+'-'+today.getSeconds();

    return (
      <View style={styles.MainContainer}>
        <Text>{date}</Text>
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
export default Moment;
