import React, { useState, useEffect } from 'react'
import FlipCard from 'react-native-flip-card'
import { Text, SafeAreaView, View } from 'react-native';
import styles from '../styles/styles'
import Card from './Card';
import Button from './Button'



const Quiz = ({ navigation }) => {
    const { params } = navigation.state;
    if (!params.category || !params.data) return <Card >LOOKS LIKE THIS DECK IS BROKEN :(</Card>
    if (!params.data.length) return <Card >LOOKS LIKE DECK IS EMPTY</Card>

    useEffect(() => {
        getRandomQuestion()
    }, [params])

    const questionsArr = [...params.data];
    const [flip, setFlip] = useState(false);
    const [answer, setAnswer] = useState(null);
    const [question, setQuestion] = useState({ question: 0, answer: 0, comment: 0 });
    const answerQuestion = (answer) => {
        if (answer === question.answer) {
            return setAnswer("CORRECT")
        }setAnswer("WRONG")
    }
    const getRandomQuestion = () => {
        setAnswer(null);
        setFlip(false);
        const randomIndex = Math.floor(Math.random() * questionsArr.length);
        const question = questionsArr.splice([randomIndex], 1);
        console.log(question)
        if (question) setQuestion(question[0])
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.quizWrapper}>
                <FlipCard clickable={false} flip={flip} style={{ flex: 1 }}>
                    <Card style={styles.quizFront}>{question.question}</Card>
                    <Card style={styles.quizBack}>{question.answer}</Card>
                </FlipCard>
            </View>
            {answer ?
                <View>
                    <Text style={styles.headingText}>{answer}</Text>
                    <Button style={{...styles.button, margin: 8}}>NEXT</Button>
                </View>
                 :
                <View style={styles.buttonContainer}>
                    <Button buttonStyle={styles.flexButton} onPress={() => answerQuestion(1)}>TRUE</Button>
                    <Button buttonStyle={styles.flexButton} onPress={() => answerQuestion(0)}>FALSE</Button>
                </View>}
        </SafeAreaView>

    )
}

export default Quiz
