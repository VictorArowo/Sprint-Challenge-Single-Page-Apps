import React, { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  input[type='text'] {
    width: 250px;
    height: 10px;
    border: 1px solid black;
    border-radius: 15px;
    padding: 20px;
  }

  input[type='submit'] {
    width: 100px;
    height: 40px;
    border: none;
    background-color: green;
    border-radius: 15px;
    /* padding: 20px; */
    margin-bottom: 30px;
    margin-left: 20px;
    color: white;
    outline: none;

    &:hover {
      background-color: darkgreen;
    }
  }
`;

export default function SearchForm(props) {
  return (
    <Form onSubmit={props.onSubmit}>
      <input
        type="text"
        placeholder="Search"
        onChange={props.onChange}
        value={props.query}
      />
      <input type="submit" />
    </Form>
  );
}
