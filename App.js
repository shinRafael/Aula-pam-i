import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import Constants from 'expo-constants';

// Exemplos
import Exemplo01 from './Src/exemplos/exemplos-01';
import Exemplo02 from './Src/exemplos/exemplos-02';
import Exemplo03 from './Src/exemplos/exemplo-03';
import Exemplo04 from './Src/exemplos/exemplos-04';
import Exemplo05 from './Src/exemplos/exemplo-05';
import Exemplo07 from './Src/exemplos/exemplo-07';
import Exemplo08 from './Src/exemplos/exemplo-08';
//Atividades
import Atividade01 from './Src/Atividade/atividade-01';

import Atividade02 from './Src/Atividade/atividade-02';

import Atividade03 from './Src/Atividade/atividade-03';

import Atividade04 from './Src/Atividade/atividade-04';

import Atividade05 from './Src/Atividade/atividade-05';

import Atividade06 from './Src/Atividade/atividade-06';

import Atividade08 from './Src/Atividade/atividade-08';

export default function App() {
  return (
    <View style={styles.container}>
      <Atividade08/>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: 'center',
    //justifyContent: 'center',
    padding: 8,
    marginTop: Constants.statusBarHeight || 8, 
  },
});
