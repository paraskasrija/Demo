import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
// import { _screens } from '../screens';
import _Login from '../screens/Login/index';

const Stack = createStackNavigator();

function AppNav() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={_Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNav;