import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import App from './App';
import SplashScreen from '../screens/Splash';
import {NavigationContainer} from '@react-navigation/native';
import LocationDetail from '../screens/locationDetail/ProvinceDetail';
import SpotDetail from '../screens/locationDetail/SpotDetail';
import HotelDetail from '../screens/hotelDetail/HotelDetail';
import ChooseRoom from '../screens/chooseRoom/index';
import CustomerForm from '../screens/booking/Profilecustomer';
import BookingDetail from '../screens/booking/BookingDetail';
import NewListDetail from '../screens/newListDetail/NewListDetail';
const Stack = createStackNavigator();
const mainRoute = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={'none'}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="MainScreen" component={App} />
        <Stack.Screen name="LocationDetail" component={LocationDetail} />
        <Stack.Screen name="SpotDetail" component={SpotDetail} />
        <Stack.Screen name="HotelDetail" component={HotelDetail} />
        <Stack.Screen name="newListDetail" component={NewListDetail} />
        <Stack.Screen name="ChooseRoom" component={ChooseRoom} />
        <Stack.Screen name="CustomerForm" component={CustomerForm} />
        <Stack.Screen name="BookingDetail" component={BookingDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default mainRoute;
