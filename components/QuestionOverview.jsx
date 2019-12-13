import React from 'react'
import { Text, FlatList, SafeAreaView } from 'react-native';
import Deck from './Deck'
import styles from '../styles/styles'
import CreateDeckCard from './CreateDeckCard';
import Card from './Card';
import uuid from 'uuid'


const QuestionOverview = ({ navigation, screenProps }) => {
    const { navigate } = navigation;
    const { category } = navigation.state.params;
    const data=screenProps.state.decks[category];

    if (!category || !data || !data.questions || !data.questions.length)
        return <CreateDeckCard onPress={() => { navigate("createCard", { category: category }) }}>NO CARDS FOUND... CREATE ONE</CreateDeckCard>
    return (
        <SafeAreaView style={styles.innerContainer}>
            <Text style={styles.headingText}>{category}</Text>
            <FlatList style={{ paddingBottom: 20 }}
                data={data.questions.concat("createDeckItem")}
                renderItem={({ item }) =>
                    item === "createDeckItem" ?
                        <CreateDeckCard onPress={() => { navigate("createCard", { category: category }) }}>ADD QUESTION</CreateDeckCard> :
                        <Card style={styles.card}>{item.question}</Card>}
                keyExtractor={() => "question_key_" + uuid()}
            />
        </SafeAreaView>

    )
}

QuestionOverview.navigationOptions={
    title: "Cards"
}

export default QuestionOverview
