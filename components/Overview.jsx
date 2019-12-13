import React from 'react'
import { View, Text, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';
import Deck from './Deck'
import styles from '../styles/styles'
import CreateDeckCard from './CreateDeckCard';
import uuid from 'uuid-js';
import Button from './Button'


const DeckWithButtons = ({navigate, category, data}) => {
    return (
        <Deck navigate={navigate} category={category} data={data}>
            <View style={styles.buttonContainer}>
                <Button buttonStyle={styles.flexButton} onPress={() => { navigate("quiz", { category: category }) }} >PLAY</Button>
                <Button buttonStyle={styles.flexButton} onPress={() => { navigate("createCard", { category: category }) }} >ADD CARD</Button>
            </View>
        </Deck>)
}

const Overview = ({ screenProps, navigation }) => {
    const { navigate } = navigation;
    if (!screenProps || !screenProps.state || !screenProps.state.decks)
        return <CreateDeckCard onPress={() => { navigate("createDeck") }}>NO DECKS FOUND... CREATE ONE</CreateDeckCard>
    return (
        <SafeAreaView>
            <FlatList style={{ paddingBottom: 20 }}
                data={Object.keys(screenProps.state.decks).concat("createDeckItem")}
                renderItem={({ item }) =>
                    item === "createDeckItem" ?
                        <CreateDeckCard onPress={() => { navigate("createDeck") }}>CREATE DECK</CreateDeckCard> :
                        <DeckWithButtons category={item} navigate={navigate} data={screenProps.state.decks[item]} />}
                keyExtractor={(item) => item + "deck_key_" + uuid()}
            />
        </SafeAreaView>

    )
}

export default Overview
