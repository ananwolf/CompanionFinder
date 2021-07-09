import React, { useState } from 'react';
import axios from 'axios';
import Form from './Form.jsx';
import PetCard from './PetCard.jsx';
import isValidZip from 'is-valid-zip';

const App = () => {
  const [animals, setAnimals] = useState([]);
  const [species, setSpecies] = useState('');
  const [zip, setZip] = useState('');

  const handleSpeciesChange = (e) => {
    setSpecies(e.target.value);
  };

  const handleZipChange = event => setZip(event.target.value);

  const getAnimals = (event) => {
    event.preventDefault();
    isValidZip
    ? axios.get('/animals', {params: { species: species, zip: zip }})
      .then((response) => {
        response.data.animals.length
          ? setAnimals(response.data.animals.sort((a, b) => a.distance - b.distance))
          : null;
    })
      .catch(err => console.log(err))
    : null
  };

  return (
    <div>
      <header className='bg-light text-center h-10 mb-4 p-3'>
        Companion Finder
      </header>
      <div className='container'>
        <Form
          getAnimals={getAnimals}
          handleZipChange={handleZipChange}
          handleSpeciesChange={handleSpeciesChange}
        />
        <PetCard animals={animals} />
        
      </div>
    </div>
  )
};

export default App;