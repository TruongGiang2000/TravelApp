import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import IonIcon from 'react-native-vector-icons/Ionicons';
import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons';
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';
import Home from '../screens/home';
import Hotel from '../screens/hotel';
import Location from '../screens/location';
import Notification from '../screens/notification';
import User from '../screens/user';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {configTranslation} from '../util/translate';
import {actionInit} from '../util/mainActions';
import {connect} from 'react-redux';
import SplashScreen from '../screens/Splash';
import {places, system} from '../redux';
import {dataFetchProvince} from '../constants/systems/main';
import lodash from 'lodash';
const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        inactiveBackgroundColor: '#ffffff',
        inactiveTintColor: '#000000',
        activeTintColor: '#000000',
        showLabel: false,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.view}>
              <Image
                source={require('../assets/images/Stroke1.png')}
                style={styles.img}
              />
              <View style={focused ? styles.active : undefined} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Hotel"
        component={Hotel}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.view}>
              <Image
                source={require('../assets/images/YourBooking.png')}
                style={styles.img}
              />
              <View style={focused ? styles.active : undefined} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Location"
        component={Location}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <View style={styles.view}>
              <SimpleIcon name="location-pin" color={color} size={size} />
              <View style={focused ? styles.active : undefined} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <View style={styles.view}>
              <IonIcon name="notifications-outline" color={color} size={size} />
              <View style={focused ? styles.active : undefined} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="User"
        component={User}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <View style={styles.view}>
              <SimpleLineIcon name="user" color={color} size={size} />
              <View style={focused ? styles.active : undefined} />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const App = (props: any) => {
  const [loading, setLoading] = useState(true);
  const {
    famousProvinces,
    mountainProvinces,
    offerProvinces,
    language,
    getOfferProvinces,
    getMountainProvinces,
    getFamousProvinces,
  } = props;
  useEffect(() => {
    actionInit(props);
  });
  useEffect(() => {
    if (lodash.isEmpty(offerProvinces)) {
      getOfferProvinces(dataFetchProvince[2]);
    }
  }, []);
  useEffect(() => {
    if (lodash.isEmpty(mountainProvinces)) {
      getMountainProvinces(dataFetchProvince[1]);
    }
  }, []);
  useEffect(() => {
    if (lodash.isEmpty(famousProvinces)) {
      getFamousProvinces(dataFetchProvince[0]);
    }
  }, []);
  useEffect(() => {
    if (
      !lodash.isEmpty(famousProvinces) &&
      !lodash.isEmpty(mountainProvinces) &&
      !lodash.isEmpty(offerProvinces)
    ) {
      setLoading(false);
    }
  }, [famousProvinces, mountainProvinces, offerProvinces]);
  useEffect(() => {
    configTranslation(language);
  }, [language]);
  if (loading) {
    return <SplashScreen />;
  }
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  active: {
    backgroundColor: '#FA2A00',
    width: wp('10'),
    height: 5,
    marginTop: wp('3'),
  },
  img: {
    width: wp('6'),
    height: wp('6'),
  },
  view: {
    alignItems: 'center',
  },
});
const mapStateFromProps = (state) => {
  return {
    language: state.system.language,
    famousProvinces: state.places.famousProvinces,
    mountainProvinces: state.places.mountainProvinces,
    offerProvinces: state.places.offerProvinces,
  };
};
export default connect(mapStateFromProps, {...places, ...system})(App);
