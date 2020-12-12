import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import NewListDetail from './NewListDetail';
const NewDetailStack = {
  NewListDetail:{
    screen: NewListDetail,
    path: 'newListDetail',
  }
};

const Stack = createStackNavigator();
const NewDetailRouter = () => {
  return (
    <Stack.Navigator
      initialRouteName="newListDetail"
      screenOptions={{
        headerShown: false,
      }}>
      {Object.keys(NewDetailStack).map((key) => {
        return (
          <Stack.Screen
            key={key}
            name={key}
            component={NewDetailStack[key].screen}
            options={{
              ...NewDetailStack[key].navigationOptions,
            }}
          />
        );
      })}
    </Stack.Navigator>
  );
};

export default NewDetailRouter;
