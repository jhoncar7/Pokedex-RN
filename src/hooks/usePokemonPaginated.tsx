import { useEffect, useRef, useState } from "react";
import { pokemonApi } from "../api/pokemonApi";
import { PokemonPaginateResponse, Result, SimplePokemon } from "../interfaces/pokemonInterfaces";



export const usePokemonPaginated = () => {

    const [simplePokemonList, setSimplePokemonList] = useState<SimplePokemon[]>([])

    const nextPageUrl = useRef('https://pokeapi.co/api/v2/ability/?limit=40');

    const loadPokemons = async () => {
        const resp = await pokemonApi.get<PokemonPaginateResponse>(nextPageUrl.current);
        nextPageUrl.current = resp.data.next;
        mapPokemonsList(resp.data.results);
    }

    const mapPokemonsList = (pokemonList: Result[]) => {
        pokemonList.forEach(poke => console.log(poke.url))
    }

    useEffect(() => {
        loadPokemons();
    }, []);

}
