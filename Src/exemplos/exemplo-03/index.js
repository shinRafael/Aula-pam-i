import { useState } from 'react';
import { View, Text, Button, Alert, TouchableOpacity } from 'react-native';

import styles from './styles';

function Exemplo03 () {

   const [numero, setNumero] = useState(0);

   function handleIncremente(){
    setNumero(numero + 1);
   }

    
    function handleExibeBotao(){
        Alert.alert('Alerta', 'Alguém clicou no Botão!')
    }
    const handleExibeBotao2 = () => {
        Alert.alert('Alerta', 'Alguém clicou no Botão!'
        , [
          {
            text: 'Sim',
            onPress: () => alert('Mensagem', 'Clicou em sim'),
            style: 'default',
          },
          {
            text: 'Não',
            onPress: () => alert('Clicou em não'),
            style: 'default',
          },
          {
            text: 'Cancelar',
            onPress: () => alert('Clicou em cancelar'),
            style: 'default',
          },
        ]
      );
      }
     
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Exemplo 03</Text>
      <Text style={styles.texto}>Variáveis e States</Text>
    <View style={styles.botaoAlert}>
      <Button 
            title='Não click'
            color={'darkslategrey'}
            onPress={handleExibeBotao2}
      />
     </View>
     <Text style={styles.valor}>{numero}</Text>
     <TouchableOpacity style={styles.botao} onPress={handleIncremente}>
      <Text style={styles.txtBotão}>+1</Text>
     </TouchableOpacity>
    </View>
  );
}


export default Exemplo03;