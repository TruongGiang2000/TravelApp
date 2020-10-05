import React, {Component} from 'react';
import {View, StyleSheet, FlatList, TouchableOpacity, Text} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import ItemUser from './ItemUser';
import ItemRow from './ItemRow';
import ButtonCutom from '../../../components/ButtonCustom';
import {translate} from '../../../components/translate';
class ManageAccountModal extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {key: 'update_personalInfo'},
        {key: 'history_points'},
        {key: 'change_password'},
        {key: 'history_booking'},
      ],
    };
  }
  renderItem = ({item}) => {
    return <ItemRow style={styles.itemRow} title={translate(item.key)} />;
  };
  render() {
    return (
      <View style={styles.MainContainer}>
        <View style={styles.viewRowHeader}>
          <TouchableOpacity onPress={this.props.onPressBackSpace}>
            <MaterialIcon
              name={'keyboard-backspace'}
              size={wp('7')}
              color={'#000'}
            />
          </TouchableOpacity>
          <Text style={styles.title}>{translate('manage_account')}</Text>
          <ItemUser
            name={'Nguyen Vu Truong Giang'}
            source={require('../../../assets/images/Bitmap.png')}
            core={300}
          />
        </View>
        <View style={styles.viewContent}>
          <FlatList data={this.state.data} renderItem={this.renderItem} />
        </View>
        <ButtonCutom style={styles.button} title={translate('logout')} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingVertical: hp('1.5'),
  },
  viewRowHeader: {
    paddingHorizontal: wp('4.3'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: 'rgba(168, 182, 200, 0.301961)',
    borderBottomWidth: 1,
    paddingBottom: hp('0.5'),
  },
  title: {
    fontFamily: 'roboto-slab-bold',
    fontSize: wp('4'),
  },
  viewContent: {
    paddingLeft: wp('4.3'),
    paddingRight: wp('9'),
  },
  itemRow: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(168, 182, 200, 0.301961)',
    paddingVertical: wp('3'),
  },
  button: {
    alignSelf: 'center',
    width: wp('80'),
    marginTop: hp('3.3'),
  },
});
export default ManageAccountModal;
