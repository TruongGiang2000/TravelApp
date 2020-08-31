import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Location from './Location';
const LocationStack = {
  Location: {
    screen: Location,
    path: 'Location',
    navigationOptions: {
      title: 'Location',
    },
  },
};

const Stack = createStackNavigator();
const LocationRouter = () => {
  return (
    <Stack.Navigator initialRouteName="Location">
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
