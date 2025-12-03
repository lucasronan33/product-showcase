import React from 'react';
import { api } from './pokeApi';
import type { PokemonListResponse } from '../../interfaces/Pokemon';

export async function getPokemonList(limit = 151) {
    const res = await api.get<PokemonListResponse>(`/pokemon?limit=${limit}`)
    return res.data
}
