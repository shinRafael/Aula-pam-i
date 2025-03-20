import { View, Text } from 'react-native';

import styles from './styles';

function Mensagem(){
    return(
        <View style={styles.container}> 
            <Text style={styles.titulo}> titulo</Text>
            <Text style={styles.mensagem}>Mensagem</Text>
        </View>
    );
}

export default Mensagem;