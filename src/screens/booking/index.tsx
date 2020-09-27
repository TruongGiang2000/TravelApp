import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ProfileCustomer from './Profilecustomer';
import BookingDetail from './BookingDetail';
const BookingStack = {
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
const BookingRoute = () => {
  return (
    <Stack.Navigator
      initialRouteName="ProfileCustomer"
      screenOptions={{headerShown: false}}>
      {Object.keys(BookingStack).map((key) => {
        return (
          <Stack.Screen
            key={key}
            name={key}
            component={BookingStack[key].screen}
            options={{
              ...BookingStack[key].navigationOptions,
            }}
          />
        );
      })}
    </Stack.Navigator>
  );
};

export default BookingRoute;
