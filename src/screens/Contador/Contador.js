import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Alert, Image, ImageBackground } from "react-native";
import Fonte from "../../components/Fonte";

const Contador = ({ navigation, route }) => {
  const [ponto, setPonto] = useState(0);
  const [ponto2, setPonto2] = useState(0);
  const [num, setNum] = useState(0);
  const [num2, setNum2] = useState(0);
  team = route.params?.username;
  team2 = route.params?.username2;

  const ganhoSet = () => {
    if (ponto >= 26 && ponto - ponto2 >= 2) {
      setNum(num + 1);
      setPonto(0);
      setPonto2(0);
    } else if (ponto2 >= 26 && ponto2 - ponto >= 2) {
      setNum2(num2 + 1);
      setPonto(0);
      setPonto2(0);
    }

    if (num > num2 && num >= 3){
      Alert.alert('A Partida Terminou', 'O ' + team + ' ganhou a partida!!');
      navigation.navigate("Home", {num, num2, team, team2 });
    }
    else if (num2 > num && num2 >= 3){
      Alert.alert('A Partida Terminou', 'O ' + team2 + ' ganhou a partida!!');
      navigation.navigate("Home", {num, num2, team, team2 });
    } 
    else if (num == 2 && num2 == 2){
      
      if (ponto >= 16 && ponto - ponto2 >= 2){
        setNum(num + 1);
        Alert.alert('A Partida Terminou', 'O ' + team + ' ganhou a partida!!');
        navigation.navigate("Home", {num, num2, team, team2 });
      } 
      else if (ponto2 >= 16 && ponto2 - ponto >= 2){
        setNum2(num2 + 1);
        Alert.alert('A Partida Terminou', 'O ' + team2 + ' ganhou a partida!!');
        navigation.navigate("Home", {num, num2, team, team2 });
      }
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
    <ImageBackground style={styles.fundoImg}
    source={require('../../../assets/entrar.png')}>
      <View style={styles.container}>
        <Image
          source={require('../../../assets/logo.png')}
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
            <Fonte style={styles.texto2}>+</Fonte>
          </TouchableOpacity>

          <TouchableOpacity style={styles.diminuir} 
            onPress={() => setPonto(ponto - 1)}>
            <Fonte style={styles.texto2}>-</Fonte>
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
            <Fonte style={styles.texto2}>+</Fonte>
          </TouchableOpacity>

          <TouchableOpacity style={styles.diminuir2} 
            onPress={() => setPonto2(ponto2 - 1)}>
            <Fonte style={styles.texto2}>-</Fonte>
          </TouchableOpacity>

          <Fonte style={styles.set2}>Set: {ganhoSet()}{num2}</Fonte>

        </View>

        <TouchableOpacity style={styles.back}
        onPress={() => navigation.navigate("Home")}>
          <Fonte style={styles.backTxt}>Voltar</Fonte>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.reset}
          onPress={() => { setPonto(0), setPonto2(0) }}>
          <Fonte style={styles.resetTxt}>Resetar</Fonte>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default Contador;

const styles = StyleSheet.create({
  fundoImg:{
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.0)',
    paddingTop: 20,
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
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    top: 10,
    borderWidth: 2,
    borderColor: 'white'
  },
  diminuir: {
    borderRadius: 20,
    width: 40,
    height: 40,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    right: 75,
    bottom: 30,
    borderWidth: 2,
    borderColor: 'white'
  },
  adicao2:{
    borderRadius: 20,
    width: 40,
    height: 40,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    left: 255,
    top: 11,
    borderWidth: 2,
    borderColor: 'white'
  },
  diminuir2:{
    borderRadius: 20,
    width: 40,
    height: 40,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 30,
    left: 180,
    borderWidth: 2,
    borderColor: 'white'
  },
  reset: {
    width: 120,
    height: 60,
    backgroundColor: 'transparent',
    borderRadius: 13,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 200,
    borderWidth: 2,
    borderColor: 'white', 
  },
  texto: {
    fontSize: 32,
  },
  texto2:{
    fontSize: 32,
    color: '#fff'
  },
  resetTxt:{
    fontSize: 24,
    color: '#fff',
  },
  back:{
    backgroundColor: 'transparent',
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 8,
    height: 32,
    borderWidth: 2,
    borderColor: '#fff',
  },
  backTxt:{
    color: '#fff',
    fontSize: 20,
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
