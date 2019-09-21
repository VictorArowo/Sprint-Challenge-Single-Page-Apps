import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  margin: 20px;
  margin-left: 10px;
`;

export default function LocationCard({ data }) {
  return (
    <Div>
      <h1>{data.name}</h1>
      <h1>{data.type}</h1>
      <h1>{data.dimension}</h1>
      {/* <h1>{data.residents}</h1> */}
    </Div>
  );
}
