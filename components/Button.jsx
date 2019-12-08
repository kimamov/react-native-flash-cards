import React from 'react'
import { Text, TouchableOpacity } from 'react-native';


const Button = ({buttonStyle, textStyle, onPress, children, color}) => {
    return (
        <TouchableOpacity onPress={onPress} style={{...buttonStyle, backgroundColor: color || "grey"}}>
            <Text style={{textAlign: "center",...textStyle}}>
                {children}
            </Text>
        </TouchableOpacity>
    )
}

export default Button
