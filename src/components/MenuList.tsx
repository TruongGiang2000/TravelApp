import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, View, FlatList} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import ModalCustom from 'react-native-modal';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import ModalChooseLang from '../screens/user/modules/ModalChooseLang';

class menuList extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false,
    };
  }
   

  render() {
    return (
      <View>
        <Icon name="downsquare" size={30} color="#000" onPress={{}} />
        <ModalCustom >

          <ModalChooseLang />
        </ModalCustom>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
  },
});
export default menuList;
