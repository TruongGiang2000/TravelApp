import React, {Component, useState} from 'react';
import {View, StyleSheet, Text, Dimensions} from 'react-native';
import Stepindicator from 'react-native-step-indicator';
const labels = [""," "," "];
    const customStyles = {
        stepIndicatorSize: 25,
        currentStepIndicatorSize:30,
        separatorStrokeWidth: 2,
        currentStepStrokeWidth: 3,
        stepStrokeCurrentColor: '#fe7013',
        stepStrokeWidth: 3,
        stepStrokeFinishedColor: '#fe7013',
        stepStrokeUnFinishedColor: '#aaaaaa',
        separatorFinishedColor: '#fe7013',
        separatorUnFinishedColor: '#aaaaaa',
        stepIndicatorFinishedColor: '#fe7013',
        stepIndicatorUnFinishedColor: '#ffffff',
        stepIndicatorCurrentColor: '#ffffff',
        stepIndicatorLabelFontSize: 13,
        currentStepIndicatorLabelFontSize: 13,
        stepIndicatorLabelCurrentColor: '#fe7013',
        stepIndicatorLabelFinishedColor: '#ffffff',
        stepIndicatorLabelUnFinishedColor: '#aaaaaa',
        labelColor: '#999999',
        labelSize: 13,
        currentStepLabelColor: '#fe7013'
  }
class StepIndicator extends Component<any, any> {
    
  constructor(props) {
    super(props);
    this.state = {
        currentPosition: 0
    };
  }
  onPageChange(position){
      this.setState({currentPosition: position});
  }
  render() {

    return (
      <View style={styles.MainContainer}>
       <Stepindicator
           customStyles={customStyles}
           currentPosition={this.state.currentPosition}
           labels={labels}
      />
      
      </View>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
  },
});
export default StepIndicator;
