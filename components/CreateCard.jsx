import React, { useState } from 'react'
import { Text, SafeAreaView, TextInput } from 'react-native';
import Button from './Button'
import styles from '../styles/styles'

const CreateCard = ({ navigation, screenProps }) => {
    const [question, setQuestion] = useState("");

    const questionCategory = navigation.state.params.category;
    const createCard = () => {
        console.log(questionCategory)
        if (questionCategory) {
            screenProps.dispatch({
                type: "addCard",
                deckName: questionCategory,
                payload: { question: "in JS [] equals true?", answer: 1 }
            })
        }
    }
    return (
        <SafeAreaView style={styles.innerContainer}>
            <Text style={{ ...styles.headingText, textTransform: "uppercase" }}>CREATE A QUESTION FOR {questionCategory}</Text>
            <TextInput style={{...styles.textInput, marginTop: 20, marginBottom: 20}} placeholder="your question" value={question} onChange={(event) => setQuestion(e.target.value)}>

            </TextInput>
            <Button onPress={createCard} style={styles.button}>CREATE</Button>
        </SafeAreaView>
    )
}

export default CreateCard
