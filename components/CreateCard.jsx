import React, { useState } from 'react'
import { Text, SafeAreaView, TextInput, View } from 'react-native';
import Button from './Button'
import styles from '../styles/styles'

const CreateCard = ({ navigation, screenProps }) => {
    const [question, setQuestion] = useState("");
    const [comment, setComment] = useState("");
    const [answer, setAnswer] = useState(1);
    const [createState, setCreate] = useState("");
    const activeButtonStyle = { ...styles.flexButton, borderColor: "purple", borderWidth: 4}

    const questionCategory = navigation.state.params.category;
    const createCard = () => {
        if (questionCategory && question) {
            screenProps.dispatch({
                type: "addCard",
                deckName: questionCategory,
                payload: { question: question || "nothing", answer: answer, comment: comment, solved: false }
            })
            setCreate("succesfully created!")
            setTimeout(()=>setCreate(""),5000);
        }
    }
    return (
        <SafeAreaView style={{...styles.innerContainer, justifyContent: "center"}}>
            {createState?<Text style={{ ...styles.headingText, textTransform: "uppercase" }}>{createState}</Text>:null}

            <Text style={{ ...styles.headingText, textTransform: "uppercase" }}>CREATE A QUESTION FOR {questionCategory}</Text>
            <TextInput style={{ ...styles.textInput, marginTop: 20, marginBottom: 20 }} placeholder="your question" value={question} onChangeText={(text) => setQuestion(text)}>
            </TextInput>

            <Text style={{ textAlign: "center", textTransform: "uppercase" }}>ANSWER ONLY TRUE OR FALSE</Text>
            <View style={styles.buttonContainer}>
                <Button buttonStyle={answer ? activeButtonStyle : styles.flexButton} onPress={() => setAnswer(1)}>TRUE</Button>
                <Button buttonStyle={answer ? styles.flexButton : activeButtonStyle} onPress={() => setAnswer(0)}>FALSE</Button>
            </View>

            <TextInput style={{ ...styles.textInput, marginTop: 20, marginBottom: 20 }} placeholder="comment or additional information" value={comment} onChangeText={(text) => setComment(text)}>

            </TextInput>
            <Button onPress={createCard} style={styles.button}>CREATE</Button>
        </SafeAreaView>
    )
}

export default CreateCard
