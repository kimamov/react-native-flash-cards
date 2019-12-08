import React from 'react'
import { Text, TouchableOpacity } from 'react-native';
import styles from '../styles/styles';


const Button = ({buttonStyle=styles.button, textStyle, onPress, children, color}) => {
    return (
        <TouchableOpacity onPress={onPress} style={{...buttonStyle, backgroundColor: color || "grey"}}>
            <Text style={{textAlign: "center",...textStyle}}>
                {children}
            </Text>
        </TouchableOpacity>
    )
}

export default Button
