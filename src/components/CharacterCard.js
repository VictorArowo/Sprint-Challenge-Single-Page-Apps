import React from 'react';

export default function CharacterCard({ data }) {
  return (
    <div>
      <img src={data.image} alt="character" />
      <h1>{data.name}</h1>
      <h2>{data.species}</h2>
    </div>
  );
}
