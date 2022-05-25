import React from 'react'
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SimplePokemon } from '../interfaces/pokemonInterfaces';
import { FadeInImage } from './FadeInImage';
import { useState, useEffect, useRef } from 'react';

import ImageColors from 'react-native-image-colors'
import { useNavigation } from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;

interface Porps {
    pokemon: SimplePokemon
}

export const PokemonCards = ({ pokemon }: Porps) => {

    const [bgColor, setBgColor] = useState('grey');
    const isMounted = useRef(true);
    const {navigate}:any = useNavigation();

    useEffect(() => {
        ImageColors.getColors(pokemon.picture, { fallback: 'grey' })
            .then(colors => {
                if (!isMounted.current) return; // retorna y no llama
                (colors.platform === 'ios')
                    ? setBgColor(colors.background || 'grey')
                    : setBgColor(colors.dominant || 'grey');
                /* if (colors.platform === 'ios') {
                    setBgColor(colors.background || 'grey')
                } else {
                    setBgColor(colors.dominant || 'grey')
                } */
            })
            .catch(err => {
                console.log(err)
            })

        return () => { // el retorno de un useefect significa que es cuando se desmonta el componente
            isMounted.current = false;
        }

    }, [])


    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigate('Pokemon', { simplePokemon: pokemon, color: bgColor })}
                >
                <View
                    style={{
                        ...styles.cardContainer,
                        width: windowWidth * 0.4,
                        backgroundColor: bgColor
                    }}
                >
                    {/* Nombre del pokemon y ID */}
                    <View>
                        <Text style={styles.name}>
                            {pokemon.name}
                            {'\n#' + pokemon.id}
                        </Text>
                    </View>
                    <View style={styles.pokebolaContainer}>
                        <Image
                            source={require('../assets/pokebola-blanca.png')}
                            style={styles.pokebola}
                        />
                    </View>

                    <FadeInImage
                        uri={pokemon.picture}
                        style={styles.pokemonImage}
                    />
                </View>
        </TouchableOpacity >
    )
}


const styles = StyleSheet.create({
    cardContainer: {
        marginHorizontal: 10,
        //backgroundColor: 'grey',
        height: 120,
        width: 160,
        marginBottom: 25,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        //overflow: 'hidden',// lo que se salga de la casa se oculta
    },
    name: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        top: 20,
        left: 10
    },
    pokebola: {
        width: 100,
        height: 100,
        position: 'absolute',
        bottom: -25,
        right: -25,
        opacity: 0.5
    },
    pokemonImage: {
        width: 120,
        height: 120,
        position: 'absolute',
        right: -7,
        bottom: -5,
    },
    pokebolaContainer: {
        //backgroundColor: 'blue',
        width: 100,
        height: 100,
        position: 'absolute',
        bottom: 0,
        right: 0,
        overflow: 'hidden',
        opacity: 0.5
    }
});