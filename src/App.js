import React, { useState } from 'react';
import Header from './components/Header.js';
import { Route } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import CharacterList from './components/CharacterList.js';
import SearchForm from './components/SearchForm.js';
import Axios from 'axios';
import LocationsList from './components/LocationsList';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [characterData, setCharacterData] = useState(null);
  const [locationData, setLocationData] = useState(null);

  const onChange = e => {
    setSearchQuery(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    Axios.get(
      `https://rickandmortyapi.com/api/character/?name=${searchQuery}`
    ).then(res => setCharacterData(res.data));
  };

  return (
    <main>
      <Route path="/" component={WelcomePage} />

      <Route
        path="/characters"
        render={props => (
          <SearchForm
            {...props}
            onChange={onChange}
            onSubmit={onSubmit}
            query={searchQuery}
          />
        )}
      />
      <Route
        path="/characters"
        render={props => (
          <CharacterList
            {...props}
            characterData={characterData}
            setCharacterData={setCharacterData}
          />
        )}
      />
      <Route
        path="/locations"
        render={props => (
          <LocationsList
            {...props}
            locationData={locationData}
            setLocationData={setLocationData}
          />
        )}
      />
    </main>
  );
}
