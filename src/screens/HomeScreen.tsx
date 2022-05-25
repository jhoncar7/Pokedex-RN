import React from 'react'
import { ActivityIndicator, Button, FlatList, Image, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { usePokemonPaginated } from '../hooks/usePokemonPaginated';
import { styles } from '../theme/appTheme';
import { FadeInImage } from '../components/FadeInImage';
import { PokemonCards } from '../components/PokemonCards';


export const HomeScreen = () => {
    const { top } = useSafeAreaInsets();

    const { isLoading, simplePokemonList, loadPokemons } = usePokemonPaginated();


    return (
        <>

            <Image
                source={require('../assets/pokebola.png')}
                style={styles.pokebolaBG}
            />

            <View
                style={{
                    //...styles.globalMargin,
                    alignItems: 'center'
                }}
            >
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={simplePokemonList}
                    keyExtractor={(pok) => pok.id}
                    numColumns={2}
                    ListHeaderComponent={(
                        <Text style={{
                            ...styles.title,
                            ...styles.globalMargin,
                            top: top + 20,
                            marginBottom: top + 20,
                            paddingBottom: 5,
                        }}>Pokedex</Text>
                    )}
                    renderItem={({ item }) => (
                        <PokemonCards pokemon={item} />
                    )}

                    /* infinite scroll */
                    onEndReached={loadPokemons}
                    /* parte de abajo cuando llegue para que se dispare la nueva carga */
                    onEndReachedThreshold={0.4} /* representa los ultimos 40% de abajo de la pantalla */

                    ListFooterComponent={(
                        <ActivityIndicator
                            style={{ height: 100 }}
                            size={30} // o tambien={50}
                            color='grey'
                        />
                    )}
                />
            </View>
        </>
    )
}
