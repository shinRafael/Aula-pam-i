import { StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
        borderRadius: 5,
        padding: 8,
        alignItems: 'center',
    },
    titulo:{
        fontSize: RFPercentage(3.5),
        borderWidth: 3, 
        marginTop: 20,
        marginBottom: 20,
        //pedding: 8,
        width: '100%',
        height: 80,
        textAlign: 'center',
        textAlignVertical: 'center',
        color: 'green',
        borderColor: 'green',
        borderRadius: 20,

    },
    texto:{ 
        fontSize: RFPercentage(2.2),

    }
});

export default style;
