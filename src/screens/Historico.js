import React, { useState } from "react";
import { View, Text, StyleSheet} from "react-native";

const Historico = ({ navigation }) =>{
    return(
    <View>
      <Text>Cadastro</Text>
      <Button title="Fazer o Login" onPress={() => navigation.navigate('Login')} />
    </View>
    );
};
export default Historico;

const styles = StyleSheet.create({
  
});