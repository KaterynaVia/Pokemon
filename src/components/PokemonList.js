// PokemonList.js
import React, { useState, useEffect } from 'react';
import PokemonCard from './PokemonCard';
import PokemonDetails from './PokemonDetails'; // Import the new component

function PokemonList() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  useEffect(() => {
    async function fetchPokemons() {
      let response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20'); // Increased limit for more cards
      let data = await response.json();
      const promises = data.results.map(async (pokemon) => {
        response = await fetch(pokemon.url);
        return await response.json();
      });
      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
    }

    fetchPokemons();
  }, []);

  const handlePokemonClick = (pokemon) => {
    setSelectedPokemon(pokemon);   
  };

  if (loading) return <p>Loading...</p>;

 return (
    <div className="pokemon-list">
      {selectedPokemon ? (
        <PokemonDetails pokemon={selectedPokemon} />
      ) : (
        pokemons.map(pokemon => (
          <PokemonCard 
            key={pokemon.name} 
            pokemon={pokemon} 
            onClick={handlePokemonClick} 
          />
        ))
      )}
    </div>
  );
}



export default PokemonList;
