import React, { useState, useEffect } from 'react'
import { Text, SafeAreaView, TextInput, View } from 'react-native';
import Button from './Button'
import styles from '../styles/styles'
import uuid from 'uuid'

let timeOut;

const CreateCard = ({ navigation, screenProps }) => {
    const [question, setQuestion] = useState("");
    const [comment, setComment] = useState("");
    const [answer, setAnswer] = useState("");
    const [createState, setCreate] = useState("");
    const activeButtonStyle = { ...styles.flexButton, borderColor: "purple", borderWidth: 4 }

    const questionCategory = navigation.state.params.category;


    useEffect(() => {
        timeOut = null;
        return () => {
            clearTimeout(timeOut)
        };
    }, [])

    const createCard = () => {
        if (questionCategory && question && answer) {
            screenProps.dispatch({
                type: "addCard",
                deckName: questionCategory,
                payload: { id: uuid(), question: question || "nothing", answer: answer, comment: comment, solved: false }
            })
            setCreate("succesfully created!")
            timeOut = setTimeout(() => setCreate(""), 5000);
        }
    }

    const createAnother = () => {
        setQuestion("")
        setAnswer("")
        setCreate("")
        setComment("")
    }

    return (
        <SafeAreaView style={{ ...styles.innerContainer, justifyContent: "center" }}>
            {/* {createState?<Text style={{ ...styles.headingText, textTransform: "uppercase" }}>{createState}</Text>:null} */}

            <Text style={{ ...styles.headingText, textTransform: "uppercase" }}>CREATE A QUESTION FOR {questionCategory}</Text>
            <TextInput style={{ ...styles.textInput, marginTop: 20, marginBottom: 20 }} placeholder="your question" value={question} onChangeText={(text) => setQuestion(text)}>
            </TextInput>

            <Text style={{ textAlign: "center", textTransform: "uppercase", fontSize: 20 }}>ADD ANSWER TO QUESTION</Text>
            <TextInput style={{ ...styles.textInput, marginTop: 20, marginBottom: 40 }} placeholder="your answer" value={answer} onChangeText={(text) => setAnswer(text)}>
            </TextInput>

            {/* <TextInput style={{ ...styles.textInput, marginTop: 20, marginBottom: 20 }} placeholder="comment or additional information" value={comment} onChangeText={(text) => setComment(text)}>

            </TextInput> */}
            {createState ?
                <>
                    <Text style={{ textAlign: "center", fontSize: 20, marginBottom: 40, textTransform: "uppercase" }}>{createState}</Text>
                    <View style={styles.buttonContainer}>
                        <Button onPress={createAnother} buttonStyle={styles.flexButton}>CREATE MORE</Button>
                        <Button onPress={()=>navigation.navigate("Home")} buttonStyle={styles.flexButton}>DONE</Button>
                    </View>
                </> :
                <Button onPress={createCard} buttonStyle={styles.button}>CREATE</Button>}
        </SafeAreaView>
    )
}

CreateCard.navigationOptions={
    title: "Create Card"
}

export default CreateCard
