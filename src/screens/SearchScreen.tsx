import React, { useState } from 'react'
import { Text, View, Platform, FlatList, Dimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Loading } from '../components/Loading';
import { PokemonCards } from '../components/PokemonCards';
import { SearchInput } from '../components/SearchInput';
import { usePokemonSearch } from '../hooks/usePokemonSearch';
import { styles } from '../theme/appTheme';
import { SimplePokemon } from '../interfaces/pokemonInterfaces';
import { useEffect } from 'react';

const screenWidth = Dimensions.get('window').width;

export const SearchScreen = () => {

    const { top } = useSafeAreaInsets();
    const { isFetching, simplePokemonList } = usePokemonSearch();
    const [term, setTerm] = useState('');
    const [pokemonFilterd, setPokemonFilterd] = useState<SimplePokemon[]>([]);

    useEffect(() => {
        if (term.length === 0) {
            return setPokemonFilterd([]);
        }

        if (isNaN(Number(term))) {
            setPokemonFilterd(simplePokemonList.filter(pokemon => pokemon.name.toLocaleLowerCase()
                .includes(term.toLocaleLowerCase())));
        } else {
            const pokemonById = simplePokemonList.find(pokemon => pokemon.id === term);
            setPokemonFilterd(
                (pokemonById) ? [pokemonById] : []
            );
        }


    }, [term])


    if (isFetching) {
        return (
            <Loading />
        )
    }

    return (
        <View style={{
            flex: 1,
            //marginTop: (Platform.OS === 'ios' ? top : top + 10),
            marginHorizontal: 20
        }}>
            <SearchInput
                onDebounce={(text) => setTerm(text)}
                style={{
                    position: 'absolute',
                    zIndex: 999,
                    width: screenWidth - 40,
                    top: (Platform.OS === 'ios' ? top : top + 30),
                }}
            />

            <FlatList
                showsVerticalScrollIndicator={false}
                data={pokemonFilterd}
                keyExtractor={(pok) => pok.id}
                numColumns={2}
                ListHeaderComponent={(
                    <Text style={{
                        ...styles.title,
                        ...styles.globalMargin,
                        paddingBottom: 5,
                        marginTop: (Platform.OS === 'ios' ? top + 60 : top + 80),
                    }}>{term}</Text>
                )}
                renderItem={({ item }) => (
                    <PokemonCards pokemon={item} />
                )}
            />
        </View>
    )
}

