import { View, Text  } from 'react-native';
import styles from './styles';

function Card() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Bem-Vindo</Text>
      <Text style={styles.texto}>Telas de Exemplo do Condoo.</Text>
    </View>
  );
}


export default Card;