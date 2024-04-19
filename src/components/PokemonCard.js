// PokemonCard.js
import React, { useState } from 'react';

function PokemonCard({ pokemon, onClick }) {
  const [isSelected, setIsSelected] = useState(false);

  const handleCardClick = () => {
    setIsSelected(!isSelected);
    onClick(pokemon);
  };

  const cardClassName = isSelected ? 'pokemon-card selected' : 'pokemon-card';

 /* return (
    <div className={cardClassName} onClick={handleCardClick}>
      <img className="pokemon-image" src={pokemon.sprites.front_default} alt={pokemon.name} />
      <h2 className="pokemon-name">{pokemon.name}</h2>
    </div>
  );
}
*/
return (
  <div className="pokemon-card" onClick={() => onClick(pokemon)}>
    <img src={pokemon.sprites.front_default} alt={pokemon.name} />
    <h2>{pokemon.name}</h2>
  </div>
);
}
export default PokemonCard;
