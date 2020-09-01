import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import User from './User';
const UserStack = {
    User: {
    screen: User,
    path: 'User',
    navigationOptions: {
      title: 'User',
    },
  },
};

const Stack = createStackNavigator();
const UserRouter = () => {
  return (
    <Stack.Navigator initialRouteName="User">
      {Object.keys(UserStack).map((key) => {
        return (
          <Stack.Screen
            key={key}
            name={key}
            component={UserStack[key].screen}
            options={{
              ...UserStack[key].navigationOptions,
            }}
          />
        );
      })}
    </Stack.Navigator>
  );
};

export default UserRouter;
