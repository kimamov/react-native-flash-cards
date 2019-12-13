import React from 'react'
import { View, Text } from 'react-native';
import Button from './Button'
import styles from '../styles/styles'
import { TouchableOpacity } from 'react-native-gesture-handler';

const Deck = ({ category, data, navigate, children }) => {
    return (
        <TouchableOpacity /* onPress={()=>navigate("deckDetails", {category: category, data: data})}  */ style={styles.card}>
            <Text style={styles.headingText}>{category}</Text>
            <Text style={{ textAlign: "center", fontSize: 24 }}>{data.solved || 0} / {data.questions? data.questions.length: 0}</Text>
            {children}
        </TouchableOpacity>
    )
}



export default Deck
