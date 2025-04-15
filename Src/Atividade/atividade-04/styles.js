import { StyleSheet, TextInput } from "react-native";

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
    txtInput: { 
        borderWidth: RFPercentage(0.4),
        borderColor: 'red',
        color: 'violet',
        fontSize: RFPercentage(2.2),
        width: '90%',
        borderRadius:RFPercentage(2),
        marginVertical: RFPercentage(1.5),

    },
    txtBotao:{
        backgroundColor: 'black',
        width:'75%',
        borderRadius: RFPercentage(3.5),
        padding: RFPercentage(1),
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 20,
        fontWeight: "bold",
        fontWeight: "300",
        color: 'violet',
    },
});

export default styles;
