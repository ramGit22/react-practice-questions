import React from 'react';
import Modal from 'react-modal';

const CountryModal = ({ selectedCountry, modalIsOpen, closeModal }) => {
  return (
    <Modal isOpen={modalIsOpen} onRequestClose={closeModal} ariaHideApp={false}>
      <h2>{selectedCountry.capital}</h2>
      <p>Population: {selectedCountry.population}</p>
      <button onClick={closeModal}>Close</button>
    </Modal>
  );
};

export default CountryModal;
