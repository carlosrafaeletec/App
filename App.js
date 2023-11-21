import React from 'react';
import { View } from 'react-native';
import Conteudo from './src/mocks/Conteudo';
import Navigator from './src/routes/Navigator';
import { useFonts, Arvo_400Regular, Arvo_700Bold } from '@expo-google-fonts/arvo';


export default function App() {
  const [fontLoad] = useFonts({
    "ArvoRegular": Arvo_400Regular,
    "ArvoBold": Arvo_700Bold,
  });

  if(!fontLoad){
    return <View/>
  }

  return (
    <Navigator { ...Conteudo }/>
  );
}