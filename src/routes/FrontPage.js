

//export default FrontPage;
import React, { useState } from 'react';
import PokemonList from '../components/PokemonList';
import PokemonDetails from '../components/PokemonDetails';
//import PokemonCard from '../components/PokemonCard';


function FrontPage() {
  // State to manage whether the modal is open
  const [showModal, setShowModal] = useState(false);
  // State to manage the currently selected Pokemon
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  // Function to open the modal with the selected Pokemon's details
  const openModal = (pokemon) => {
    setSelectedPokemon(pokemon);
    setShowModal(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setShowModal(false);
    setSelectedPokemon(null);
  };

  return (
    <>
      <h1>Welcome to the Pokédex!</h1>
      <PokemonList onPokemonSelect={openModal} />
      {showModal && selectedPokemon && (
        <PokemonDetails
          pokemon={selectedPokemon}
          onClose={closeModal}
        />
       
      )}
    </>
  );
}

export default FrontPage;
//import React from 'react';
//import PokemonList from '../components/PokemonList';
//import PokemonDetails from '../components/PokemonDetails';

//function FrontPage() {
  //return (
  //<>
  //<h1>Welcome to the Pokédex!</h1>
  //<PokemonList />
  //<PokemonDetails />
//</>
//);
   
//}