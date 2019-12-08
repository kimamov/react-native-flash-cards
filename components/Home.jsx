import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Button from './Button'

const Home = ({navigation}, props) => {
    console.log(props)
    const {navigate}=navigation;
    return (
        <View style={{flex: 1, marginTop: 20}}>
            <Text style={{textAlign: "center"}}>
                HELLO
            </Text>
            <View style={styles.buttonContainer}>
                <Button color="green" onPress={()=>{navigate("Overview")}} buttonStyle={styles.button}>PLAY</Button>
                <Button color="blue" onPress={()=>{navigate("CreateDecks")}} buttonStyle={styles.button}>CREATE DECK</Button>
            </View>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
       
    },
    button: {
       borderWidth: 1,
       borderRadius: 5,
       paddingTop: 10,
       paddingBottom: 10,
       marginLeft: 8,
       marginRight: 8,
       flex: 1,
       textAlign: "center"
    }
 })