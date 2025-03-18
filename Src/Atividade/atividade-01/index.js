import { View, Text, Button, Alert } from 'react-native';
import styles from './styles';

function Atividade01() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Bem-Vindo</Text>
      <Text style={styles.texto}>Telas de Exemplo do Condoo.</Text>
    </View>
  );
}

export default function App() {
  return (
    <View style={{ flex: 5, justifyContent: 'center', alignItems: 'center' }}>
      <Atividade01 />
      <Button title="Clique Aqui" onPress={() => Alert.alert('Obrigado por aperta :)')} />
    </View>
  );
}

//export default Atividade01;