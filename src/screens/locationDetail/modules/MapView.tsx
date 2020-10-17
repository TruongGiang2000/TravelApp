import React, {Component} from 'react';
import {View, StyleSheet, Text, Pressable} from 'react-native';
import MapView, {LatLng, Marker} from 'react-native-maps';
import {mapStyle} from '../../../constants/systems/main';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import {translate} from '../../../util/translate';
import getDirection from 'react-native-google-maps-directions';
import GeoLocation from 'react-native-get-location';
class Map extends Component<any, any> {
  latLng: LatLng;
  constructor(props) {
    super(props);
    this.state = {};
  }
  _handleGetDirections = () => {
    GeoLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 15000,
    }).then((location) => {
      const data = {
        source: {
          latitude: location.latitude,
          longitude: location.longitude,
        },
        destination: {
          latitude: this.props.latitude,
          longitude: this.props.longitude,
        },
        params: [
          {
            key: 'travelmode',
            value: 'driving', // may be "walking", "bicycling" or "transit" as well
          },
          {
            key: 'dir_action',
            value: 'navigate', // this instantly initializes navigation using the given travel mode
          },
        ],
      };
      getDirection(data);
    });
  };
  render() {
    const {style, latitude, longitude, addRess, title, onPress} = this.props;
    this.latLng = {
      latitude: latitude,
      longitude: longitude,
    };
    return (
      <View style={style}>
        <View style={styles.viewAddress}>
          <Text style={styles.addRess}>{addRess}</Text>
          <Pressable onPress={this._handleGetDirections} style={styles.viewRow}>
            <IconFontAwesome
              name={'location-arrow'}
              color={'#FA2A00'}
              size={wp('5')}
            />
            <Text style={styles.seeAddress}>{translate('seeAddress')}</Text>
          </Pressable>
        </View>
        <MapView
          initialRegion={{
            latitude: latitude + 0.0003,
            longitude: longitude - 0.003,
            latitudeDelta: 0,
            longitudeDelta: 0.01,
          }}
          moveOnMarkerPress={false}
          customMapStyle={mapStyle}
          zoomEnabled={false}
          scrollEnabled={false}
          style={styles.container}>
          <Marker
            coordinate={this.latLng}
            title={title}
            image={require('../../../assets/images/Marker.png')}
          />
        </MapView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    width: wp('100'),
    height: hp('20'),
  },
  addRess: {
    fontFamily: 'roboto-slab.regular',
    color: '#5C6979',
    fontSize: wp('3.6'),
  },
  viewAddress: {
    position: 'absolute',
    marginTop: hp('3'),
    zIndex: 999,
    width: wp('50'),
    marginLeft: wp('4'),
  },
  viewRow: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    marginTop: hp('1'),
  },
  seeAddress: {
    fontSize: wp('3.6'),
    fontFamily: 'roboto-slab-bold',
    color: '#323B45',
    marginLeft: wp('2'),
  },
});
export default Map;
