import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import MapView from 'react-native-map´s'

export default function App() {
    return (
        <View style={styles.container}>
            <MapView style={styles.map}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,

    }
})
