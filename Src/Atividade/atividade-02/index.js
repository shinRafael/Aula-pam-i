import { View, Text, Image } from "react-native";
import styles from "./styles";
import Card from "./card";

// Importando as imagens diretamente
import whey1 from '../../../assets/whey.jpg';
import whey2 from '../../../assets/whey2.jpg';
import whey3 from '../../../assets/whey3.jpg';

function Atividade02() {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Suplementos</Text>

            {/* Exibindo a primeira imagem */}
            <Image source={whey1} style={styles.imagem} />
            <Card titulo={'Whey limão'}>
                O programa não respondeu como esperado!
            </Card>

            {/* Exibindo a segunda imagem */}
            <Image source={whey2} style={styles.imagem} />
            <Card titulo={'Whey Café'}>
                Valor enviado corretamente!
            </Card>

            {/* Exibindo a terceira imagem */}
            <Image source={whey3} style={styles.imagem} />
            <Card titulo={'Argentino'}>
                O programa não respondeu como esperado!
            </Card>

            {/* Exibindo mais um cartão */}
            <Card titulo={'Alerta'}>
                Você não pode fazer isso!
            </Card>
        </View>
    );
}

export default Atividade02;
