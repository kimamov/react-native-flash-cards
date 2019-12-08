import React from 'react'
import { View, Text, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';
import styles from '../styles/styles'


const CreateDeckCard = ({ children, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.card}>
            <Text style={styles.headingText}>
                {children}
            </Text>
        </TouchableOpacity>
    )
}

export default CreateDeckCard
