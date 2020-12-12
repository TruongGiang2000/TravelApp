import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HotelDetail from './HotelDetail';
const HotelDetailStack = {
    HotelDetail: {
    screen: HotelDetail,
    path: 'HotelDetail',
  },
};

const Stack = createStackNavigator();
const HotelDetailRouter = () => {
  return (
    <Stack.Navigator
      initialRouteName="HotelDetail"
      screenOptions={{
        headerShown: false,
      }}>
      {Object.keys(HotelDetailStack).map((key) => {
        return (
          <Stack.Screen
            key={key}
            name={key}
            component={HotelDetailStack[key].screen}
            options={{
              ...HotelDetailStack[key].navigationOptions,
            }}
          />
        );
      })}
    </Stack.Navigator>
  );
};

export default HotelDetailRouter;
