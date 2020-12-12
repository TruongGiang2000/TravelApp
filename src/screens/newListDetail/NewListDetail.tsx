import React, {Component} from 'react';
import {View, StyleSheet, Text, Pressable, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {withPages} from '../../util/withPages';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {translate} from '../../util/translate';
import NewsList from './modules/NewsList';
import {connect} from 'react-redux';
import {places} from '../../redux';

class NewListDetail extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {};
  }
  onPressBackSpace = () => {
    this.props.navigation.goBack();
  };
  render() {
    const {allProvinces, allHotel, location, allNews, language} = this.props;

    return (
      <ScrollView style={styles.MainContainer}>
        <View style={styles.header}>
          <Pressable onPress={this.onPressBackSpace}>
            <MaterialIcon
              name={'keyboard-backspace'}
              size={wp('7')}
              color={'#000'}
            />
          </Pressable>
          <Text style={styles.title}>{translate('travel_news')}</Text>
          <Text></Text>
        </View>
        <View style={{paddingHorizontal: wp('4')}}>
          <NewsList
            data={allNews}
            style={styles.spaceTop}
            language={language}
          />
        </View>
        <View style={styles.line} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: wp('6'),
  },
  title: {
    fontFamily: 'roboto-slab-bold',
    fontSize: wp('5'),
  },
  imgHeader: {
    width: wp('5'),
    height: hp('4'),
  },
  spaceTop: {
    marginTop: hp('1'),
  },
  line: {
    height: 1,
    backgroundColor: '#000',
    width: '80%',
    marginTop: hp('2'),
    alignSelf: 'center',
    opacity: 0.5,
    marginBottom: hp('3'),
  },
});
const mapStateFromProps = (state: any) => {
  return {
    allNews: state.system.allNews,
  };
};
export default connect(mapStateFromProps, {...places})(
  withPages(NewListDetail),
);
