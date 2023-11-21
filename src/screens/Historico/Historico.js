import React from "react";
import { View, StyleSheet, TouchableOpacity, Image} from "react-native";
import Fonte from "../../components/Fonte";

const Historico = ({ navigation, route }) =>{


  return(
    <View style={styles.container}>
      <Image
        source={require('../../assets/logo.png')}
        style={styles.logo}
      />
      
      <Fonte style={styles.teste}>Partidas recentes</Fonte>

      <View style={styles.hist}>
          <Fonte style={styles.teste2}>{route.params.aftUser}</Fonte>
          <Fonte style={styles.teste2}>{route.params.set1}</Fonte>
          <Fonte style={styles.teste2}>{route.params.aftUser2}</Fonte>
          <Fonte style={styles.teste2}>{route.params.set2}</Fonte>
      </View>

      <TouchableOpacity  style={styles.button}
      onPress={() => navigation.navigate("Login")}>
        <Fonte style={styles.fonte}>Voltar</Fonte>
      </TouchableOpacity>
    </View>
  );
};


export default Historico;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000', // Cor de fundo da tela
  },
  logo: {
    width: 300,
    height: 150,
    bottom: 150,
  },
  hist:{
      height: 80,
      width: 250,
      backgroundColor: 'white',
      borderRadius: 16,
      justifyContent: 'center',
      alignItems: 'center'
  },
  teste:{
    color: 'white',
    fontSize: 25,
    borderBottomWidth: 2,
    borderColor: '#fff',
    bottom: 140,
  },
  teste2:{
    color: 'black',
    fontSize: 15,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fonte:{
    fontWeight: 'bold',
    fontSize: 16,
  },
  button:{
    fontSize: 15,
    height: 30,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    marginTop: 40,
    borderRadius: 6,
  }
});
