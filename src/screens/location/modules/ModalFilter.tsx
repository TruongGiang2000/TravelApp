import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  Pressable,
  ScrollView,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import ButtonCustom from '../../../components/ButtonCustom';
import {connect} from 'react-redux';
import {places} from '../../../redux';
import {forEach} from 'lodash';
import {translate} from '../../../components/translate';
import {dataArea, dataTypesArea} from '../../../constants/systems/main';
class ModalFilter extends Component<any, any> {
  data: any;
  constructor(props) {
    super(props);
    this.state = {
      keyActiveArea: this.props.keyActiveArea,
      activeTypesArea: this.props.activeTypesArea,
    };
  }
  activeArea = (key: any) => () => {
    const {keyActiveArea} = this.state;
    if (key === keyActiveArea) {
      this.setState({keyActiveArea: ''});
      return;
    }
    this.setState({keyActiveArea: key});
  };
  activeTypeArea = (key: any, index: number) => async () => {
    const {activeTypesArea} = this.state;
    if (Object.values(activeTypesArea).some((it) => it === key)) {
      const filterItem = await Object.values(activeTypesArea).filter(
        (item) => item != key,
      );
      this.setState({activeTypesArea: filterItem});
      return;
    }
    this.setState((state: any) => ({
      activeTypesArea: {...state.activeTypesArea, [key]: key},
    }));
  };
  setAgain = () => {
    this.setState({keyActiveArea: '', activeTypesArea: {}});
  };
  searchProvinces = () => {
    const {activeTypesArea, keyActiveArea} = this.state;
    let array = [];
    forEach(Object.values(activeTypesArea), (item) => {
      array.push(item);
    });
    this.data = {
      Area: keyActiveArea,
      TypesArea: array,
    };
    this.props.searchProvinces(this.data);
    this.props.onFindPress(keyActiveArea, activeTypesArea);
  };
  backSpace = () => {
    const {keyActiveArea, activeTypesArea} = this.state;
    this.props.backSpace(keyActiveArea, activeTypesArea);
  };
  render() {
    const renderItemArea = ({item}) => {
      let activeItem = this.state.keyActiveArea === item.key;
      return (
        <Pressable onPress={this.activeArea(item.key)}>
          <Text
            style={activeItem ? styles.itemFilterActive : styles.itemFilter}>
            {translate(item.titleKey)}
          </Text>
        </Pressable>
      );
    };
    const renderItemTypeArea = ({item, index}) => {
      const {activeTypesArea} = this.state;
      let activeItem = Object.values(activeTypesArea).some(
        (it) => it === item.key,
      );
      return (
        <Pressable onPress={this.activeTypeArea(item.key, index)}>
          <Text
            style={activeItem ? styles.itemFilterActive : styles.itemFilter}>
            {translate(item.titleKey)}
          </Text>
        </Pressable>
      );
    };
    return (
      <View style={styles.MainContainer}>
        <ScrollView style={styles.viewTop}>
          <View style={styles.rowHeader}>
            <Pressable onPress={this.backSpace}>
              <MaterialIcon
                name={'keyboard-backspace'}
                size={wp('7')}
                color={'#000'}
              />
            </Pressable>
            <Text style={styles.title}>{translate('discover')}</Text>
            <Text></Text>
          </View>
          <Text style={styles.titleFilter}>{translate('title_filter')}</Text>
          <Text style={styles.textCondition}>{translate('area')}</Text>
          <FlatList
            data={dataArea}
            horizontal={true}
            renderItem={renderItemArea}
            style={styles.flatListArea}
          />
          <Text style={styles.textCondition}>{translate('featured')}</Text>
          <FlatList
            data={dataTypesArea}
            horizontal={true}
            renderItem={renderItemTypeArea}
            style={styles.flatListArea}
          />
        </ScrollView>
        <View style={styles.viewBottom}>
          <ButtonCustom
            style={styles.styleButton}
            onPress={this.searchProvinces}
            title={translate('find')}
            titleStyle={styles.titleButtonStyle}
          />
          <Pressable onPress={this.setAgain}>
            <Text style={styles.set_again}>{translate('set_again')}</Text>
          </Pressable>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    paddingBottom: hp('3'),
    paddingTop: hp('1.5'),
    paddingHorizontal: wp('6'),
  },
  viewTop: {
    flex: 1,
  },
  rowHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'roboto-slab-bold',
    fontSize: wp('4'),
    color: '#323B45',
  },
  titleFilter: {
    fontFamily: 'roboto-slab-bold',
    fontSize: wp('4.2'),
    marginTop: hp('2'),
    color: '#323B45',
  },
  textCondition: {
    fontFamily: 'roboto-slab-bold',
    fontSize: wp('3.8'),
    marginTop: hp('3'),
    color: '#323B45',
  },
  itemFilter: {
    padding: wp('3'),
    color: '#323B45',
    fontFamily: 'roboto-slab.regular',
    backgroundColor: 'rgba(168, 182, 200, 0.14902)',
    marginRight: wp('3'),
    borderRadius: 10,
    fontSize: wp('3.6'),
  },
  itemFilterActive: {
    color: '#323B45',
    fontFamily: 'roboto-slab.regular',
    backgroundColor: '#ffffff',
    marginRight: wp('3'),
    borderRadius: 10,
    fontSize: wp('3.6'),
    borderWidth: 2,
    borderColor: '#FA2A00',
    textAlign: 'center',
    paddingHorizontal: wp('3'),
    paddingBottom: hp('0.8'),
    paddingTop: wp('3'),
  },
  flatListArea: {
    marginTop: hp('2'),
  },
  viewBottom: {
    justifyContent: 'flex-end',
  },
  titleButtonStyle: {
    fontSize: wp('4'),
  },
  styleButton: {
    paddingVertical: hp('2'),
  },
  set_again: {
    fontSize: wp('3.8'),
    fontFamily: 'roboto-slab-bold',
    color: '#323B45',
    marginTop: wp('3'),
    alignSelf: 'center',
  },
});
const mapStateFromProps = (state) => {
  return {
    language: state.system.language,
  };
};
export default connect(mapStateFromProps, {...places})(ModalFilter);
