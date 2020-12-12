import React, {Component} from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import ItemImage from '../../../components/ItemImage';
import {translate} from '../../../util/translate';
import ModalCustom from 'react-native-modal';
import ModalImage from './ModalImage';

class ProvinceImageList extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      isShowModal: false,
    };
  }
  showModalImage = () => {
    this.setState({isShowModal: true});
  };
  onClose = () => {
    this.setState({isShowModal: false});
    console.log('aloalo');
  };
  renderModalImage = ({item}) => {
    return (
      <ModalImage
        style={styles.modalItemImage}
        source={{uri: item.toString()}}
      />
    );
  };
  renderItem = ({item}) => {
    return (
      <ItemImage
        style={styles.containerItem}
        source={{uri: item}}
        isShow={true}
        onPress={this.showModalImage}
      />
    );
  };
  render() {
    const {style, data} = this.props;
    const {isShowModal} = this.state;
    return (
      <View style={style}>
        <Text style={styles.title}>{translate('image')}</Text>
        <FlatList
          data={data}
          renderItem={this.renderItem}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
        {isShowModal && (
          <ModalCustom onBackdropPress={this.onClose} isVisible={isShowModal}>
            <View>
            <FlatList
              data={data}
              renderItem={this.renderModalImage}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
            </View>
          </ModalCustom>
        )}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  title: {
    fontFamily: 'roboto-slab-bold',
    color: '#323B45',
    fontSize: wp('4.2'),
    marginBottom: hp('0.5'),
  },
  containerItem: {
    marginRight: wp('3'),
    width: wp('15'),
    height: hp('10'),
  },
  modalItemImage: {
    width: wp('90'),
    height: hp('60'),
    marginRight: wp('3.2'),
    borderRadius: wp('5'),
  },
});
export default ProvinceImageList;
