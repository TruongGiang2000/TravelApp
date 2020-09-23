import React, {Component} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Button} from 'react-native';
import PropTypes from 'prop-types';
import TraTe from '../components/TraTe';
class ButtonCustom extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      
  }
}

  render() {
     return (
          <TouchableOpacity style={[styles.MainContainer, this.props.style]}>
            <TraTe style={[styles.title,this.props.titleStyle]} i18nKey={this.props.title}/>
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
    fontFamily: 'roboto-slab-bold',
    textAlign: 'center',
  }
});
export default ButtonCustom;
