import React from 'react';
import styled from 'styled-components';

const CardStyle = styled.div`
    margin: 3%;
    width: 60%;
    opacity: 0.7;
    border-radius: 10px;
    padding: 2%;
    color: #feda4a;
    justify-self: flex-start;
    transform: perspective(300px) rotateX(35deg);
    line-height: 2;


`

const Card = ({character}) => {
    // console.log("Card props", props)
    return (
        <CardStyle>
            <header><span>Name:</span> {character.name}</header>
            <p><span>Height:</span> {character.species}</p>
            {/* <p><span>Mass:</span> {character.mass}</p>
            <p><span>Hair Color:</span> {character.hair_color}</p>
            <p><span>Skin Color:</span> {character.skin_color}</p>
            <p><span>Eye Color:</span> {character.eye_color}</p>
            <p><span>Birth Year:</span> {character.birth_year}</p> */}
        </CardStyle>
    )
}
export default Card;