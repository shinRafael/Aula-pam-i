
import { StyleSheet } from "react-native";

import { RFPercentage } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
    container: {
        borderWidth: RFPercentage(0.5),
        borderColor: 'darkslategray',
        padding: RFPercentage(1.5),
        borderRadius:RFPercentage(1.5),
        width: '90%',
        alignItems: 'center',
        marginBottom: RFPercentage(1),
    },
    titulo: {
        fontSize: RFPercentage(3.5),
        fontWeight: 'bold',
        color: 'red',
    },

});


export default styles; 