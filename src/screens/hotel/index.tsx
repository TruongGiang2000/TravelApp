import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Hotel from './Hotel';
import Booking from '../booking';
const HotelStack = {
  Hotel: {
    screen: Hotel,
    path: 'Hotel',
    navigationOptions: {
      title: 'Hotel',
    },
  },
  Booking: {
    screen: Booking,
    path: 'Booking',
    navigationOptions: {
      title: 'ProfileCustomer',
    },
  },
};

const Stack = createStackNavigator();
const HotelRouter = () => {
  return (
    <Stack.Navigator
      initialRouteName="Hotel"
      screenOptions={{
        headerShown: false,
      }}>
      {Object.keys(HotelStack).map((key) => {
        return (
          <Stack.Screen
            key={key}
            name={key}
            component={HotelStack[key].screen}
            options={{
              ...HotelStack[key].navigationOptions,
            }}
          />
        );
      })}
    </Stack.Navigator>
  );
};

export default HotelRouter;
