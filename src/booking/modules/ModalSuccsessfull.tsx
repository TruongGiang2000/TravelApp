import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import TraTe from '../../components/TraTe';
import ButtonCustom from '../../components/ButtonCustom';
class ModalChooseLang extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {language} = this.props;
    return (
      this.props.show && (
        <View style={styles.modalStyle}>
          <View style={styles.formSuccessfull}>
            <TraTe style={styles.successfull} i18nKey={'successfullyplaced'} />
            <View style={[styles.title]}>
              <TraTe style={styles.content} i18nKey={'choosetocontinue'} />
            </View>
            <View style={[styles.styleButton]}>
              <ButtonCustom
                title="next"
                style={{height: hp('7'), width: wp('40')}}
                titleStyle={{fontSize: wp('5')}}
              />
              <ButtonCustom
                title="close"
                style={{
                  height: hp('7'),
                  width: wp('40'),
                  left: wp('42'),
                  position: 'absolute',
                  backgroundColor: '#0000',
                  shadowColor: "#000",
                  elevation: 2,
                }}
                titleStyle={{fontSize: wp('5'), color: '#000'}}
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
    paddingBottom: hp('5'),
  },
  formSuccessfull: {
    paddingVertical: hp('2'),
    paddingHorizontal: wp('4'),
    backgroundColor: '#fff',
    borderRadius: wp('3'),
    width: wp('90'),
    height: hp('30'),
  },
  successfull: {
    color: '#008A1F',
    fontFamily: 'roboto-slab-bold',
    fontSize: wp('6'),
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
  content: {
    fontSize: wp('4'),
    fontFamily: 'roboto-slab-bold',
    color: '#323B45',
  },
  styleButton: {
    top: wp('10'),
  },
  title: {
    top: wp('5'),
  },
});
export default ModalChooseLang;
