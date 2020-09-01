import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Hotel from './Hotel';
const HotelStack = {
  Hotel: {
    screen: Hotel,
    path: 'Hotel',
    navigationOptions: {
      title: 'Hotel',
    },
  },
};

const Stack = createStackNavigator();
const HotelRouter = () => {
  return (
    <Stack.Navigator initialRouteName="Hotel">
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
