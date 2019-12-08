import React from 'react'
import { View, Text, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';
import Deck from './Deck'
import styles from '../styles/styles'


const Overview = ({ screenProps }) => {
    if (!screenProps || !screenProps.questions)
        return <TouchableOpacity style={styles.card}><Text style={{ textAlign: "center" }}>NO DECKS FOUND</Text></TouchableOpacity>
    return (
        <SafeAreaView>
            <FlatList style={{ paddingBottom: 20 }}
                data={Object.keys(screenProps.questions)}
                renderItem={({ item }) =>
                    <Deck category={item} data={screenProps.questions[item]} />}
                keyExtractor={(item) => item + "_key_" + Date.now()}
            />
        </SafeAreaView>

    )
}

export default Overview
