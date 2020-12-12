import React, {Component} from 'react';
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  FlatList,
  Pressable,
} from 'react-native';
import Kindofroom from '../home/modules/kindofroom';
import {translate} from '../../util/translate';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {connect} from 'react-redux';
import {hotels} from '../../redux';
import {actionMain} from '../../util/mainActions';
import shadow from '../../util/shadow';
class ChooseRoom extends Component<any, any> {
  constructor(prop) {
    super(prop);
    this.state = {
      idHotel: this.props.route.params.idHotel,
      imageHotel: this.props.route.params.imageHotel,
    };
  }
  componentDidMount() {
    actionMain.loading(true);
    this.props.getTypeRoomByHol(this.state.idHotel);
  }
  onPressItem = (_id) => () => {
    this.props.navigation.navigate('Booking', {_id});
  };
  renderItem = ({item}) => (
    <Kindofroom
      source={{uri: item.Images[0]}}
      size={`${item.Acreage}m2`}
      bed={item.vi.Bed}
      amount={item.People}
      title={item.vi.Name}
      policy={translate('policy_cancel')}
      quantum={translate('desc_empty_room').format(item.Empty_Room)}
      internet={translate('free_internet')}
      iconinternet={require('../../assets/images/shape.png')}
      isShow={true}
      containerStyle={{marginTop: hp('-10')}}
      onPress={this.onPressItem(item._id)}
    />
  );
  render() {
    const {typeRoom} = this.props;
    const {imageHotel} = this.state;
    return (
      <ImageBackground
        source={{uri: imageHotel}}
        style={styles.ImageBackground}>
        <View style={styles.container}>
          <Pressable
            style={styles.Icon}
            onPress={() => this.props.navigation.goBack()}>
            <MaterialIcon
              name={'keyboard-backspace'}
              size={wp('7')}
              color={'#000'}
            />
          </Pressable>

          <FlatList
            data={typeRoom}
            renderItem={this.renderItem}
            horizontal={true}
          />
          <View style={styles.title}>
            <Text style={styles.NumberTyperoom}>
              {translate('numbertyperoom').format(typeRoom?.length)}
            </Text>
          </View>
        </View>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  ImageBackground: {
    width: '100%',
    height: '100%',
  },
  NameTypeRoom: {
    fontFamily: 'roboto-slab-bold',
    fontSize: wp('8'),
    color: '#FFFFFF',
  },
  NumberTyperoom: {
    color: '#FFFFFF',
    fontSize: wp('5'),
    fontFamily: 'roboto-slab-bold',
  },
  Icon: {
    alignSelf: 'flex-start',
    marginLeft: wp('2'),
  },
  title: {
    marginTop: hp('2'),
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: hp('3'),
  },
});
const mapStateFromProps = (state: any) => {
  return {
    typeRoom: state.hotel.typeRoom,
  };
};
export default connect(mapStateFromProps, hotels)(ChooseRoom);
