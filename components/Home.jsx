import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Button from './Button'
import styles from '../styles/styles'


const Home = ({navigation}, props) => {
    const {navigate}=navigation;
    return (
        <View style={{...styles.innerContainer, justifyContent: "center"}}>
            <Text style={styles.headingText}>
                FLASH CARDS
            </Text>
            <View style={{...styles.buttonContainer, marginTop: 40}}>
                <Button /* color="green" */ onPress={()=>{navigate("overview")}} buttonStyle={styles.flexButton}>PLAY</Button>
                <Button /* color="blue" */ onPress={()=>{navigate("createDeck")}} buttonStyle={styles.flexButton}>CREATE DECK</Button>
            </View>
        </View>
    )
}

export default Home

