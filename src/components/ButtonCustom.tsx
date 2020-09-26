import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import TraTe from './TraTe';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
class ButtonCustom extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      
  }
}

  render() {
     return (
          <TouchableOpacity style={[styles.MainContainer, this.props.style]} onPress={this.props.onPress}>
            <TraTe style={[styles.title,this.props.titleStyle]} i18nKey={this.props.title}/>
          </TouchableOpacity>
     )
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    backgroundColor: '#FA2A00',
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  }
});
export default ButtonCustom;
