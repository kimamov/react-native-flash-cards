import React from 'react'
import { View, Text, FlatList, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
import Button from './Button'
import styles from '../styles/styles'

const CreateDeck = ({screenProps}) => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <Text style={styles.headingText}>CREATE DECK</Text>
            <Button style={styles.button}>CREATE</Button>
        </SafeAreaView>
    )
}

export default CreateDeck
