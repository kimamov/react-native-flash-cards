import React from 'react'
import { View, Text, FlatList, SafeAreaView, TouchableOpacity, Alert } from 'react-native';
import Deck from './Deck'
import styles from '../styles/styles'
import CreateDeckCard from './CreateDeckCard';
import uuid from 'uuid-js';
import Button from './Button'



const DeckWithButtons = ({ navigate, category, data, dispatch }) => {
    const showAlert = () => {
        Alert.alert(
            `DELETING ${category}`,
            `do you really want to delete ${category}`,
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                { text: 'OK', onPress: () => dispatch({type: "deleteDeck", payload: category}) },
            ],
            { cancelable: true },
        )
        /*  () => dispatch({type: "deleteDeck", payload: category}) */
    }
    return (
        <Deck navigate={navigate} category={category} data={data}>
            <View style={styles.buttonContainer}>
                <Button buttonStyle={styles.flexButton} onPress={() => { navigate("questionOverview", { category: category }) }} >VIEW QUESTIONS</Button>
                <Button buttonStyle={styles.flexButton} onPress={showAlert} >DELETE DECK</Button>
            </View>
        </Deck>)
}

const DeckSettings = ({ screenProps, navigation }) => {
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
                        <DeckWithButtons dispatch={screenProps.dispatch} category={item} navigate={navigate} data={screenProps.state.decks[item]} />}
                keyExtractor={(item) => item + "deck_key_" + uuid()}
            />
        </SafeAreaView>

    )
}


DeckSettings.navigationOptions={
    title: "Edit Decks"
}

export default DeckSettings