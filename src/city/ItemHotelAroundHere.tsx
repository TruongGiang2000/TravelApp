import React, {Component} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import PropTypes from 'prop-types';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import ButtonCustom from '../components/custombutton';
import StarRating from 'react-native-star-rating';
import GraddientOpacity from '../components/GradientOpacity';

class ItemHotelAroundHere extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      
  }
}
onStarRatingPress(rating) {
  this.setState({
    starCount: rating,
  });
}
  render() {
    const {style, onPress, imageStyle, titleStyle, contentStyle, title, content, titlePrice, titleUSD} = this.props;
     return (
          <TouchableOpacity style={[styles.MainContainer, style]} onPress={onPress} >
          <Image 
            source={this.props.source}
            style={[styles.styleImage, imageStyle]}
          />
          <View style={styles.Content}>
          <Text style={[styles.styletitle, titleStyle]}>
            {title}
             </Text>
             <View style={styles.stylestart}>
             <StarRating
                disabled={false}
                maxStars={5}
                rating={this.props.starCount}
                selectedStar={(rating) => this.onStarRatingPress(rating)}
                fullStarColor={'#000'}
                starSize={13}
              />
              </View>
             <Text style={[styles.styleContent, contentStyle]}>
                {content}
             </Text>
             
              <View style={styles.style}>
             <Text style={styles.styleUSD}>
               {titleUSD}
             </Text>
             <Text style={styles.styleprice}>
               {titlePrice}
             </Text>
             </View>
             <ButtonCustom 
                title="book_room"
              />
              </View>
              
          </TouchableOpacity>
     )
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    width: wp('90'),
    height: hp('35'),
  },
  style:{
    height: hp('6')
  },
  stylestart:{
    width: wp('30'),
    height: wp('5'),
  },
  styleImage:{
    width: wp('35'),
    height: hp('35'),
  },
  styletitle:{
    fontSize: wp("5") ,
    color: "#353b50",
    height: wp('15'),
  },
  styleContent:{
    fontSize: wp("4"),
    color: "#353b50",
    opacity: 0.6,
    height: wp('13'),
  },
  styleprice:{
    color:"#FA2A00",
    fontSize: wp("5"),

  },
  styleUSD:{
    fontSize: wp("3"),
    color: "#FC4850",
    marginLeft: wp('10'),
    position:'absolute'
  },
  Content:{
    position: 'absolute',
    marginLeft: wp('40'),
    height: wp('50'),
    marginTop: wp('1'),
  },

});
export default ItemHotelAroundHere;
