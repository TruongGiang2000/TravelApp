import React, {Component} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
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
      <TouchableOpacity
        style={[styles.MainContainer, this.props.style]}
        onPress={onPress}>
        <ActivityIndicator size={100} />
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
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
  },
});
export default CircleImage;
