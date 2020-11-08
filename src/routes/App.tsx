import React, {useEffect} from 'react';
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
import {places, system} from '../redux';
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
  const {language} = props;
  useEffect(() => {
    actionInit(props);
  });
  useEffect(() => {
    configTranslation(language);
  }, [language]);
  return <MyTabs />;
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
  };
};
export default connect(mapStateFromProps, {...places, ...system})(App);
