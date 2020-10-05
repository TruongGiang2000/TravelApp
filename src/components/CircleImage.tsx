import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, Image} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
class CircleImage extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      border: this.props.size / 2,
    };
  }
  render() {
    const {source, size, onPress, styleImage} = this.props;
    return (
      <TouchableOpacity style={this.props.style} onPress={onPress}>
        <Image
          {...this.props}
          source={source}
          style={[
            {
              width: size || wp('20'),
              height: size || wp('20'),
              borderRadius: this.state.border || wp('20') / 2,
            },
            styleImage,
          ]}
        />
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({});
export default CircleImage;
