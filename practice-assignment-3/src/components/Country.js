import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CountryModal from './CountryModal';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState({});
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    axios
      .get('https://restcountries.com/v2/all')
      .then((response) => {
        setCountries(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const openModal = (country) => {
    setSelectedCountry(country);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Capital</th>
            <th>Population</th>
          </tr>
        </thead>
        <tbody>
          {countries.map((country, index) => (
            <tr key={index} onClick={() => openModal(country)}>
              <td>{country.capital}</td>
              <td>{country.population}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <CountryModal
        selectedCountry={selectedCountry}
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
      />
    </div>
  );
};

export default App;
