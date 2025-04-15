import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import styles from './styles';

function Atividade04() {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [nomeCompleto, setNomeCompleto] = useState('');

  const exibirNomeCompleto = () => {
    setNomeCompleto(`${nome} ${sobrenome}`);
    setNome('');
    setSobrenome('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Insira seu Nome</Text>
      <Text style={styles.texto}>{nomeCompleto}</Text>

      <Text>Nome</Text>
      <TextInput
        style={styles.txtInput}
        value={nome}
        onChangeText={(valor) => setNome(valor)}
        placeholder="Digite seu nome"
      />

      <Text>Sobrenome</Text>
      <TextInput
        style={styles.txtInput}
        value={sobrenome}
        onChangeText={(valor) => setSobrenome(valor)}
        placeholder="Digite seu sobrenome"
      />

      <TouchableOpacity style={styles.txtBotao} onPress={exibirNomeCompleto}>
        <Text style={styles.txtBotao}>Exibir texto</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Atividade04;