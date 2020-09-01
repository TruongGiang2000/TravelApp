import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import TraTe from '../../components/TraTe';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';

export default class kindofroom extends Component<any, any> {
  render() {
    const {
      iconinternet,
      source,
      size,
      bed,
      amount,
      title,
      policy,
      quantum,
      internet,
    } = this.props;
    return (
      <View style={styles.test}>
        <TouchableOpacity style={styles.MainItem}>
          <View style={styles.down}>
            <View style={styles.down1}>
              <View style={styles.a}>
                <Icon name="warehouse" style={styles.icon} />
                <Text style={styles.text}>{size}</Text>
              </View>
              <View style={styles.b}>
                <Icon name="user" style={styles.icon} />
                <Text style={styles.text}>{bed}</Text>
              </View>
              <View style={styles.c}>
                <Icon name="user" style={styles.icon} />
                <Text style={styles.text}>{amount}</Text>
              </View>
            </View>
            <View style={styles.down2}>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.policy}>{policy}</Text>
              <Text style={styles.quantum}>{quantum}</Text>
              <View style={styles.Internet}>
                <Image
                  source={iconinternet}
                  style={[styles.iconinternet]}></Image>
                <Text style={styles.internet}>{internet}</Text>
              </View>
            </View>
          </View>
          <Image source={source} style={[styles.imgstyle]}></Image>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  test: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  MainItem: {
    width: wp('70'),
    height: hp('60'),
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  down: {
    position: 'absolute',
    backgroundColor: '#FFFFFF',
    height: hp('40'),
    width: wp('70'),
    borderRadius: 5,
    justifyContent: 'center',
    flexDirection: 'column',
  },
  imgstyle: {
    width: wp('60'),
    height: hp('40'),
    borderRadius: 5,
    marginBottom: hp('20'),
  },
  down1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp('20'),
  },
  down2: {
    marginLeft: wp('5'),
  },
  icon: {
    height: hp('5'),
    width: wp('5'),
    color: '#5E5E5E',
  },
  a: {flexDirection: 'row', marginRight: wp('2')},
  b: {flexDirection: 'row', marginRight: wp('2')},
  c: {flexDirection: 'row'},

  text: {fontSize: wp('2.9'), color: '#5E5E5E'},
  title: {
    fontSize: wp('7'),
  },
  policy: {
    fontSize: wp('3'),
    color: '#FA2A00',
  },
  internet: {
    fontSize: wp('2.5'),
  },
  quantum: {fontSize: wp('2.9')},
  iconinternet: {
    height: hp('1.9'),
    width: wp('5'),
    marginRight: wp('2'),
  },
  Internet: {
    flexDirection: 'row',
  },
});
