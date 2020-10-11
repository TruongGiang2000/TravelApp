import React, {Component} from 'react';
import {View, StyleSheet, Text, Pressable} from 'react-native';
import Stepindicator from 'react-native-step-indicator';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  getStepIndicatorIconConfig,
  customStyles,
} from '../../../constants/systems/step';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {} from 'react-native-gesture-handler';
const renderStepIndicator = (params: any) => (
  <Icon {...getStepIndicatorIconConfig(params)} />
);
class HeaderBooking extends Component<any, any> {
  constructor(props) {
    super(props);
  }
  onPressBackSpace = () => {
    this.props.navigation.goBack();
  };
  render() {
    const {title, currentPosition} = this.props;
    return (
      <View style={styles.header}>
        <Pressable onPress={this.onPressBackSpace}>
          <Icon name="keyboard-backspace" size={wp('7')} color="#000" />
        </Pressable>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.styleStep}>
          <Stepindicator
            customStyles={customStyles}
            currentPosition={currentPosition}
            stepCount={3}
            renderStepIndicator={renderStepIndicator}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  header: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: hp('2'),
    paddingHorizontal: wp('4'),
    backgroundColor: '#ffffff',
  },
  title: {
    fontFamily: 'roboto-slab-bold',
    color: '#00162b',
    fontSize: wp('4'),
  },
  styleStep: {
    width: wp('30'),
    marginRight: wp('4'),
  },
});
export default HeaderBooking;
