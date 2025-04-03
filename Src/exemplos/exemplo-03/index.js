import { View, Text, Button, Alert  } from 'react-native';
import styles from './styles';

function Exemplo03 () {

    function handleExibeBotao(){
        Alert.alert('Alerta', 'Alguém clicou no Botão!')
    }
    const handleExibeBotao2 = () => {
        Alert.alert('Alerta', 'Alguém clicou no Botão!')
    }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Exemplo 03</Text>
      <Text style={styles.texto}>Variá000veis e States</Text>
    <View style={styles.botaoAlert}>
      <Button 
            title='Não click'
            color={'darkslategrey'}
            onPress={handleExibeBotao}
      />
     </View>
    </View>
  );
}


export default Exemplo03;