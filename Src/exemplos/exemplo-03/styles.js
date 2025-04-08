import { StyleSheet } from "react-native";

import { RFPercentage } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
    container: {
        flex: 1, //ocupa 100% da tela
        backgroundColor: '#fff',
        borderRadius: 5, //borda redonda
        padding: 8, //distacia entre o item e a borda
        alignItems: 'center',
    },
    titulo: {
        fontSize: RFPercentage(4),
        borderWidth: 3,
        marginTop: 20,
        marginBottom: 20,
        //padding: 8,
        width: '100%',
        height: 80,
        textAlign: 'center',
        textAlignVertical: 'center',
        color: 'red',
        borderColor: 'red',
        borderRadius: 20,
    },
    texto: {
        fontSize: RFPercentage(2.2),
    },
    botaotexto: {
        fontSize: RFPercentage(2),
        textAlign: 'center',
        marginTop: 20,
        textAlignVertical: 'center',
        color: 'green',
    },
    botaocondominio: {
        marginLeft: '5',
        marginRight: 'auto',
        backgroundColor: 'black',
        borderWidth: 3,
        marginTop: 20,
        marginBottom: 20,
        //padding: 8,
        width: '30%',
        height: 100,
        textAlign: 'center',
        textAlignVertical: 'center',
        color: 'green',
        borderColor: 'green',
        borderRadius: 20,
    },
    botaoAlert:{
        width: '75%',
        margin: RFPercentage(2),
    },
    valor:{
        color:'darkslategrey',
        fontSize: RFPercentage(4),
    },
    botao:{
        backgroundColor: 'darkslategrey',
        width:'75%',
        borderRadius: RFPercentage(2),
        padding: RFPercentage(1.5),
        alignItems: 'center',
        justifyContent: 'center',
    },
    txtBotao:{
        fontSize: RFPercentage(2),
        color: 'darkslategrey',
    },
});

export default styles;
