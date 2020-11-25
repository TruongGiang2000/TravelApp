import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './Home';
import HotelDetail from '../hotelDetail/HotelDetail';
import ProvinceDetail from '../locationDetail/ProvinceDetail';
const HomeStack = {
  Home: {
    screen: Home,
    path: 'Home',
  },
  HotelDetail: {
    screen: HotelDetail,
    path: 'HotelDetail',
  },
  ProvinceDetail: {
    screen: ProvinceDetail,
    path: 'ProvinceDetail',
  },
};

const Stack = createStackNavigator();
const HomeRouter = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      {Object.keys(HomeStack).map((key) => {
        return (
          <Stack.Screen
            key={key}
            name={key}
            component={HomeStack[key].screen}
            options={{
              ...HomeStack[key].navigationOptions,
            }}
          />
        );
      })}
    </Stack.Navigator>
  );
};

export default HomeRouter;
