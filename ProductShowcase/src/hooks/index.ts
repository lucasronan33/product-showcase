// src/hooks/index.ts

import { useEffect, useState } from 'react';
import { fetchPokemons, fetchPokemonDetails } from '../services/api/pokeApi';
import { Pokemon } from '../interfaces/Pokemon';

export const usePokemons = () => {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadPokemons = async () => {
            try {
                const data = await fetchPokemons();
                setPokemons(data);
            } catch (err) {
                setError('Failed to fetch pokemons');
            } finally {
                setLoading(false);
            }
        };

        loadPokemons();
    }, []);

    return { pokemons, loading, error };
};

export const usePokemonDetails = (pokemonId: number) => {
    const [pokemonDetails, setPokemonDetails] = useState<Pokemon | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadPokemonDetails = async () => {
            try {
                const data = await fetchPokemonDetails(pokemonId);
                setPokemonDetails(data);
            } catch (err) {
                setError('Failed to fetch pokemon details');
            } finally {
                setLoading(false);
            }
        };

        if (pokemonId) {
            loadPokemonDetails();
        }
    }, [pokemonId]);

    return { pokemonDetails, loading, error };
};