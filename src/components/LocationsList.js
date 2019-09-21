import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import LocationCard from './LocationCard';
import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-left: 50px;
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
export default function LocationList({ locationData, setLocationData }) {
  let url = 'https://rickandmortyapi.com/api/location/';
  useEffect(() => {
    Axios.get(url).then(res => setLocationData(res.data));
  }, []);

  const next = e => {
    e.preventDefault();
    Axios({
      url: `${locationData.info.next}`
    }).then(res => {
      setLocationData(res.data);
      window.scrollTo(0, 0);
    });
  };

  const previous = e => {
    e.preventDefault();
    Axios({
      url: `${locationData.info.prev}`
    }).then(res => {
      setLocationData(res.data);
      window.scrollTo(0, 0);
    });
  };

  return (
    locationData && (
      <>
        <Div>
          {locationData.results.map(char => (
            <LocationCard data={char} key={char.id} />
          ))}
        </Div>

        {locationData.info.next && <Button onClick={next}>Next</Button>}
        {locationData.info.prev && <Button onClick={previous}>Previous</Button>}
      </>
    )
  );
}
