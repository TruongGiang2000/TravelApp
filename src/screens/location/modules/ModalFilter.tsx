import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import TraTe from '../../../components/TraTe';
import Button from '../../../components/ButtonCustom';
import {connect} from 'react-redux';
import {places} from '../../../redux';
class ModalFilter extends Component<any, any> {
  data: any;
  constructor(props) {
    super(props);
    this.state = {
      keyActiveArea: '',
      dataArea: [
        {
          key: 'North',
          titleKey: 'north',
        },
        {
          key: 'South',
          titleKey: 'south',
        },
        {
          key: 'Central',
          titleKey: 'central',
        },
        {
          key: 'West',
          titleKey: 'western',
        },
      ],
      dataTypeArea: [
        {
          key: 'Mountain',
          titleKey: 'moutain',
        },
        {
          key: 'Sea',
          titleKey: 'sea',
        },
        {
          key: 'Old town',
          titleKey: 'old_town',
        },
        {
          key: 'Relics',
          titleKey: 'relics',
        },
      ],
      active: {},
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
    const {active} = this.state;
    if (Object.values(active).some((it) => it === key)) {
      const filterItem = await Object.values(active).filter(
        (item) => item != key,
      );
      this.setState({active: filterItem});
      return;
    }
    this.setState((state: any) => ({active: {...state.active, [key]: key}}));
  };
  setAgain = () => {
    this.setState({keyActiveArea: '', active: {}});
  };
  searchProvinces = () => {
    const {active, keyActiveArea} = this.state;
    let array = [];
    Object.values(active).map((item) => {
      array.push(item);
    });
    this.data = {
      Area: keyActiveArea,
      TypesArea: array,
    };
    this.props.searchProvinces(this.data);
    this.props.onFindPress();
  };
  render() {
    const renderItemArea = ({item}) => {
      let activeItem = this.state.keyActiveArea === item.key;
      return (
        <TouchableOpacity onPress={this.activeArea(item.key)}>
          <TraTe
            style={activeItem ? styles.itemFilterActive : styles.itemFilter}
            i18nKey={item.titleKey}
          />
        </TouchableOpacity>
      );
    };
    const renderItemTypeArea = ({item, index}) => {
      const {active} = this.state;
      let activeItem = Object.values(active).some((it) => it === item.key);
      return (
        <TouchableOpacity onPress={this.activeTypeArea(item.key, index)}>
          <TraTe
            style={activeItem ? styles.itemFilterActive : styles.itemFilter}
            i18nKey={item.titleKey}
          />
        </TouchableOpacity>
      );
    };
    return (
      <View style={styles.MainContainer}>
        <ScrollView style={styles.viewTop}>
          <View style={styles.rowHeader}>
            <TouchableOpacity onPress={this.props.backSpace}>
              <MaterialIcon
                name={'keyboard-backspace'}
                size={wp('7')}
                color={'#000'}
              />
            </TouchableOpacity>
            <TraTe i18nKey={'discover'} style={styles.title} />
            <Text></Text>
          </View>
          <TraTe style={styles.titleFilter} i18nKey={'title_filter'} />
          <TraTe style={styles.textCondition} i18nKey={'area'} />
          <FlatList
            data={this.state.dataArea}
            horizontal={true}
            renderItem={renderItemArea}
            style={styles.flatListArea}
          />
          <TraTe i18nKey={'featured'} style={styles.textCondition} />
          <FlatList
            data={this.state.dataTypeArea}
            horizontal={true}
            renderItem={renderItemTypeArea}
            style={styles.flatListArea}
          />
        </ScrollView>
        <View style={styles.viewBottom}>
          <Button
            style={styles.styleButton}
            onPress={this.searchProvinces}
            title={'find'}
            titleStyle={styles.titleButtonStyle}
          />
          <TouchableOpacity onPress={this.setAgain}>
            <TraTe style={styles.set_again} i18nKey={'set_again'} />
          </TouchableOpacity>
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
