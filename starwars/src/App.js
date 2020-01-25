import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Card from './components/Cards';
import axios from 'axios';
import './App.css';

const AppStyle = styled.div `
  background: black;
  // width: 60%;
  max-width: 75%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  opacity: 0.7;
  -webkit-box-shadow: 5px 5px 15px 5px #000000; 
  box-shadow: 5px 5px 15px 5px #000000;

`
const HeaderStyle = styled.h1 `
  font-family: 'Pathway Gothic One', sans-serif;
  font-size: 400%;
  font-weight: 800;
  letter-spacing: 6px;
  line-height: 150%;
  margin-top: 5vh;
  -webkit-text-fill-color: rgba(0, 0, 0, 0.5);
  -webkit-text-stroke: 2px #feda4a;
  transform: perspective(300px) rotateX(40deg);
`
const uuidv4 = require('uuid/v4');

const App = () => {
  const uuidv4 = require("uuid/v4");
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get(`https://swapi.co/api/people/`)
      .then(response => {
        console.log(response.data.results);
        setCharacters(response.data.results);
      })
      .catch(error => {
        console.log("Data did not return", error);
      });
  }, []);

  return (
    <AppStyle key={uuidv4()}>
      <HeaderStyle key={uuidv4()}>React Wars</HeaderStyle>
      {characters.map(character => {
        return <Card key={uuidv4()} character={character} />;
      })}
    </AppStyle>
  );
};

export default App;