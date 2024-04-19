import React, { useState, useEffect } from 'react';
import PokemonCard from './PokemonCard';
import PokemonDetails from './PokemonDetails'; 

function PokemonList({ page, onPokemonSelect }) {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const limit = 24; // Number of items per page

  useEffect(() => {
    async function fetchPokemons() {
      const offset = page * limit;
      let response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
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
  }, [page]); // Add page as a dependency

  const handlePokemonClick = (pokemon) => {
    setSelectedPokemon(pokemon);   
  };

  if (loading) return <p>Loading...</p>;

 return (
    <div className="pokemon-list">
      {selectedPokemon ? (
        <PokemonDetails pokemon={selectedPokemon} onClose={() => setSelectedPokemon(null)}/>
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
