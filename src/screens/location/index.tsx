import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Location from './Location';
import LocationDetail from '../locationDetail/ProvinceDetail';
import SpotDetail from '../locationDetail/SpotDetail';
const LocationStack = {
  Location: {
    screen: Location,
    path: 'Location',
  },
};

const Stack = createStackNavigator();
const LocationRouter = () => {
  return (
    <Stack.Navigator
      initialRouteName="Location"
      screenOptions={{
        headerShown: false,
      }}>
      {Object.keys(LocationStack).map((key) => {
        return (
          <Stack.Screen
            key={key}
            name={key}
            component={LocationStack[key].screen}
            options={{
              ...LocationStack[key].navigationOptions,
            }}
          />
        );
      })}
    </Stack.Navigator>
  );
};

export default LocationRouter;
