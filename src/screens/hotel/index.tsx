import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Hotel from './Hotel';
import ProfileCustomer from '../../booking/Profilecustomer';
import BookingDetail from '../../booking/BookingDetail';
const HotelStack = {
  Hotel: {
    screen: Hotel,
    path: 'Hotel',
    navigationOptions: {
      title: 'Hotel',
    },
  },
  ProfileCustomer: {
    screen: ProfileCustomer,
    path: 'ProfileCustomer',
    navigationOptions: {
      title: 'ProfileCustomer',
    },
  },
  BookingDetail: {
    screen: BookingDetail,
    path: 'BookingDetail',
    navigationOptions: {
      title: 'BookingDetail',
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
