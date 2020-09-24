import React, {Component} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import IonIcon from 'react-native-vector-icons/Ionicons';
import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons';
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';
import Home from './src/screens/home';
import Hotel from './src/screens/hotel';
import Location from './src/screens/location';
import Notification from './src/screens/notification';
import User from './src/screens/user';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
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
                source={require('./src/assets/images/Stroke1.png')}
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
                source={require('./src/assets/images/YourBooking.png')}
                style={styles.img}
              />
              <View style={focused ? styles.active : undefined} />
            </View>
          ),
          tabBarVisible: false,
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

class App extends Component<any, any> {
  render() {
    return (
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    );
  }
}
const styles = StyleSheet.create({
  active: {
    backgroundColor: '#FA2A00',
    width: wp('10'),
    height: 5,
    marginTop: 10,
  },
  img: {
    width: 22,
    height: 22,
  },
  view: {
    alignItems: 'center',
  },
});
export default App;
