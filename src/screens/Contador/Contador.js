import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Alert, Image } from "react-native";
import Fonte from "../../components/Fonte";

const Contador = ({ navigation, route }) => {
  const [ponto, setPonto] = useState(0);
  const [ponto2, setPonto2] = useState(0);
  const [num, setNum] = useState(0);
  const [num2, setNum2] = useState(0);
  team = route.params?.username;
  team2 = route.params?.username2;

  const ganhoSet = () => {
    if (ponto >= 25 && ponto - ponto2 >= 2) {
      setNum(num + 1);
      setPonto(0);
      setPonto2(0);
    } else if (ponto2 >= 25 && ponto2 - ponto >= 2) {
      setNum2(num2 + 1);
      setPonto(0);
      setPonto2(0);
    }

    if (num > num2 && num >= 2){
      Alert.alert('A Partida Terminou', 'O ' + team + ' ganhou a partida!!');
      navigation.navigate("Home", {num, num2, team, team2 });
    }
    else if (num2 > num && num2 >= 2){
      Alert.alert('A Partida Terminou', 'O ' + team2 + ' ganhou a partida!!');
      navigation.navigate("Home", {num, num2, team, team2 });
    }
  };

  const neg = () => {
    if (ponto <= -1 || ponto2 <= -1 ){
      setPonto(0)
      setPonto2(0)
      Alert.alert("Erro", "Nao coloque ponto negativo");
    }
  }

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/logo.png')}
        style={styles.logo} />

      <Fonte style={styles.nome}>
        {team}
      </Fonte>
      
      <Fonte style={styles.contra}>X</Fonte>

      <Fonte style={styles.nome2}>
        {team2}
      </Fonte>

      <View style={styles.time1}>
        
        <View style={styles.pontuacao}>
          <Fonte style={styles.texto}>
            {neg()}{ponto}
          </Fonte>
        </View>
        
        <TouchableOpacity style={styles.adicao}
          onPress={() => setPonto(ponto + 1)}>
          <Fonte style={styles.texto}>+</Fonte>
        </TouchableOpacity>

        <TouchableOpacity style={styles.diminuir} 
          onPress={() => setPonto(ponto - 1)}>
          <Fonte style={styles.texto}>-</Fonte>
        </TouchableOpacity>

        <Fonte style={styles.set1}>Set: {ganhoSet()}{num}</Fonte>

      </View>

      <View style={styles.barraVertical}></View>

      <View style={styles.time2}>
        
        <View style={styles.pontuacao2}>
          <Fonte style={styles.texto}>{neg()}{ponto2}</Fonte>
        </View>

        <TouchableOpacity style={styles.adicao2}
          onPress={() => setPonto2(ponto2 + 1)}>
          <Fonte style={styles.texto}>+</Fonte>
        </TouchableOpacity>

        <TouchableOpacity style={styles.diminuir2} 
          onPress={() => setPonto2(ponto2 - 1)}>
          <Fonte style={styles.texto}>-</Fonte>
        </TouchableOpacity>

        <Fonte style={styles.set2}>Set: {ganhoSet()}{num2}</Fonte>

      </View>

      <TouchableOpacity style={styles.back}
      onPress={() => navigation.navigate("Home")}>
        <Fonte>Voltar</Fonte>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.reset}
        onPress={() => { setPonto(0), setPonto2(0) }}>
        <Fonte style={styles.texto}>Resetar</Fonte>
      </TouchableOpacity>
    </View>
  );
};

export default Contador;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000', // Cor de fundo da tela
  },
  logo: {
    width: 300,
    height: 60,
    top: 240,
  },
  time1:{
    height: 180,
    width: 150,
    position: 'relative',
    top: 250,
  },
  time2:{
    height: 150,
    width: 150,
    position: 'relative',
    right: 65,
    bottom: 110,
  },
  set1: {
    color: 'white',
    fontSize: 24,
    width: 120,
    right: 45,
    bottom: 5,
  },
  set2:{
    color: 'white',
    fontSize: 24,
    left: 210,
    bottom: 5
  },
  pontuacao:{
    height: 110,
    width: 110,
    backgroundColor: 'white',
    borderRadius: 400,
    alignItems: 'center',
    justifyContent: 'center',
    right: 73,
  },
  pontuacao2: {
    height: 110,
    width: 110,
    backgroundColor: 'white',
    borderRadius: 400,
    alignItems: 'center',
    justifyContent: 'center',
    left: 185,
  },
  barraVertical: {
    height: 180,
    width: 12,
    backgroundColor: 'white',
    borderRadius: 6,
    top: 60,
  },
  adicao: {
    borderRadius: 20,
    width: 40,
    height: 40,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    top: 10,
  },
  diminuir: {
    borderRadius: 20,
    width: 40,
    height: 40,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    right: 75,
    bottom: 30,
  },
  adicao2:{
    borderRadius: 20,
    width: 40,
    height: 40,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    left: 255,
    top: 11,
  },
  diminuir2:{
    borderRadius: 20,
    width: 40,
    height: 40,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 30,
    left: 180,
  },
  reset: {
    width: 120,
    height: 60,
    backgroundColor: 'white',
    borderRadius: 13,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 200,
  },
  texto: {
    fontSize: 32,
  },
  resetTxt:{
    fontSize: 24,
  },
  back:{
    backgroundColor: 'white',
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 8,
    height: 26,
  },
  nome:{
    color: 'white',
    fontSize: 30,
    top: 295,
    right: 90,
  },
  nome2:{
    color: 'white',
    fontSize: 30,
    top: 218,
    left: 98,
  },
  contra:{
    color: 'white',
    fontSize: 45,
    justifyContent: 'center',
    alignItems: 'center',
    top: 260,
    right: 2,
  },
});
