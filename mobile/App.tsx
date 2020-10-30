import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import MapView from 'react-native-map´s'

export default function App() {
    return (
        <View style={styles.container}>
            <MapView />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})
