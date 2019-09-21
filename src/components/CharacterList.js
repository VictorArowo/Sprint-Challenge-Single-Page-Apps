import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import CharacterCard from './CharacterCard';
import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-left: 150px;
`;

const Button = styled.button`
  width: 100px;
  height: 50px;
  margin: 10px;
  color: white;
  background-color: green;
  border-radius: 15px;
  border: none;
  outline: none;

  &:hover {
    background-color: darkgreen;
  }
`;

export default function CharacterList({ characterData, setCharacterData }) {
  let url = 'https://rickandmortyapi.com/api/character/';
  useEffect(() => {
    Axios.get(url).then(res => setCharacterData(res.data));
  }, []);

  const next = e => {
    e.preventDefault();
    Axios({
      url: `${characterData.info.next}`
    }).then(res => {
      setCharacterData(res.data);
      window.scrollTo(0, 0);
    });
  };

  const previous = e => {
    e.preventDefault();
    Axios({
      url: `${characterData.info.prev}`
    }).then(res => {
      setCharacterData(res.data);
      window.scrollTo(0, 0);
    });
  };

  return (
    characterData && (
      <>
        <Div className="character-list">
          {characterData.results.map(char => (
            <CharacterCard data={char} key={char.id} />
          ))}
        </Div>

        {characterData.info.prev && (
          <Button onClick={previous}>Previous</Button>
        )}
        {characterData.info.next && <Button onClick={next}>Next</Button>}
      </>
    )
  );
}
