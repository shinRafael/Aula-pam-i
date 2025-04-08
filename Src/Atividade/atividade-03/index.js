import { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

function Atividade03 () {
  const [numero, setNumero] = useState(0);

  const handleIncrementa = () => {
    setNumero(numero + 1);
  };

  const handleDecrementa = () => {
    setNumero(numero - 1);
  };

  const handleZerar = () => {
    setNumero(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Exemplo 3</Text>

      <View style={styles.linhaContador}>
        <TouchableOpacity style={styles.botaoQuadrado} onPress={handleDecrementa}>
          <Text style={styles.txtBotaoQuadrado}>-</Text>
        </TouchableOpacity>

        <Text style={styles.valor}>{numero}</Text>

        <TouchableOpacity style={styles.botaoQuadrado} onPress={handleIncrementa}>
          <Text style={styles.txtBotaoQuadrado}>+</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.botaoZerar} onPress={handleZerar}>
        <Text style={styles.txtBotaoZerar}>Zerar</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Atividade03;