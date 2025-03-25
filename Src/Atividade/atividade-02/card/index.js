import { View, Text, Image } from 'react-native';
import styles from './styles';

const whey1 = require('../../../assets/whey.jpg');
const whey2 = require('../../../assets/whey2.jpg');
const whey3 = require('../../../assets/whey3.jpg');

import Mensagem from './mensagem';

function Exemplo02() {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo 2</Text>
            
            {/* Exibindo a primeira imagem */}
            <Image source={whey1} style={styles.imagem} />

            {/* Mensagens */}
            <Mensagem titulo={'Sucesso'}>
                Valor enviado corretamente!
            </Mensagem>

            <Mensagem titulo={'Erro'}>
                O programa não respondeu como esperado!
            </Mensagem>

            <Mensagem titulo={'Alerta'}>
                Você não pode fazer isso!
            </Mensagem>
        </View>
    );
}

