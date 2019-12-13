import React, { useState } from 'react'
import { View, Text, FlatList, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
import Button from './Button'
import styles from '../styles/styles'

const CreateDeck = ({ navigation, screenProps }) => {
    const {dispatch}=screenProps;
    const [name, setName] = useState("");

    const createDeck=()=>{
        if(name){
            dispatch({type: "createDeck", payload: name, onCreate: ()=> navigation.navigate("createCard", { category: name })})
        }
    }

    return (
        <SafeAreaView style={styles.innerContainer}>
            <Text style={{ ...styles.headingText, textTransform: "uppercase" }}>CREATE NEW DECK</Text>
            <TextInput style={{ ...styles.textInput, marginTop: 20, marginBottom: 20 }} placeholder="give your deck a name" value={name} onChangeText={(text) => setName(text)}>
            </TextInput>
            <Button onPress={createDeck}>CREATE</Button>
        </SafeAreaView>
    )
}

CreateDeck.navigationOptions={
    title: "Create Deck"
}

export default CreateDeck
