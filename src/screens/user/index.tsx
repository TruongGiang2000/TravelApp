import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import User from './User';
import SignIn from './modules/SignIn';
import ManageAccountModal from './modules/ManageAccountModal';
const UserStack = {
  User: {
    screen: User,
    path: 'User',
    navigationOptions: {
      title: 'User',
    },
  },
  SignIn: {
    screen: SignIn,
    path: 'SignIn',
    navigationOptions: {
      title: 'SignIn',
    },
  },
  ManageAccountModal: {
    screen: ManageAccountModal,
    path: 'ManageAccountModal',
    navigationOptions: {
      title: 'ManageAccountModal',
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
