import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  FlatList,
  Pressable,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import ButtonCustom from '../../components/ButtonCustom';
import Itenassess from '../../components/ItemRating';
import ItemUtilities from '../../components/ItemUtilities';
import ItemImage from '../../components/ItemImage';
import SlideShow from '../../components/SlideShow';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {translate} from '../../util/translate';
import {withPages} from '../../util/withPages';
import {connect} from 'react-redux';
import {hotels} from '../../redux';
import {actionMain} from '../../util/mainActions';
import DatePicker from 'react-native-calendar-datepicker';
import ModalCustom from 'react-native-modal';
import ModalImage from './ModalImage';

class HotelDetail extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      data: props.route.params.item,
      lineOfContent: 5,
      isShow: false,
      date: '',
    };
  }
  renderItem = ({item}) => {
    return <ItemUtilities title={item.Vi_name} source={{uri: item.Icon}} />;
  };
  _navigateChooseRoom = () => {
    this.props.navigation.navigate('ChooseRoom', {
      idHotel: this.state.data._id,
      imageHotel: this.state.data.Images[0],
    });
  };
  renderModalImage = ({item}) => {
    return (
      <ModalImage
        style={styles.modalItemImage}
        source={{uri: item.toString()}}
        onPressItem={this.onClose}
      />
    );
  };
  renderItemImage = ({item}) => {
    return (
      <ItemImage
        style={styles.itemImage}
        source={{uri: item.toString()}}
        isShow={true}
        onPress={this.showModalImage}
      />
    );
  };
  showModalImage = () => {
    this.setState({isShow: true});
  };
  onClose = () => {
    this.setState({isShow: false});
  };
  onPressDetail = () => {
    if (this.state.lineOfContent == 50) {
      return this.setState({lineOfContent: 5});
    }
    this.setState({lineOfContent: 50});
  };
  componentDidMount() {
    const {data} = this.state;
    actionMain.loading(true);
    this.props.getCoveById({idConve: data.ID_Convenient});
  }
  onPressClose = () => {
    this.props.navigation.goBack();
  };
  selectDate = (date: Date) => {
    this.setState({date: date});
  };
  render() {
    const {language, conveById} = this.props;
    const {data, lineOfContent, isShow} = this.state;
    let isVi = language == 'vi';
    let isMaxNumberOfLine = lineOfContent == 50;
    return (
      <View style={styles.MainContainer}>
        <ScrollView>
          <SlideShow
            onPressClose={this.onPressClose}
            isHotel={true}
            data={data.Images}
          />
          <View style={styles.viewTop}>
            <Text style={styles.title}>
              {isVi ? data.vi.Name : data.en.Name}
            </Text>
            <Text style={styles.price}>{`${data.Lowest_Price}/${translate(
              'night',
            )}`}</Text>
            <ButtonCustom
              title={translate('endow')}
              style={styles.buttoncustom}
              titleStyle={styles.txtBtnStyle}
            />
            <Text style={styles.content} numberOfLines={lineOfContent}>
              {isVi ? data.vi.Content : data.en.Content}
            </Text>
            <Text onPress={this.onPressDetail} style={styles.detail}>
              {translate(isMaxNumberOfLine ? 'show_less' : 'detail')}
            </Text>
            <Itenassess
              style={styles.itemRate}
              content={translate('review')}
              numberOfReview={10}
              starCount={4}
            />
            <Text style={styles.convenient}>{translate('convenient')}</Text>
            <FlatList
              style={styles.flatList}
              data={conveById}
              renderItem={this.renderItem}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
            <View style={styles.viewLine} />
            <Text style={styles.picture}>{translate('picture')}</Text>
            <FlatList
              style={styles.flatListItemImage}
              data={data.Images}
              renderItem={this.renderItemImage}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </View>
          <View style={[styles.viewLineBig, {marginTop: hp('3')}]} />
          <Feather
            name={'x'}
            size={wp('7')}
            color={'#A8B6C8'}
            style={styles.iconX}
          />
          <View style={styles.question}>
            <AntDesign
              name={'questioncircleo'}
              size={wp('4.5')}
              color={'#050505'}
              style={styles.iconQuestioncircleo}
            />
            <View style={styles.viewBottom}>
              <Text style={styles.textQuestion}>{translate('question')}</Text>
              <View style={styles.yesOrNo}>
                <Text style={[styles.textyesOrno, {marginRight: wp('6')}]}>
                  {translate('yes')}
                </Text>
                <Text style={styles.textyesOrno}>{translate('no')}</Text>
              </View>
            </View>
          </View>
        </ScrollView>
        <View style={styles.viewButon}>
          <View style={[styles.viewLineBig, {marginBottom: hp('1.5')}]} />
          <ButtonCustom
            title={translate('choosing_room')}
            titleStyle={styles.titleButtonStyle}
            onPress={this._navigateChooseRoom}
          />
        </View>
        <ModalCustom isVisible={isShow} onBackdropPress={this.onClose}>
          <FlatList
            style={styles.flatListItemImage}
            data={data.Images}
            renderItem={this.renderModalImage}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </ModalCustom>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.713726)',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  title: {
    fontSize: wp('5'),
    fontFamily: 'roboto-slab-bold',
    marginRight: wp('4'),
  },
  price: {
    fontSize: wp('4.5'),
    color: '#FA2A00',
    fontFamily: 'roboto-slab-bold',
    marginRight: wp('4'),
  },
  viewTop: {
    paddingLeft: wp('4'),
    paddingTop: wp('4'),
  },
  buttoncustom: {
    marginTop: hp('1'),
    width: wp('30'),
    paddingVertical: wp('1'),
    marginRight: wp('4'),
  },
  txtBtnStyle: {
    fontSize: wp('3.4'),
  },
  content: {
    marginTop: hp('1.5'),
    fontFamily: 'roboto-slab.regular',
    fontSize: wp('3.7'),
  },
  detail: {
    marginTop: hp('0.5'),
    color: '#0F00DA',
    fontFamily: 'roboto-slab-bold',
  },
  convenient: {
    fontFamily: 'roboto-slab-bold',
    fontSize: wp('5'),
    marginTop: hp('1.5'),
    marginRight: wp('4'),
  },
  allconvenient: {
    fontFamily: 'roboto-slab-bold',
    color: '#5C6979',
    textAlign: 'center',
    fontSize: wp('2.5'),
    marginVertical: hp('3'),
  },
  picture: {
    color: '#323B45',
    fontSize: wp('5'),
    fontFamily: 'roboto-slab-bold',
    marginTop: hp('1.5'),
    marginRight: wp('4'),
  },
  flatList: {
    marginVertical: hp('2'),
  },
  viewLine: {
    width: wp('80'),
    height: 1.5,
    backgroundColor: '#E4E6E8',
    alignSelf: 'center',
    marginVertical: hp('1'),
  },
  viewPicture: {
    paddingLeft: wp('5'),
    marginTop: hp('2'),
  },
  itemImage: {
    width: wp('18'),
    height: hp('11.5'),
    marginRight: wp('3.2'),
  },
  flatListItemImage: {
    marginTop: hp('1'),
  },
  viewButon: {
    width: wp('100'),
    backgroundColor: '#fff',
    paddingHorizontal: wp('2'),
    paddingBottom: wp('2'),
  },
  viewLineBig: {
    height: hp('1.5'),
    width: wp('100'),
    backgroundColor: '#E0E6EE',
  },
  question: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingLeft: wp('4'),
  },
  iconX: {
    alignSelf: 'flex-end',
    marginRight: wp('4'),
    marginTop: wp('2'),
  },
  viewBottom: {
    flex: 1,
    marginRight: wp('4'),
  },
  textQuestion: {
    color: '#353B50',
    fontSize: wp('5'),
    fontFamily: 'roboto-slab-bold',
  },
  iconQuestioncircleo: {
    marginRight: wp('2'),
    marginTop: hp('0.6'),
  },
  yesOrNo: {
    flexDirection: 'row',
    marginTop: hp('1'),
    alignItems: 'center',
    paddingBottom: hp('3'),
  },
  textyesOrno: {
    color: '#FA2A00',
    fontSize: wp('4.5'),
    fontFamily: 'roboto-slab-bold',
  },
  itemRate: {
    marginTop: hp('3'),
    marginRight: wp('4'),
  },
  titleButtonStyle: {
    fontFamily: 'roboto-slab-bold',
    fontSize: wp('4.2'),
  },
  modalItemImage: {
    //width: wp('18'),
    //height: hp('11.5'),
    marginRight: wp('3.2'),
  },
});
const mapStateFromProps = (state: any) => {
  return {
    conveById: state.hotel.conveById,
  };
};
export default connect(mapStateFromProps, {...hotels})(withPages(HotelDetail));
