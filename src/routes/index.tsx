import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import App from './App';
import Booking from '../screens/booking';
const mainStack = {
  // App: {
  //   screen: App,
  //   path: 'App',
  // },
  // Booking: {
  //   screen: Booking,
  //   path: 'Booking',
  // },
};

const Stack = createStackNavigator();
const mainRoute = () => {
  return (
    <Stack.Navigator
      initialRouteName="App"
      screenOptions={{headerShown: false}}>
      {Object.keys(mainStack).map((key) => {
        return (
          <Stack.Screen
            key={key}
            name={key}
            component={mainStack[key].screen}
            options={{
              ...mainStack[key].navigationOptions,
            }}
          />
        );
      })}
    </Stack.Navigator>
  );
};

export default mainRoute;
