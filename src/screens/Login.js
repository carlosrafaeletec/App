import React, { useState } from 'react';
import { View, Image, TextInput, TouchableOpacity, StyleSheet, Text } from 'react-native';

export const Login = ({ navigation }) => {
  // Estados para armazenar o nome de usuário e senha
  const [username, setUsername] = useState('');
  const [username2, setUsername2] = useState('');

  const handleLogin = () => {
    // Verificar se ambos os campos de nome de usuário estão preenchidos
    if (username.trim() !== '' && username2.trim() !== '') {
      // Navegar para a tela "Home" apenas se ambos os campos estiverem preenchidos
      navigation.navigate('Home', {username, username2});
    } else {
      // Exibir uma mensagem de erro ou fazer qualquer outra ação desejada se os campos não estiverem preenchidos
      alert('Por favor, preencha ambos os campos de Time.');
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/logo.png')}
        style={styles.logo}
      />
      <TextInput
        style={styles.input}
        placeholder="Time 1:"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Time 2:"
        value={username2}
        onChangeText={setUsername2}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000', // Cor de fundo da tela
  },
  logo: {
    width: 150,
    height: 150,
    marginTop: 90,
  },
  input: {
    width: '80%',
    height: 40,
    backgroundColor: '#fff', // Cor de fundo do campo de texto
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#fff', // Cor de fundo do botão
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#000000', // Cor do texto do botão
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Login;
