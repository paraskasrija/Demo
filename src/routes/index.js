import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { _screens } from '../screens';

const Stack = createStackNavigator();

function AppNav() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={_screens._Login} />
        <Stack.Screen name="Dashboard" component={_screens._Dashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNav;