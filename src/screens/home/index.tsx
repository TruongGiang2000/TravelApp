import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './Home';
const HomeStack = {
  Home: {
    screen: Home,
    path: 'Home',
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
