import { TextInput } from 'react-native';

import styles from './styles';

 function Input({placeholder, valor, atualizaValor}) {
    return (
        <TextInput 
            style={[styles.input, {outline: 'none'}]} 
            placeholder={placeholder} 
            placeholderTextColor='lightgray' 
            keyboardType='numeric' 
            value={valor ? String(valor) : ""} 
            onChangeText={(valor) => atualizaValor(parseFloat(valor))}
        />
    );
}

export default Input;