import React, {Component} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image, ActivityIndicator} from 'react-native';
import PropTypes from 'prop-types';
import TraTe from '../components/TraTe';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

class ButtonCustom extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      source: this.props.source,
      circleImage: this.props.circleImage,
      border: this.props.size /2,
      size: props.size,
  }
}
  render() {
     return (
          <TouchableOpacity style={[styles.MainContainer, this.props.style]}>
            <ActivityIndicator size={100} />
              <Image 
              {...this.props}
                source={this.state.source}
                style={[
                  {
                  width : this.state.size,
                  height: this.state.size,
                  borderRadius: this.state.border,
                },
                this.props.style
                ]}
               
              />
          </TouchableOpacity>
     )
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    // justifyContent: 'center',
  },
});
export default ButtonCustom;
