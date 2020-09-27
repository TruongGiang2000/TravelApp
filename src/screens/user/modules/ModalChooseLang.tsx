import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {translate, configTranslation} from '../../../components/translate';
import {connect} from 'react-redux';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import {system, places} from '../../../redux/';
import store from '../../../redux/store';
class ModalChooseLang extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {};
  }
  setLanguage = (language: any) => () => {
    this.props.changeLanguages(language);
  };
  componentDidUpdate(preProps: any) {
    if (this.props.language !== preProps.language) {
      const placesStore: any = store.getState().places;
      const {
        mountainProvinces,
        offerProvinces,
        famousProvinces,
        searchingProvinces,
      } = placesStore;
      let initSearchingProvinces = searchingProvinces;
      if (initSearchingProvinces === undefined) {
        initSearchingProvinces = [];
      }
      const data = {
        mountainProvinces,
        offerProvinces,
        famousProvinces,
        searchingProvinces: initSearchingProvinces,
      };
      this.props.mapProvincesAgain(data);
    }
  }
  render() {
    const {language} = this.props;
    return (
      this.props.show && (
        <View style={styles.modalStyle}>
          <View style={styles.formChooseLang}>
            <Text style={styles.chooseLang}>{translate('choose_lang')}</Text>
            <TouchableOpacity
              style={styles.viewRowModal}
              onPress={this.setLanguage('vi')}>
              <Text style={styles.lang}>{translate('vi_lang')}</Text>
              {language === 'vi' ? (
                <View style={styles.viewCircle}>
                  <EntypoIcon
                    name={'check'}
                    style={styles.iconCheck}
                    color={'#008A1F'}
                    size={wp('5')}
                  />
                </View>
              ) : (
                <View style={styles.viewCircle} />
              )}
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.viewRowModal}
              onPress={this.setLanguage('en')}>
              <Text style={styles.lang}>{translate('en_lang')}</Text>
              {language === 'en' ? (
                <View style={styles.viewCircle}>
                  <EntypoIcon
                    name={'check'}
                    style={styles.iconCheck}
                    color={'#008A1F'}
                    size={wp('5')}
                  />
                </View>
              ) : (
                <View style={styles.viewCircle} />
              )}
            </TouchableOpacity>
          </View>
        </View>
      )
    );
  }
}
const styles = StyleSheet.create({
  modalStyle: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: hp('5'),
  },
  formChooseLang: {
    paddingVertical: hp('2'),
    paddingHorizontal: wp('4'),
    backgroundColor: '#fff',
    borderRadius: wp('3'),
  },
  chooseLang: {
    color: '#323B45',
    fontFamily: 'roboto-slab-bold',
    fontSize: wp('4'),
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
  viewRowModal: {
    marginTop: hp('2'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  lang: {
    fontSize: wp('4'),
    fontFamily: 'roboto-slab-bold',
    color: '#323B45',
  },
  iconCheck: {
    position: 'absolute',
  },
  viewCircle: {
    padding: wp('3'),
    borderWidth: 2,
    borderRadius: wp('4'),
    borderColor: 'rgba(0, 0, 0, 0.301961)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
const mapStateFromProps = (state) => {
  return {
    language: state.system.language,
  };
};
export default connect(mapStateFromProps, {...system, ...places})(
  ModalChooseLang,
);
