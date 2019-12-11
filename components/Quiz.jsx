import React, { useState, useEffect } from 'react'
import FlipCard from 'react-native-flip-card'
import { Text, SafeAreaView, View } from 'react-native';
import styles from '../styles/styles'
import Card from './Card';
import Button from './Button'


let questionsArr;
let score = 0;

const QuizLogic = ({ category, data, navigate, dispatch }) => {

    const [flip, setFlip] = useState(false);
    const [answer, setAnswer] = useState(null);
    const [question, setQuestion] = useState({ question: 0, answer: 0, comment: 0 });
    const [done, setDone] = useState(false)


    useEffect(() => {
        questionsArr = []
        score = 0;
        questionsArr = [...data];
        getRandomQuestion()
        return () => {
            dispatch({
                type: "setScore",
                deckName: category,
            })
        };
    }, [category])




    const answerQuestion = (answer) => {
        if (answer === question.answer) {
            score++;
            dispatch({
                type: "solveCard",
                questionId: question.id,
                deckName: category
            })
            setAnswer("CORRECT")
        } else setAnswer("WRONG")
        setFlip(true)
    }


    const getRandomQuestion = () => {
        /* console.log(questionsArr.length) */
        if (questionsArr.length) {
            setAnswer(null);
            setFlip(false);
            const randomIndex = Math.floor(Math.random() * questionsArr.length);
            const question = questionsArr.splice([randomIndex], 1);
            /* console.log(questionsArr) */
            if (question.length) setQuestion(question[0])
        } else setDone(true)

    }

    const finishQuiz = () => {
        dispatch({
            type: "setScore",
            deckName: category,
        })
        navigate("overview")
    }

    if (done) {
        return <View style={styles.innerContainer}>
            <Text style={styles.headingText}>ALL QUESTIONS ANSWERED</Text>
            <Button onPress={finishQuiz} style={{ ...styles.button, margin: 8 }}>GO TO OVERVIEW</Button>
        </View>
    }
    return (
        <SafeAreaView style={styles.innerContainer}>
            <View style={styles.quizWrapper}>
                <FlipCard clickable={false} flip={flip} style={{ flex: 1 }}>
                    <Card style={styles.quizFront}>{question.question}</Card>
                    <Card style={styles.quizBack}>{question.answer ? "TRUE" : "FALSE"}</Card>
                </FlipCard>
            </View>
            {answer ?
                <View>
                    <Text style={styles.headingText}>{answer}</Text>
                    <Button onPress={getRandomQuestion} style={{ ...styles.button, margin: 8 }}>NEXT</Button>
                </View>
                :
                <View style={styles.buttonContainer}>
                    <Button buttonStyle={styles.flexButton} onPress={() => answerQuestion(1)}>TRUE</Button>
                    <Button buttonStyle={styles.flexButton} onPress={() => answerQuestion(0)}>FALSE</Button>
                </View>}
        </SafeAreaView>

    )
}


export const Quiz = ({ navigation, screenProps }) => {
    const { category } = navigation.state.params;
    const { navigate } = navigation;
    if (!category) return <Card >LOOKS LIKE THIS DECK IS BROKEN :(</Card>
    if (!screenProps.state.decks[category] || !screenProps.state.decks[category].questions) return <Card >LOOKS LIKE DECK DOES NOT EXIST</Card>
    if (!screenProps.state.decks[category].questions.length) return <Card >LOOKS LIKE DECK IS EMPTY</Card>

    const data = screenProps.state.decks[category].questions;
    return (
        <QuizLogic category={category} data={data} navigate={navigate} dispatch={screenProps.dispatch} />
    )
}

export const UnsolvedQuiz = ({ navigation, screenProps }) => {
    const { category } = navigation.state.params;
    const { navigate } = navigation;
    if (!category) return <Card >LOOKS LIKE THIS DECK IS BROKEN :(</Card>
    if (!screenProps.state.decks[category] || !screenProps.state.decks[category].questions) return <Card >LOOKS LIKE DECK DOES NOT EXIST</Card>
    if (!screenProps.state.decks[category].questions.length) return <Card >LOOKS LIKE DECK IS EMPTY</Card>
    const data = screenProps.state.decks[category].questions.filter(i => !i.solved);

    return (
        <QuizLogic category={category} data={data} navigate={navigate} dispatch={screenProps.dispatch} />
    )
}




