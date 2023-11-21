import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; 

import Entrada from '../screens/Entrada/Entrada';
import Contador from '../screens/Contador/Contador';
import Historico from '../screens/Historico/Historico';

const Stack = createStackNavigator();

export default function Navigator({ topo }) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="Home" component={ Entrada } options={{ headerShown: false }} { ...topo }/>
        <Stack.Screen name="Cont" component={ Contador } options={{ headerShown: false }} />
        <Stack.Screen name="Hist" component={ Historico } options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
