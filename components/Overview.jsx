import React from 'react'
import { View, Text, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';
import Deck from './Deck'
import styles from '../styles/styles'
import CreateDeckCard from './CreateDeckCard';


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
                        <Deck category={item} navigate={navigate} data={screenProps.state.decks[item]} />}
                keyExtractor={(item) => item + "_key_" + Date.now()}
            />
        </SafeAreaView>

    )
}

export default Overview
