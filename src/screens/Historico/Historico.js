import React from "react";
import { View, StyleSheet, TouchableOpacity, Image, ImageBackground} from "react-native";
import Fonte from "../../components/Fonte";

const Historico = ({ navigation, route }) =>{


  return(
    <ImageBackground style={styles.fundoImg}
    source={require('../../../assets/entrar.png')}>
      <View style={styles.container}>
        <Image
          source={require('../../../assets/logo.png')}
          style={styles.logo}
        />
        
        <Fonte style={styles.titulo}>Partidas recentes</Fonte>

        <View style={styles.hist}>
            <Fonte style={styles.time}>{route.params.aftUser}</Fonte>
            <Fonte style={styles.setFinal}>{route.params.set1}</Fonte>
            <Fonte style={styles.contra}>X</Fonte>
            <Fonte style={styles.time2}>{route.params.aftUser2}</Fonte>
            <Fonte style={styles.setFinal2}>{route.params.set2}</Fonte>
        </View>

        <TouchableOpacity  style={styles.button}
        onPress={() => navigation.navigate("Home")}>
          <Fonte style={styles.fonte}>Voltar</Fonte>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};


export default Historico;

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
    height: 150,
    bottom: 150,
  },
  hist:{
    height: 80,
    width: 310,
    backgroundColor: 'transparent',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 25,
    borderWidth: 2,
    borderColor: 'white'
  },
  titulo:{
    color: 'white',
    fontSize: 25,
    borderBottomWidth: 2,
    borderColor: '#fff',
    bottom: 70,
  },
  time:{
    color: 'white',
    fontSize: 22,
    right: 75,
    top: 46,
  },
  setFinal:{
    color: 'white',
    fontSize: 22,
    top: 25,
    right: 28,
  },
  contra:{
    color: 'white',
    fontSize: 26,
    right: 2,
  },
  time2:{
    color: 'white',
    fontSize: 22,
    bottom: 25,
    left: 90,
  },
  setFinal2:{
    color: 'white',
    fontSize: 22,
    bottom: 49,
    left: 25,
  },
  fonte:{
    fontWeight: 'bold',
    fontSize: 16,
    color: 'white',
  },
  button:{
    fontSize: 15,
    height: 30,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    marginTop: 40,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: 'white'
  }
});
