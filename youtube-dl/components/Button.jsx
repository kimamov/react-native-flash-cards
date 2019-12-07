import React from 'react'
import { Text, TouchableOpacity } from 'react-native';


const Button = ({text, buttonStyle, textStyle, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
            <Text style={{textAlign: "center",...textStyle}}>
                {text}
            </Text>
        </TouchableOpacity>
    )
}

export default Button
