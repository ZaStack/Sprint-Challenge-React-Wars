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
const uuidv4 = require('uuid/v4');


const App = () => {
  const [starCharacter, setStarCharacter] = useState([]);
  useEffect(() => {
    axios 
      .get('https://swapi.co/api/people/')
      .then(response => {
        // console.log("Initial data", response)
        // setTimeout(function(){ 
        //   alert("Hold On");         
          setStarCharacter(response.data.results)
        // }, 5000);
        // console.log("Star data", starCharacter)

      })
      .catch(error => {
        console.log("the data was not returned", error)
      })

  }, []);

  //   const starCharacter= {
  //   name: "Luke Skywalker",
  //   height: "172",
  //   mass: "77",
  //   hair_color: "blond",
  //   skin_color: "fair",
  //   eye_color: "blue",
  //   birth_year: "19BB"
  // }


  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <AppStyle key={uuidv4()}>
      <h1 className="Header">React Wars</h1>;
      {starCharacter.map(p => (
        <Card key={uuidv4()} character={starCharacter}/>
      ))
    }
    </AppStyle>
  )
}

export default App


// name={starCharacter.name} height={starCharacter.height} mass={starCharacter.mass} hair_color={starCharacter.hair_color} skin_color={starCharacter.skin_color} eye_color={starCharacter.eye_color} birth_year={starCharacter.birth_year}