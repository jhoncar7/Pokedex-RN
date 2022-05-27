import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { PokemonFull } from '../interfaces/pokemonInterfaces';
import { FadeInImage } from './FadeInImage';

interface Props {
    pokemon: PokemonFull
}

export const PokemonFetails = ({ pokemon }: Props) => {
    return (
        <ScrollView
            showsHorizontalScrollIndicator={false}
            style={{
                ...StyleSheet.absoluteFillObject,
                //backgroundColor: 'red',
            }}
        >

            <View
                style={{
                    ...styles.container,
                    marginTop: 350
                }}
            >
                <Text style={styles.title}>Types</Text>
                <View style={{ flexDirection: 'row' }}>
                    {
                        pokemon.types.map(({ type }, index) => {
                            return (
                                <Text key={index} style={{ ...styles.regularText, marginRight: 10 }}>
                                    {type.name}
                                </Text>
                            )
                        })
                    }
                </View>
                <Text style={styles.title}>Peso</Text>
                <Text style={styles.regularText}>{pokemon.weight} KG</Text>
            </View>

            <View style={{ ...styles.container }}>
                <Text style={styles.title}>Sprites</Text>
            </View>

            <ScrollView
                style={{}}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                <FadeInImage
                    uri={pokemon.sprites.front_default}
                    style={styles.baseSprite}
                />
                <FadeInImage
                    uri={pokemon.sprites.back_default}
                    style={styles.baseSprite}
                />
                <FadeInImage
                    uri={pokemon.sprites.front_shiny}
                    style={styles.baseSprite}
                />
                <FadeInImage
                    uri={pokemon.sprites.back_shiny}
                    style={styles.baseSprite}
                />
            </ScrollView>

            <View style={{
                ...styles.container
            }}>
                <Text style={styles.title}>Habilidades Base</Text>
                <View style={{ flexDirection: 'row' }}>
                    {
                        pokemon.abilities.map(({ ability }, index) => {
                            return (
                                <Text key={index} style={{ ...styles.regularText, marginRight: 10 }}>
                                    {ability.name}
                                </Text>
                            )
                        })
                    }
                </View>
            </View>

            <View style={{
                ...styles.container
            }}>
                <Text style={styles.title}>Movimientos</Text>
                <View style={{ flexWrap: 'wrap', flexDirection: 'row' }}>
                    {
                        pokemon.moves.map(({ move }, index) => {
                            return (
                                <Text key={index} style={{ ...styles.regularText, marginRight: 10 }}>
                                    {move.name}
                                </Text>
                            )
                        })
                    }
                </View>
            </View>

            <View style={{
                ...styles.container
            }}>
                <Text style={styles.title}>Estados Iniciales</Text>
                <View style={{ /* flexWrap: 'wrap', flexDirection: 'row' */ }}>
                    {
                        pokemon.stats.map(({ stat, base_stat }, index) => {
                            return (
                                <View key={index} style={{ flexDirection: 'row' }}>
                                    <Text style={{ ...styles.regularText, marginRight: 10 }}>
                                        {stat.name}
                                    </Text>
                                    <Text style={{ ...styles.regularText, marginRight: 10, fontWeight: 'bold' }}>
                                        {base_stat}
                                    </Text>
                                </View>
                            )
                        })
                    }
                </View>
            </View>
            <View style={{ marginBottom: 80, alignItems: 'center' }}>
                <FadeInImage
                    uri={pokemon.sprites.front_default}
                    style={styles.baseSprite}
                />
            </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 22,
        marginTop: 20
    },
    regularText: {
        fontSize: 19,
    },
    baseSprite: {
        width: 100,
        height: 100,
    }
});