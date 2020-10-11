import {title} from 'process';
import React, {Component} from 'react';
import {StyleSheet, Pressable, Text} from 'react-native';
class CustomArmorial extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Pressable style={[styles.MainContainer, this.props.style]}>
        <Text style={[styles.title, this.props.titleStyle]}>{title}</Text>
      </Pressable>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 8,
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'roboto-slab-light',
  },
});
export default CustomArmorial;
