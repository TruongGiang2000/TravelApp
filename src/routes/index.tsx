import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import App from './App';
import Booking from '../screens/booking';
import SplashScreen from '../screens/Splash';
import {NavigationContainer} from '@react-navigation/native';
import LocationDetail from '../screens/locationDetail/ProvinceDetail';
import SpotDetail from '../screens/locationDetail/SpotDetail';
import HotelDetail from '../screens/hotelDetail/HotelDetail';
import ChooseRoom from '../screens/chooseRoom/index';
const Stack = createStackNavigator();
const mainRoute = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={'none'}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="MainScreen" component={App} />
        <Stack.Screen name="Booking" component={Booking} />
        <Stack.Screen name="LocationDetail" component={LocationDetail} />
        <Stack.Screen name="SpotDetail" component={SpotDetail} />
        <Stack.Screen name="HotelDetail" component={HotelDetail} />
        <Stack.Screen name="ChooseRoom" component={ChooseRoom} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default mainRoute;
