import React, { useState } from 'react';
import { Button, Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const Home = ({ navigation }) => {
    const [ponto, setPonto] = useState(0);
    const [ponto2, setPonto2] = useState(0);
    const [num, setNum] = useState(0);
    const [num2, setNum2] = useState(0);

    const ganhoSet = () => {
      if (ponto == 25){
        setNum(ponto + 1);
        setPonto(0)
        setPonto2(0) 
      } else if(ponto2 == 25){
        setNum2(num2 + 1)
        setPonto(0)
        setPonto2(0)
      }
    }

    
    return (
      <View>

        <Text>Set</Text>
        <Text>{ganhoSet()}{num}</Text>

        <Text></Text>
        <View>{ponto}</View>
        <Button title='+' 
        onPress={() => setPonto(ponto + 1)} />
        
        <Button title='-'
        onPress={() => setPonto(ponto - 1)} />
        

        <Text>X</Text>
        <View ></View>

        <Text>Set</Text>
        <Text>{num2}</Text>

        <Text></Text>
        <View>{ponto}</View>
        <Button title='+'
        onPress={() => setPonto2(ponto2 + 1)} />

        <Button title='-' 
        onPress={() => setPonto2(ponto2 - 1)} />

        <View></View>

        <Text>Deseja mudar os times?</Text>
        <TouchableOpacity>
          <Text>Voltar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {setPonto(0), setPonto2(0)}}>
          <Text>Resetar</Text>
        </TouchableOpacity>
      </View>
      
    );
  };

  export default Home;

  const styles = StyleSheet.create({
    logo:{

    },
    sets:{

    },
    pontuacao:{

    },
    barraVertical:{

    },
    barraHorizon:{

    },
    adicao:{

    },
    diminuir:{

    },
    reset:{

    },
    texto:{

    }
  });
  