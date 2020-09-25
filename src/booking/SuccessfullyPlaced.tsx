import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, View, Text, CheckBox} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import TraTe from '../components/TraTe';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import InputComponent from './modules/InputComponent';
import ButtonCustom from '../components/CustomButton';
import ModalCustom from 'react-native-modal';
import ModalSuccessfull from '../booking/modules/ModalSuccsessfull';
class SuccessfullyPlaced extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
        isShow: true,
    };
  }
  showModalSuccessfully = () => {
    this.setState({isShow: true});
  };
  onClose = () => {
    this.setState({isShow: false});
  };
  render() {
    const { isShow} = this.state;
    const {titleStyle, onPress} = this.props;
    return (
      <TouchableOpacity style={[styles.MainContainer, this.props.style]}>
        <ModalCustom isVisible={isShow} onBackdropPress={this.onClose}>
          <ModalSuccessfull show={isShow} />
        </ModalCustom>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});
export default SuccessfullyPlaced;
