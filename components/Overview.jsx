import React from 'react'
import { View, Text, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';
import Deck from './Deck'
import styles from '../styles/styles'
import CreateDeckCard from './CreateDeckCard';


const Overview = ({ screenProps }) => {
    if (!screenProps || !screenProps.questions)
        return <CreateDeckCard>NO DECKS FOUND... CREATE ONE</CreateDeckCard>
    return (
        <SafeAreaView>
            <FlatList style={{ paddingBottom: 20 }}
                data={Object.keys(screenProps.questions).concat("createDeckItem")}
                renderItem={({ item }) =>
                    item === "createDeckItem" ? <CreateDeckCard>CREATE DECK</CreateDeckCard> : <Deck category={item} data={screenProps.questions[item]} />}
                keyExtractor={(item) => item + "_key_" + Date.now()}
            />
        </SafeAreaView>

    )
}

export default Overview
