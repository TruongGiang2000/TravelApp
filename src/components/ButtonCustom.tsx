import { title } from 'process';
import React, {Component} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Button} from 'react-native';
class ButtonCustom extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      
  }
}

  render() {
    const {title} = this.props;
     return (
          <TouchableOpacity style={[styles.MainContainer, this.props.style]}>
            <Text style={[styles.title,this.props.titleStyle]} >
              {title}
            </Text>
          </TouchableOpacity>
     )
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    backgroundColor: '#FA2A00',
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  }
});
export default ButtonCustom;
