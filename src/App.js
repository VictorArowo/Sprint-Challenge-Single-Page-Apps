import React, { useState } from 'react';
import Header from './components/Header.js';
import { Route } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import CharacterList from './components/CharacterList.js';
import SearchForm from './components/SearchForm.js';
import Axios from 'axios';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [characterData, setCharacterData] = useState(null);

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
      <Header />
      <SearchForm onChange={onChange} onSubmit={onSubmit} query={searchQuery} />
      <Route path="/" exact component={WelcomePage} />
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
    </main>
  );
}
