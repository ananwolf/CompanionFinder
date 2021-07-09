import React, { useState } from 'react';
import axios from 'axios';
import isValidZip from 'is-valid-zip';
import Image from "react-bootstrap/Image";
import Form from './Form.jsx';
import PetCard from './PetCard.jsx';
import Paginate from './Paginate.jsx';

const App = () => {
  const [animals, setAnimals] = useState([]);
  const [species, setSpecies] = useState('');
  const [zip, setZip] = useState('');
  const [pages, setPages] = useState([]);

  const handleSpeciesChange = event => setSpecies(event.target.value);

  const handleZipChange = event => setZip(event.target.value);

  const getAnimals = (event) => {
    event.preventDefault();
    isValidZip
    ? axios.get('/animals', {params: { species: species, zip: zip }})
      .then((response) => {
        response.data.animals.length
          ? setAnimals(response.data.animals.sort((a, b) => a.distance - b.distance))
          : null;
        setPages(response.data.pagination);
    })
      .catch(err => console.log(err))
    : null
  };

  return (
    <div>
      <header className='bg-light text-center h-10 mb-4 p-3'>
        <Image src="https://i.imgur.com/kbqjhXW.png" alt="logo" fluid />
      </header>
      <div className='container'>
        <Form
          getAnimals={getAnimals}
          handleZipChange={handleZipChange}
          handleSpeciesChange={handleSpeciesChange}
        />
        <PetCard animals={animals} />
        <Paginate
          pages={pages}
          species={species}
          zip={zip}
          setAnimals={setAnimals}
          setPages={setPages}
        />
      </div>
    </div>
  )
};

export default App;