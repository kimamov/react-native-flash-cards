import React, { useState, useEffect } from 'react'
import FlipCard from 'react-native-flip-card'
import { Text, SafeAreaView, View, TextInput } from 'react-native';
import styles from '../styles/styles'
import Card from './Card';
import Button from './Button'


let questionsArr;
let score = 0;
let questionCount = 0;

const QuizLogic = ({ category, data, navigate, dispatch }) => {

    const [flip, setFlip] = useState(false);
    const [answer, setAnswer] = useState("");
    const [question, setQuestion] = useState({ question: 0, answer: 0, comment: 0 });
    const [done, setDone] = useState(false)


    useEffect(() => {
        questionsArr = []
        score = 0;
        questionsArr = [...data];
        questionCount = questionsArr.length;
        getRandomQuestion()
        return () => {
            dispatch({
                type: "setScore",
                deckName: category,
            })
        };
    }, [category])




    const answerQuestion = () => {
        let solved = false;
        if (String(answer) === String(question.answer)) {
            score++;
            solved = true;
            setAnswer("CORRECT")
        } else setAnswer("WRONG")

        dispatch({
            type: "solveCard",
            questionId: question.id,
            deckName: category,
            payload: solved
        })
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
        navigate("Home")
    }

    if (done) {
        return <View style={{...styles.innerContainer, justifyContent: "center"}}>
            <Text style={{...styles.headingText, marginBottom: 40}}>ALL QUESTIONS ANSWERED</Text>
            <Text style={{...styles.headingText, marginBottom: 40}}>YOUR SCORE {score} / {questionCount}</Text>
            <Button onPress={finishQuiz} style={{ ...styles.button, margin: 8 }}>GO TO OVERVIEW</Button>
        </View>
    }
    return (
        <SafeAreaView style={styles.innerContainer}>
            <View style={styles.quizWrapper}>
                <FlipCard clickable={false} flip={flip} style={{ flex: 1 }}>
                    <Card style={styles.quizFront}>{question.question}</Card>
                    <Card style={styles.quizBack}>{question.answer}</Card>
                </FlipCard>
            </View>


            {flip ?
                <>
                    <Text style={styles.headingText}>{answer}</Text>
                    <Button onPress={getRandomQuestion} style={{ ...styles.button, margin: 8 }}>NEXT</Button>
                </>
                :
                <>
                    <View style={{ marginBottom: 40 }}>
                        <TextInput
                            style={{ ...styles.textInput, marginTop: 20, marginBottom: 10 }}
                            placeholder="your answer" value={answer} onChangeText={(text) => setAnswer(text)}
                        />
                        <Button color="green" onPress={answerQuestion} style={{ ...styles.button, margin: 8 }}>SUBMIT</Button>
                    </View>
                    <Button color="red" onPress={() => setFlip(true)} style={{ ...styles.button, margin: 8 }}>SHOW ANSWER</Button>
                </>
            }



        </SafeAreaView >

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




