import React from 'react';

export default function LocationCard({ data }) {
  return (
    <div>
      <h1>{data.name}</h1>
      <h1>{data.type}</h1>
      <h1>{data.dimension}</h1>
      {/* <h1>{data.residents}</h1> */}
    </div>
  );
}
