import React, {Component} from 'react';
import {View, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import TraTe from '../../../components/TraTe';
import ItemUser from './ItemUser';
import ItemRow from './ItemRow';
import Button from '../../../components/ButtonCustom';
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
    return <ItemRow style={styles.itemRow} titleKey={item.key} />;
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
          <TraTe style={styles.title} i18nKey={'manage_account'} />
          <ItemUser
            name={'Nguyen Vu Truong Giang'}
            source={require('../../../assets/images/Bitmap.png')}
            core={200}
          />
        </View>
        <View style={styles.viewContent}>
          <FlatList data={this.state.data} renderItem={this.renderItem} />
        </View>
        <Button style={styles.button} title={'logout'} />
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
