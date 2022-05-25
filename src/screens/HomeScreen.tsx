import React from 'react'
import { Button, Image, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from '../theme/appTheme';


export const HomeScreen = () => {

    const { top } = useSafeAreaInsets();

    return (
        <>
            <Image
                source={require('../assets/pokebola.png')}
                style={styles.pokebolaBG}
            />


            <Text style={{
                ...styles.title,
                ...styles.globalMargin,
                top: top + 20,
            }}>Pokedex</Text>
        </>
    )
}
