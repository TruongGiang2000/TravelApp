import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import ButtonCustom from '../../../components/ButtonCustom';
import {translate} from '../../../components/translate';
class ModalSuccessFully extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      this.props.show && (
        <View style={styles.modalStyle}>
          <View style={styles.formSuccessfull}>
            <Text style={styles.successfull}>
              {translate('successfullyplaced')}
            </Text>
            <Text style={styles.content}>{translate('choosetocontinue')}</Text>
            <View style={[styles.rowButton]}>
              <ButtonCustom
                title={translate('next')}
                titleStyle={{fontSize: wp('4')}}
                style={styles.buttonNext}
              />
              <ButtonCustom
                title={translate('close')}
                style={styles.buttonClose}
                titleStyle={styles.closeText}
                onPress={this.props.onPressClose}
              />
            </View>
          </View>
        </View>
      )
    );
  }
}
const styles = StyleSheet.create({
  modalStyle: {
    flex: 1,
    justifyContent: 'center',
  },
  formSuccessfull: {
    paddingVertical: hp('3'),
    paddingHorizontal: wp('6'),
    backgroundColor: '#fff',
    borderRadius: wp('3'),
  },
  successfull: {
    color: '#008A1F',
    fontFamily: 'roboto-slab-bold',
    fontSize: wp('5.2'),
    alignSelf: 'center',
  },
  content: {
    fontSize: wp('4'),
    fontFamily: 'roboto-slab-bold',
    color: '#323B45',
    marginTop: hp('3'),
    alignSelf: 'center',
  },
  rowButton: {
    flexDirection: 'row',
    marginTop: hp('2'),
    alignItems: 'center',
    alignSelf: 'center',
  },
  closeText: {
    fontSize: wp('4'),
    color: '#323B45',
    fontFamily: 'roboto-slab-bold',
  },
  buttonNext: {
    paddingVertical: wp('2'),
    marginRight: wp('5'),
  },
  buttonClose: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: wp('2'),
    paddingHorizontal: wp('10'),
    paddingVertical: wp('2'),
  },
});
export default ModalSuccessFully;
