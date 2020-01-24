import React from 'react';
import styled from 'styled-components';

const CardStyle = styled.div`
    background: black;
    margin: 3%;
    width: 60%;
`

const Card = (props) => {

    return (
        <CardStyle>
            <header><span>Name:</span> {props.name}</header>
            <p><span>Species:</span> {props.species}</p>
            <p><span>Homeworld:</span> {props.homeworld}</p>
        </CardStyle>

    )
}
export default Card;