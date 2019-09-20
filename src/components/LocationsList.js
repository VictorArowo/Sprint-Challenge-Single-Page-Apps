import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import LocationCard from './LocationCard';

export default function LocationList({ locationData, setLocationData }) {
  let url = 'https://rickandmortyapi.com/api/location/';
  useEffect(() => {
    Axios.get(url).then(res => setLocationData(res.data));
  }, []);

  return (
    locationData && (
      <>
        <section className="Location-list">
          {locationData.results.map(char => (
            <LocationCard data={char} key={char.id} />
          ))}
        </section>

        {locationData.info.next && <button>Next</button>}
        {locationData.info.previous && <button>Previous</button>}
      </>
    )
  );
}
