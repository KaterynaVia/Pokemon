import React, { useState } from 'react';
import PokemonList from '../components/PokemonList';
import PokemonDetails from '../components/PokemonDetails';

function FrontPage() {
  const [showModal, setShowModal] = useState(false);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [currentPage, setCurrentPage] = useState(0); // Add this line for pagination

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

  // Function to handle pagination
  const goToNextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const goToPreviousPage = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : 0)); // Prevent going below page 0
  };

  return (
    <>
      <h1>Welcome to the Pokédex!</h1>
      <button className="nav-button previous" onClick={goToPreviousPage} disabled={currentPage === 0}>Previous</button>
      <button className="nav-button next" onClick={goToNextPage}>Next</button>
      <PokemonList onPokemonSelect={openModal} page={currentPage} />
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
