import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
  import ModalCustom from 'react-native-modal';
  import StarRating from 'react-native-star-rating';
  import {translate} from '../util/translate';

class CustomRaTing extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      isShow: true,
    };
  }
  onStartRating(rating){
    this.setState({
      starCount: rating,
      isShow: false,
      
    })
    console.log(rating)
  }
  showModalChooseLanguage = () => {
    this.setState({isShow: true});
  };
  onClose = () => {
    this.setState({isShow: false});
   
  };
  render() {
    const {isShow,starCount } = this.state;
    const {
      selectedStar,
      onStarChange,
    } = this.props;
    return (
      <View style={styles.MainContainer}>
         <ModalCustom isVisible={isShow} onBackdropPress={this.onClose} style={styles.styleModal}>
         <View style={styles.rating}>
         <Text style={styles.numberofreview}>{translate(
              'Review',
            )}</Text>
            <View style={styles.styleRating}>
            <StarRating
              disabled={false}
              maxStars={5}
              selectedStar={(rating) => this.onStartRating(rating)}
              rating={[starCount, onStarChange]}
              fullStarColor={'#F0C909'}
              starSize={wp('8')}
            />
            </View>
          </View>
        </ModalCustom>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  styleModal:{
    justifyContent: 'flex-end'
  },
  styleRating:{
    marginTop: wp('4'),
    width: wp('80'),
    marginLeft: wp('4.5'),
  },
  rating: {
    marginLeft: wp('1'),
    width: wp('90'),
    height: hp('18'),
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  numberofreview: {
    color: '#000',
    fontSize: wp('4'),
    marginTop: wp('5'),
    marginLeft: wp('4'),
    fontFamily: 'roboto-slab-bold',
    
  },
});
export default CustomRaTing;
