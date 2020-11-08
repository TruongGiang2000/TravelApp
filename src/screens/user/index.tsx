import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import User from './User';
import UserNotLogin from './UserNotLogin';
const UserStack = {
  User: {
    screen: User,
    path: 'User',
    navigationOptions: {
      title: 'User',
    },
  },
  UserNotLogin: {
    screen: UserNotLogin,
    path: 'UserNotLogin',
    navigationOptions: {
      title: 'UserNotLogin',
    },
  },
};

const Stack = createStackNavigator();
const UserRouter = () => {
  return (
    <Stack.Navigator
      initialRouteName="User"
      screenOptions={{
        headerShown: false,
      }}>
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
