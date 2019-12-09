import React from 'react'
import { View, Text } from 'react-native';
import Button from './Button'
import styles from '../styles/styles'

const Deck = ({ category, data, navigate }) => {
    return (
        <View style={styles.card}>
            <Text style={styles.headingText}>{category}</Text>
            <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-around" }}>
                <Button buttonStyle={styles.flexButton} color="red" text="play">PLAY</Button>
                <Button buttonStyle={styles.flexButton} onPress={()=>{navigate("createCard", {category: category})}} color="blue" text="add card">ADD CARD</Button>
            </View>
        </View>
    )
}

export default Deck
