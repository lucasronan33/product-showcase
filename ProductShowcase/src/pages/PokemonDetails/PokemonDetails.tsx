import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PokemonDetails as PokemonDetailsType } from '../../interfaces/Pokemon';
import { getPokemonDetails } from '../../services/api/pokemonService';

export default function PokemonDetails() {
  const { name } = useParams<{ name: string }>()
  
  const [pokemon, setPokemon] = useState<PokemonDetailsType | null>(null)
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    async function fetchPokemon() {
      try {
        if (!name) {
          const data = await getPokemonDetails(name)
          setPokemon(data)
        }
      } catch (error) {
        console.error("Erro ao carregar detalhes:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchPokemon()
  }, [name])
  
}