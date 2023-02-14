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
    console.log('countries', countries);
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
            <th>Name</th>
            <th>Capital</th>
            <th>Population</th>
            <th>Flag</th>
          </tr>
        </thead>
        <tbody>
          {countries.map((country, index) => (
            <tr key={index} onClick={() => openModal(country)}>
              <td>{country.name}</td>
              <td>{country.capital}</td>
              <td>{country.population}</td>
              <td>
                <img src={country.flags.svg} alt={country.name} height="50px" />
              </td>
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
