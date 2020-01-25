import React from 'react';
import styled from 'styled-components';

const CardStyle = styled.div`
    margin: 3%;
    width: 80%;
    opacity: 0.7;
    border-radius: 10px;
    // padding: 1%;
    color: #feda4a;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    transform: perspective(300px) rotateX(15deg);
    line-height: 2;
    font-size: 2rem;
`
const NameStyle = styled.header `
    font-size: 3rem;
    // max-width: 100%;
    text-align: center;
`
const SpanStyle = styled.span `
    font-family: 'Pathway Gothic One', sans-serif;
    letter-spacing: 6px;
    -webkit-text-fill-color: rgba(0, 0, 0, 0.5);
    -webkit-text-stroke: 1px #feda4a;
    font-weight: 400;

`
const PStyle = styled.p `
    max-width: 100%;
    text-align: left;
`
const Card = ({character}) => {
    return (
        <CardStyle>
            <NameStyle><SpanStyle>Name: </SpanStyle> {character.name}</NameStyle>
            <PStyle><SpanStyle>Height: </SpanStyle> { character.height}</PStyle>
            <PStyle><SpanStyle>Mass: </SpanStyle>{ character.mass}</PStyle>
            <PStyle><SpanStyle>Hair Color: </SpanStyle> { character.hair_color}</PStyle>
            <PStyle><SpanStyle>Skin Color: </SpanStyle> { character.skin_color}</PStyle>
            <PStyle><SpanStyle>Eye Color: </SpanStyle>{ character.eye_color}</PStyle>
            <PStyle><SpanStyle>Birth Year: </SpanStyle> { character.birth_year}</PStyle>
        </CardStyle>
    )
}
export default Card;