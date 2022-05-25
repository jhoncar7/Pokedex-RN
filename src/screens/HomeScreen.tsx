import React from 'react'
import { ActivityIndicator, Button, FlatList, Image, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { usePokemonPaginated } from '../hooks/usePokemonPaginated';
import { styles } from '../theme/appTheme';
import { FadeInImage } from '../components/FadeInImage';


export const HomeScreen = () => {

    const { top } = useSafeAreaInsets();

    const { isLoading, simplePokemonList, loadPokemons } = usePokemonPaginated();


    return (
        <>
            {
                simplePokemonList.length > 0 &&
                <>
                    <Image
                        source={require('../assets/pokebola.png')}
                        style={styles.pokebolaBG}
                    />

                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={simplePokemonList}
                        keyExtractor={(pok) => pok.id}
                        renderItem={({ item }) => (
                            <FadeInImage
                                uri={item.picture}
                                style={{ width: 100, height: 100 }}
                            />
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

                    {/* <Text style={{
                ...styles.title,
                ...styles.globalMargin,
                top: top + 20,
            }}>Pokedex</Text> */}
                </>
            }
        </>
    )
}
