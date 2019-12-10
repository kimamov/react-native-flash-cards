import React from 'react'
import { Text, SafeAreaView, View } from 'react-native';
import styles from '../styles/styles'


const Card = ({style, children}) => {
    return (
        <View style={style || styles.card}>
            <Text style={{textAlign: "center", fontSize: 24}}>
                {children}
            </Text>
        </View>
    )
}

export default Card
