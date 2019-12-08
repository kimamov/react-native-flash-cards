import React from 'react'
import { View, Text } from 'react-native';
import Button from './Button'
import styles from '../styles/styles'

const Deck = ({ category, data }) => {
    console.log(category, data)
    return (
        <View style={styles.card}>
            <Text style={styles.headingText}>{category}</Text>
            <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-around" }}>
                <Button buttonStyle={styles.button} color="red" text="play">PLAY</Button>
                <Button buttonStyle={styles.button} color="blue" text="add card">ADD CARD</Button>
            </View>
        </View>
    )
}

export default Deck
