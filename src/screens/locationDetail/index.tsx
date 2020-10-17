import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ProvinceDetail from './ProvinceDetail';
import SpotDetail from './SpotDetail';
const ProvinceDetailStack = {
  ProvinceDetail: {
    screen: ProvinceDetail,
    path: 'ProvinceDetail',
  },
  SpotDetail: {
    screen: SpotDetail,
    path: 'SpotDetail',
  },
};

const Stack = createStackNavigator();
const ProvinceDetailRoute = () => {
  return (
    <Stack.Navigator
      initialRouteName="ProvinceDetail"
      screenOptions={{
        headerShown: false,
      }}>
      {Object.keys(ProvinceDetailStack).map((key) => {
        return (
          <Stack.Screen
            key={key}
            name={key}
            component={ProvinceDetailStack[key].screen}
            options={{
              ...ProvinceDetailStack[key].navigationOptions,
            }}
          />
        );
      })}
    </Stack.Navigator>
  );
};

export default ProvinceDetailRoute;
