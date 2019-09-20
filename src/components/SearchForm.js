import React, { useState } from 'react';

export default function SearchForm(props) {
  return (
    <section className="search-form">
      <form onSubmit={props.onSubmit}>
        <input
          type="text"
          placeholder="Search"
          onChange={props.onChange}
          value={props.query}
        />
        <input type="submit" />
      </form>
    </section>
  );
}
