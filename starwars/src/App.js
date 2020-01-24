import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Card from './components/Cards';
import axios from 'axios';
import './App.css';

const AppStyle = styled.div `
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  height: 1000px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`



const App = () => {
  const [starCharacter, setStarCharacter] = useState([]);
  useEffect(() => {
    axios 
      .get('https://swapi.co/api/people/')
      .then(response => {
        console.log("Initial data", response)
        setStarCharacter(response.data)
        console.log("Character data", response.data)
      })
      .catch(error => {
        console.log("the data was not returned", error)
      })

  }, []);

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <AppStyle>
      {starCharacter.map(p => (
        <h1 className="Header">React Wars</h1>
        <Card name={starCharacter.name} species={starCharacter.species} homeworld={starCharacter.homeworld}/>
        
      ))}
    </AppStyle>
  );
}

export default App;
