import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { RootStackParams } from '../navigator/Navigator'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FadeInImage } from '../components/FadeInImage';
import { usePokemon } from '../hooks/usePokemon';
import { PokemonFetails } from '../components/PokemonFetails';

interface Props extends StackScreenProps<RootStackParams, 'Pokemon'> { }; // tipado para los props

export const PokemonScreen = ({ navigation, route }: Props) => {

    const { simplePokemon, color } = route.params;
    const { top } = useSafeAreaInsets();
    const { isLoading, pokemon } = usePokemon(simplePokemon.id);

    return (
        <View style={{ flex: 1 }}>
            <View
                style={{
                    ...styles.headerContainer,
                    backgroundColor: color,
                }}
            >
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={{
                        ...styles.backButton,
                        top: top + 10,
                    }}
                    onPress={() => {
                        navigation.pop()
                    }}
                >
                    <Icon name='arrow-back-outline' size={35} color='white' />
                </TouchableOpacity>

                <Text style={{
                    ...styles.pokemoName,
                    top: top + 45,
                }}>
                    {simplePokemon.name + '\n'} # {simplePokemon.id}
                </Text>

                <Image
                    source={require('../assets/pokebola-blanca.png')}
                    style={styles.pokeboll}
                />

                <FadeInImage
                    uri={simplePokemon.picture}
                    style={styles.pokemonImage}
                />

            </View>

            {
                isLoading ?
                    (
                        <View style={styles.loadingIndicator}>
                            <ActivityIndicator
                                color={color}
                                size={50}
                            //animating={isLoading}
                            />
                        </View>
                    )
                    : <PokemonFetails pokemon={pokemon} />
            }

        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        height: 370,
        zIndex: 999, // no se que es esto
        alignItems: 'center',
        borderBottomRightRadius: 1000,
        borderBottomLeftRadius: 1000,
    },
    backButton: {
        position: 'absolute',
        left: 20,
    },
    pokemoName: {
        color: 'white',
        fontSize: 40,
        alignSelf: 'flex-start',
        left: 20,
    },
    pokeboll: {
        width: 250,
        height: 250,
        bottom: -20,
        opacity: 0.7,
    },
    pokemonImage: {
        width: 250,
        height: 250,
        position: 'absolute',
        bottom: -15,
    },
    loadingIndicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});