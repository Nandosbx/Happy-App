import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Dimensions, Alert } from 'react-native'
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import { Feather } from '@expo/vector-icons'

import mapMarker from '../images/map-marker.png'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { RectButton } from 'react-native-gesture-handler'
import * as Location from 'expo-location'

import api from '../services/api'

interface Orphanage {
    id: number
    name: string
    latitude: number
    longitude: number
}

export default function OrphanagesMap() {
    const navigation = useNavigation()

    const [orphanages, setOrphanages] = useState<Orphanage[]>([])
    const [initialPosition, setInitialPosition] = useState<[number, number]>([
        0,
        0,
    ])

    useFocusEffect(() => {
        api.get('/orphanages').then(({ data }) => {
            setOrphanages(data)
        })
    })

    const handleNavigateToOrphanageDetails = (id: number) => {
        navigation.navigate('OrphanageDetails', { id })
    }

    const handleNavigateToCreateOrphanage = () => {
        navigation.navigate('SelectMapPosition')
    }

    useEffect(() => {
        async function loadPosition() {
            const { status } = await Location.requestPermissionsAsync()

            if (status !== 'granted') {
                Alert.alert(
                    'Ooooops...',
                    'Precisamos de sua permissão para obter a localização'
                )
                return
            }

            const location = await Location.getCurrentPositionAsync({
                accuracy: Location.Accuracy.High,
            })

            const { latitude, longitude } = location.coords

            setInitialPosition([latitude, longitude])
        }

        loadPosition()
    }, [])

    return (
        <View style={styles.container}>
            {initialPosition[0] !== 0 && (
                <MapView
                    provider={PROVIDER_GOOGLE}
                    loadingEnabled={true}
                    style={styles.map}
                    initialRegion={{
                        latitude: initialPosition[0],
                        longitude: initialPosition[1],
                        latitudeDelta: 0.014,
                        longitudeDelta: 0.014,
                    }}
                >
                    {orphanages.map((orphanage) => {
                        return (
                            <Marker
                                key={orphanage.id}
                                icon={mapMarker}
                                calloutAnchor={{
                                    x: 2.4,
                                    y: 0.8,
                                }}
                                coordinate={{
                                    latitude: orphanage.latitude,
                                    longitude: orphanage.longitude,
                                }}
                            >
                                <Callout
                                    tooltip
                                    onPress={() =>
                                        handleNavigateToOrphanageDetails(
                                            orphanage.id
                                        )
                                    }
                                >
                                    <View style={styles.calloutContainer}>
                                        <Text style={styles.calloutText}>
                                            {orphanage.name}
                                        </Text>
                                    </View>
                                </Callout>
                            </Marker>
                        )
                    })}
                </MapView>
            )}

            <View style={styles.footer}>
                <Text style={styles.footerText}>
                    {orphanages.length} orfanatos encontrados
                </Text>

                <RectButton
                    style={styles.createOrphanageButton}
                    onPress={handleNavigateToCreateOrphanage}
                >
                    <Feather name="plus" size={20} color="#FFF" />
                </RectButton>
            </View>
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
    },

    calloutContainer: {
        width: 160,
        height: 46,
        paddingHorizontal: 16,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderRadius: 16,
        justifyContent: 'center',
    },

    calloutText: {
        color: '#0089A5',
        fontSize: 14,
    },

    footer: {
        position: 'absolute',
        left: 24,
        right: 24,
        bottom: 32,

        backgroundColor: '#FFF',
        borderRadius: 20,
        height: 56,
        paddingLeft: 24,

        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

        elevation: 3,
    },

    footerText: {
        fontFamily: 'Nunito_700Bold',
        color: '#8FA7b3',
    },

    createOrphanageButton: {
        width: 56,
        height: 56,
        backgroundColor: '#15c3d6',
        borderRadius: 20,

        justifyContent: 'center',
        alignItems: 'center',
    },
})
