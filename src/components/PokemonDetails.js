// PokemonDetails.jsx
import React, { Component } from 'react';
import './PokemonDetails.css'; // Ensure you have a corresponding CSS file for styles

class PokemonDetails extends Component {
  render() {
    const { pokemon, onClose } = this.props;

    // If there's no pokemon data, don't render anything
    if (!pokemon) return null;

    return (
      <div className="pokemon-modal">
        <div className="pokemon-modal-content">
          <span className="close-button" onClick={onClose}>&times;</span>
          <h2>{pokemon.name}</h2>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          <div className="abilities">
            <h3>Abilities:</h3>
            <ul>
              {pokemon.abilities.map((ability, index) => (
                <li key={index}>{ability.ability.name}</li> // Assuming each ability has an 'ability' object with a 'name' property
              ))}
            </ul>
          </div>
          <div className="stats">
            <h3>Stats:</h3>
            <ul>
              {pokemon.stats.map((stat, index) => (
                <li key={index}>{stat.stat.name}: {stat.base_stat}</li> // Assuming each stat has a 'stat' object with a 'name' and a 'base_stat' property
              ))}
            </ul>
          </div>
          {/* Include any other details you want to show */}
        </div>
      </div>
    );
  }
}

export default PokemonDetails;
