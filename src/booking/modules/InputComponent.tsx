import React, {Component} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  TextInput,
  Text,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import TraTe from '../../components/TraTe';

class InputComponent extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      isShow: this.props.isShow,

    };
  }

  render() {
    const {titleStyle,secureTextEntry, value,onChangeText, nkey,onBlur, placeholder, styleInput, maxLength, keyboardType} = this.props;
    return (
      <TouchableOpacity
        style={[styles.MainContainer, this.props.style]}>
            <TraTe
            style={[styles.title, titleStyle]}
            i18nKey={nkey}
          />
          
          <TextInput
                placeholder={placeholder}
                //placeholderTextColor={'#A8B6C8'}
                style={[styles.textInput, styleInput]}
                value={value}
                keyboardType={keyboardType}
                maxLength={maxLength}
                onBlur={onBlur}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
              />
             
              <View style={styles.view}/>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    top: wp('3')
  },
  title: {
    color: '#5c6979',
    fontSize: wp('3'),
    fontFamily: 'roboto-slab-light',
  },
  textInput:{
    position: "absolute",
    marginTop: hp('2'),
    fontSize: wp('4'),
    color:'#00162b',
    fontFamily: 'roboto-slab-bold',
    width: "100%",
  },
  view:{
    backgroundColor: '#000',
    height: hp('0.1'), 
    marginTop: wp('8')
  },
});
export default InputComponent;
