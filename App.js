import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import Constants from 'expo-constants';

// Exemplos
import Exemplo01 from './Src/exemplos/exemplos-01';
import Exemplo02 from './Src/exemplos/exemplos-02';
//Atividades
import Atividade01 from './Src/Atividade/atividade-01';

export default function App() {
  return (
    <View style={styles.container}>
      <Exemplo02 />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'darkslategray',
    //alignItems: 'center',
    //justifyContent: 'center',
    padding: 8,
    marginTop: Constants.statusBarHeight || 8, 
  },
});
