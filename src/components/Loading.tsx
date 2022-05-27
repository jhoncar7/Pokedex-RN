import React from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'

export const Loading = () => {
    return (
        <View style={styles.activityContainer}>
            <ActivityIndicator
                color={'grey'}
                size={50}
            />
            <Text>Cargando...</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    activityContainer: {
        flex: 1,
        //backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
    }
});