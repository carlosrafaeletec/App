import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Header, createStackNavigator } from '@react-navigation/stack'; 

import Login from '../screens/Login';
import Home from '../screens/Home';
import Historico from '../screens/Historico';

const Stack = createStackNavigator();


export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Historico" component={Historico} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
