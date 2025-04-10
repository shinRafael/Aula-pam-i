import { StyleSheet } from "react-native";

import { RFPercentage } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center', // Centraliza verticalmente
        alignItems: 'center',     // Centraliza horizontalmente
        padding: 16,
    },
    
    linhaContador: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20,
        gap: 20,
      },
      
      botaoQuadrado: {
        backgroundColor: 'gray',
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: RFPercentage(4),
      },
      
      txtBotaoQuadrado: {
        fontSize: RFPercentage(4),
        color: 'white',
      },
      
      botaoZerar: {
        backgroundColor: 'gray',
        paddingHorizontal: 40,
        paddingVertical: 15,
        borderRadius: 30,
        marginTop: 25,
      },
      
      txtBotaoZerar: {
        fontSize: RFPercentage(3),
        color: 'white',
      },
      titulo:{
        color: 'violet',
        fontFamily: 'arial',
        fontStyle: 'normal',
        fontWeight: '100',
        fontSize: RFPercentage(4)
      },
});

export default styles;
