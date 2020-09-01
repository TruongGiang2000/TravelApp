import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Notification from './Notification';
const NotificationStack = {
  Notification: {
    screen: Notification,
    path: 'Notification',
    navigationOptions: {
      title: 'Notification',
    },
  },
};

const Stack = createStackNavigator();
const NotificationRouter = () => {
  return (
    <Stack.Navigator
      initialRouteName="Notification"
      screenOptions={{
        headerShown: false,
      }}>
      {Object.keys(NotificationStack).map((key) => {
        return (
          <Stack.Screen
            key={key}
            name={key}
            component={NotificationStack[key].screen}
            options={{
              ...NotificationStack[key].navigationOptions,
            }}
          />
        );
      })}
    </Stack.Navigator>
  );
};

export default NotificationRouter;
