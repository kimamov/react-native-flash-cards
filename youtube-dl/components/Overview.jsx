import React from 'react'
import { View, Text, FlatList, SafeAreaView } from 'react-native';

const Overview = ({screenProps}) => {
    return (
        <SafeAreaView>
            <Text>HELLO</Text>
            <FlatList 
                data={Object.keys(screenProps.questions)}
                renderItem={({item})=>
                <View><Text>{item}</Text></View>}
                keyExtractor={(item)=>item+"_key_"+Date.now()}
            />
        </SafeAreaView>

    )
}

export default Overview
