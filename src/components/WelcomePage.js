import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  height: 50px;
  background-color: grey;
  color: white;
  overflow: auto;
  display: flex;
  margin: 30px 0;
  border: none;

  button {
    height: 100%;
    width: 50%;
    font-family: 'Turret Road', cursive;
    font-size: 30px;
    color: black;
  }
`;

export default function WelcomePage(props) {
  const onClick = e => {
    props.history.push(`/${e.target.value}`);
  };

  return (
    <section className="welcome-page">
      <img src="https://help.redbubble.com/hc/article_attachments/360002309526/Rick_and_Morty_-_logo__English_.png" />

      <Div>
        <button value="characters" onClick={onClick}>
          Characters
        </button>
        <button value="locations" onClick={onClick}>
          Locations
        </button>
      </Div>
    </section>
  );
}
