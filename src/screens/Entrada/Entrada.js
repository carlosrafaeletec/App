import React, { useState } from 'react';
import { View, Image, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import Fonte from '../../components/Fonte';

const Entrada = ({ navigation, route, teste, logoApp }) => {
  // Estados para armazenar o nome de usuário e senha
  const [username, setUsername] = useState('');
  const [username2, setUsername2] = useState('');
  const aftUser = route.params?.team;
  const aftUser2 = route.params?.team2;
  const set1 = route.params?.num;
  const set2 = route.params?.num2;

  const handleLogin = () => {
    // Verificar se ambos os campos de nome de usuário estão preenchidos
    if (username.trim() !== '' && username2.trim() !== '') {
      // Navegar para a tela "Home" apenas se ambos os campos estiverem preenchidos
      navigation.navigate('Cont', {username, username2});
    } else {
      // Exibir uma mensagem de erro ou fazer qualquer outra ação desejada se os campos não estiverem preenchidos
      alert('Por favor, preencha ambos os campos de Time.');
    }
  };

  return (

    <ImageBackground style={styles.fundoImg}
    source={require('../../../assets/entrar.png')}>

      <View style={styles.container}>
        <Image
          source={require('../../../assets/logo.png')}
          style={styles.logo}
        />
        <TextInput
          style={styles.input}
          placeholder="Time 1:"
          placeholderTextColor="#fff"
          value={username}
          onChangeText={setUsername}
          autoCapitalize='words'
        />
        <TextInput
          style={styles.input}
          placeholder="Time 2:"
          placeholderTextColor="#FFF"
          value={username2}
          onChangeText={setUsername2}
          autoCapitalize='words'
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Fonte style={styles.buttonText}>Entrar</Fonte>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}
        onPress={() => navigation.navigate("Hist", {aftUser, aftUser2, set1, set2 })}>
          <Fonte style={styles.buttonText2}>Historico</Fonte>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

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
    bottom: 30,
  },
  input: {
    width: '80%',
    height: 40,
    backgroundColor: 'transparent', // Cor de fundo do campo de texto
    marginBottom: 10,
    marginTop: 20,
    paddingLeft: 10,
    borderRadius: 5,
    borderBottomWidth: 2,
    borderColor: 'white',
    color: 'white',
  },
  button: {
    backgroundColor: 'transparent', // Cor de fundo do botão
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 50,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#fff',
  },
  buttonText: {
    color: '#fff', // Cor do texto do botão
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonText2:{
    fontWeight: 'bold',
    fontSize: 18,
    color: '#fff',

  }
});

export default Entrada;
