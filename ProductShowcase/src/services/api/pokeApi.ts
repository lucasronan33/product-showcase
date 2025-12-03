import axios from 'axios';

const API_URL = 'https://pokeapi.co/api/v2';

export const fetchPokemons = async (limit = 20, offset = 0) => {
    try {
        const response = await axios.get(`${API_URL}/pokemon?limit=${limit}&offset=${offset}`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching Pokémon data');
    }
};

export const fetchPokemonDetails = async (pokemonName) => {
    try {
        const response = await axios.get(`${API_URL}/pokemon/${pokemonName}`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching Pokémon details');
    }
};