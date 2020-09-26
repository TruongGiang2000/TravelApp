import React, { Component, useState } from 'react';
import { Text, View } from 'react-native';
import Stepindicator from 'react-native-step-indicator';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {getStepIndicatorIconConfig, customStyles} from '../constants/systems/step';


const renderStepIndicator = (params: any) => (
  <Icon {...getStepIndicatorIconConfig(params)} />
);
// const CurrentPosition = ({
//   setCurrentPosition:{currentPosition: +1}
// })
class HeaderStep extends Component<any, any> {
    
  constructor(props) {
    super(props);
    this.state = {
        currentPosition: 1
    };
  }
  
  render() {
     
    return (
      <View >
       <Stepindicator
           customStyles={customStyles}
           currentPosition={this.state.currentPosition}
           stepCount={3}
           renderStepIndicator={renderStepIndicator}  
           
      />
      
      </View>
    );
  }
}
export default HeaderStep;