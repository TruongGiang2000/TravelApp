import React, {Component} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {withPages} from '../../util/withPages';
import SlideShow from '../../components/SlideShow';
import HotelList from './modules/HotelList';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import SpecialSpot from './modules/SpecialSpot';
import NewsList from './modules/NewsList';
import {places} from '../../redux';
class Home extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {};
    
  }
  componentDidMount() {
    this.props.getLocationByProvince(38);
  }
  
  render() {
    const {allProvinces, allHotel, location, allNews, language} = this.props;
    return (
      <ScrollView style={styles.MainContainer}>
        <SlideShow isHome={true} data={allProvinces} navigation = {this.props.navigation}/>
        <View style={styles.viewBelow}>
          <HotelList style={styles.spaceTop} data={allHotel} 
          navigation = {this.props.navigation}/>
          <SpecialSpot
            data={location}
            style={styles.spaceTop}
            language={language}
            navigation = {this.props.navigation}
          />
          <NewsList
            data={allNews}
            style={styles.spaceTop}
            language={language}
          />
          <View style={styles.line} />
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  spaceTop: {
    marginTop: hp('3'),
  },
  viewBelow: {
    paddingHorizontal: wp('4'),
  },
  line: {
    height: 1,
    backgroundColor: '#000',
    width: '80%',
    marginTop: hp('1'),
    alignSelf: 'center',
    opacity: 0.5,
    marginBottom: hp('3'),
  },
});
const mapStateFromProps = (state: any) => {
  return {
    allProvinces: state.places.allProvinces,
    allHotel: state.hotel.allHotel,
    location: state.places.location,
    allNews: state.system.allNews,
  };
};
export default connect(mapStateFromProps, {...places})(withPages(Home));
