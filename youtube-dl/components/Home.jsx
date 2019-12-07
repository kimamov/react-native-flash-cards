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
                <Button onPress={()=>{navigate("Overview")}} text="PLAY" buttonStyle={{...styles.button, backgroundColor: "red"}}/>
                <Button onPress={()=>{navigate("CreateDecks")}} text="CREATE DECK" buttonStyle={styles.button}/>
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
       backgroundColor: '#00aeef',
       borderColor: 'red',
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