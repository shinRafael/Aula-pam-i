import { View, Text } from "react-native";

import styles from "./styles";
import Card from "./card";

import theLastImg from '../../../assets/whey.jpg';
import re5Img from '../../../assets/whey2.jpg';
import redImg from '../../../assets/whey.jpg';

function Atividade02() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo2}>Atividade 02</Text>
      <Card 
        titulo2="Whey Limão Siciliano" 
        descricao="Whey Growth de 1kg por $99,99" 
        img={theLastImg} 
      />
      <Card 
        titulo2="Whey Torta de Maracúja" 
        descricao="Whey Growth de 1k por $99,99" 
        img={re5Img} 
      />
      <Card 
        titulo2="Whey Sorvete de Limão" 
        descricao="Whey Growth de 1kg por $99,99" 
        img={redImg} 
      />
    </View>
  );
}

export default Atividade02;