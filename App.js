import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import constants from 'expo-constants';

//Exemplos
import Exemplo01 from './Src/exemplos/exemplos-01'; 
//Atividade

import Atividade01 from '/src/Atividade/atividade-01';

export default function App() {
  return (
    <View style={styles.container}>
      <Atividade01/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    //alignItems: 'center',
    //justifyContent: 'center',
    padding: 8,
    marginTop: constants.statusBarHeight,
  },
});
