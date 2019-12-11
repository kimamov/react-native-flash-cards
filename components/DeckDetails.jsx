import React from 'react'
import { Text, SafeAreaView, View } from 'react-native';
import styles from '../styles/styles'
import Button from './Button'

const DeckDetails = ({ navigation, screenProps }) => {
    const { category } = navigation.state.params;
    const { navigate } = navigation;
    const data=screenProps.state.decks[category];

    return (
        <SafeAreaView style={{ ...styles.innerContainer, justifyContent: "center" }}>
            <View style={{ ...styles.card, height: 300, marginBottom: 40 }}>
                <Text style={styles.headingText}>{category}</Text>
                <Text style={{ textAlign: "center", fontSize: 24 }}>{data.solved || 0} / {data.questions ? data.questions.length : 0}</Text>
                <View style={styles.buttonContainer}>
                    <Button buttonStyle={styles.flexButton} onPress={() => { navigate("questionOverview", { category: category }) }} >VIEW QUESTIONS</Button>
                    <Button buttonStyle={styles.flexButton} onPress={() => { navigate("createCard", { category: category }) }} >ADD QUESTION</Button>
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <Button buttonStyle={styles.flexButton} onPress={() => { navigate("quiz", { category: category }) }} >SOLVE</Button>
                <Button buttonStyle={styles.flexButton} onPress={() => { navigate("unsolvedQuiz", { category: category }) }} >SOLVE UNSOLVED</Button>
            </View>

        </SafeAreaView>
    )
}

export default DeckDetails
