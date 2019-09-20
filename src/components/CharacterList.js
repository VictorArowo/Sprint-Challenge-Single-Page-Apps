import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import CharacterCard from './CharacterCard';

export default function CharacterList({ characterData, setCharacterData }) {
  let url = 'https://rickandmortyapi.com/api/character/';
  useEffect(() => {
    Axios.get(url).then(res => setCharacterData(res.data));
  }, []);

  return (
    characterData && (
      <>
        <section className="character-list">
          {characterData.results.map(char => (
            <CharacterCard data={char} key={char.id} />
          ))}
        </section>

        {characterData.info.next && <button>Next</button>}
        {characterData.info.previous && <button>Previous</button>}
      </>
    )
  );
}
