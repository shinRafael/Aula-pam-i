import { useState } from 'react'; 
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import styles from './styles';

function Exemplo05(){ 
<View style={styles.container}>
  <Text style={styles.paragraph}> Exemplo 5 </Text>

  <Text style={styles.txtSaida}> Calculadora básica </Text>

  <Text style={styles.textLabel}> 1º número </Text>
  <TextInput style={styles.txtEntrada} />

  <Text style={styles.txtSaida}> + </Text>

  <Text style={styles.textLabel}> 2º número </Text>
  <TextInput style={styles.txtEntrada} />

  <Text style={[styles.txtSaida, {margin: 0}]}> = </Text>

  <Text style={styles.textLabel}> Total </Text>
  <TextInput style={styles.txtEntrada} />

  <TouchableOpacity style={styles.button}>
    <Text style={styles.textButton}> + </Text>
  </TouchableOpacity>
</View>

};
export default Exemplo05;