import { StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row", // Alinha os itens na horizontal (imagem + texto)
    alignItems: "center",
    borderWidth: 1,
    borderColor: "orange",
    borderRadius: 30,
    width: "90%",
    padding: 10,
    backgroundColor: "#fff",
    marginBottom: 10,
  },
  imagem: {
    width: 90,  // Ajuste o tamanho da imagem
    height: 140, // Ajuste o tamanho da imagem
    resizeMode: "contain",
    marginRight: 10, // Espaço entre a imagem e o texto
  },
  textContainer: {
    flex: 1, // Faz o texto ocupar o espaço restante
  },
  titulo: {
    fontSize: RFPercentage(3),
    fontWeight: "bold",
    color: "#00BFFF",
  },
  descricao: {
    fontSize: RFPercentage(2.2),
    color: "#222",
  },
});

export default styles;