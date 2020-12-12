import React, {Component} from 'react';
import {StyleSheet, Pressable, View, TextInput, Text} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

class InputComponent extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      onFocus: false,
      valid: false,
    };
  }
  onFocus = () => {
    this.setState({onFocus: true});
  };
  onBlur = () => {
    this.setState({onFocus: false});
  };
  onChangeText = async (value: any) => {
    const {regex} = this.props;
    const valid = regex.test(value);
    this.setState({valid: !valid});
    this.props.onChangeText(value);
  };
  render() {
    const {onFocus, valid} = this.state;
    const {labelStyle, label, styleInput, style, txtError, defaultValue} = this.props;
    return (
      <Pressable style={style}>
        <Text
          style={[
            valid
              ? [styles.label, {color: '#ED4337'}]
              : onFocus
              ? [styles.label, {color: '#0052A2'}]
              : styles.label,
            labelStyle,
          ]}>
          {label}
        </Text>

        <TextInput
          {...this.props}
          style={[
            valid
              ? [styles.textInput, {borderBottomColor: '#ED4337'}]
              : onFocus
              ? [styles.textInput, {borderBottomColor: '#3B00DD'}]
              : styles.textInput,
            styleInput,
          ]}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          onChangeText={this.onChangeText}
          defaultValue={defaultValue}
        />
        {valid && <Text style={styles.txtError}>{txtError}</Text>}
      </Pressable>
    );
  }
}
const styles = StyleSheet.create({
  label: {
    color: '#5c6979',
    fontSize: wp('3'),
    fontFamily: 'roboto-slab.regular',
  },
  textInput: {
    fontSize: wp('4'),
    color: '#00162b',
    fontFamily: 'roboto-slab-bold',
    borderBottomWidth: 2,
    borderBottomColor: 'rgba(0, 0, 0, 0.541176)',
    height: hp('5'),
    paddingBottom: wp('-1'),
  },
  txtError: {
    color: '#ED4337',
    fontSize: wp('3'),
    fontFamily: 'roboto-slab.regular',
    marginTop: hp('1'),
  },
});
export default InputComponent;
