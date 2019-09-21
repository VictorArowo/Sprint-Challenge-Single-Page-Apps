import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  padding: 20px;
  margin: 20px;
`;
export default function CharacterCard({ data }) {
  return (
    <Div>
      <img src={data.image} alt="character" />
      <h2>{data.name}</h2>
      <h2>{data.species}</h2>
    </Div>
  );
}
