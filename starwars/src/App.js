import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Card from './components/Cards';
import axios from 'axios';
import './App.css';

const AppStyle = styled.div `
  background: black;
  width: 60%;
  max-width: 1000px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  opacity: 0.6;
  -webkit-box-shadow: 5px 5px 15px 5px #000000; 
  box-shadow: 5px 5px 15px 5px #000000;

`
const HeaderStyle = styled.h1 `
  font-family: 'Pathway Gothic One', sans-serif;
  font-size: 400%;
  font-weight: 600;
  letter-spacing: 6px;
  line-height: 150%;
  margin-top: 5vh;
  -webkit-text-fill-color: rgba(0, 0, 0, 0.5);
  -webkit-text-stroke: 2px #feda4a;
  transform: perspective(300px) rotateX(40deg);
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
      <HeaderStyle>React Wars</HeaderStyle>
      {starCharacter.map(p => (
        <Card key={uuidv4()} character={starCharacter}/>
      ))
    }
    </AppStyle>
  )
}

export default App


// name={starCharacter.name} height={starCharacter.height} mass={starCharacter.mass} hair_color={starCharacter.hair_color} skin_color={starCharacter.skin_color} eye_color={starCharacter.eye_color} birth_year={starCharacter.birth_year}