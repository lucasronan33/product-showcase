import React from 'react';

interface PokemonCardProps {
  name: string;
  image: string;
  types: string[];
}

const PokemonCard: React.FC<PokemonCardProps> = ({ name, image, types }) => {
  return (
    <div className="pokemon-card">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>Types: {types.join(', ')}</p>
    </div>
  );
};

export default PokemonCard;