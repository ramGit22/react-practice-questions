import React from 'react';
import Modal from 'react-modal';

const CountryModal = ({ selectedCountry, modalIsOpen, closeModal }) => {
  return (
    <Modal isOpen={modalIsOpen} onRequestClose={closeModal} ariaHideApp={false}>
      <h1>{selectedCountry.name}</h1>
      {selectedCountry.flags && selectedCountry.flags.svg ? (
        <img
          src={selectedCountry.flags.svg}
          alt={selectedCountry.name}
          height="50px"
        />
      ) : (
        'N/A'
      )}

      <p>Capital: {selectedCountry.capital}</p>

      <p>Population: {selectedCountry.population}</p>
      <p>Region: {selectedCountry.region}</p>
      <button onClick={closeModal}>Close</button>
    </Modal>
  );
};

export default CountryModal;
