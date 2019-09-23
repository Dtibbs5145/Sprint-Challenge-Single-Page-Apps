import React from "react";
// import CharacterList from './CharacterList';

export default function CharacterCard(props) {
  console.log(props.characters)
  return (
    <div>
      <h2>Name: {props.character.name}</h2>
      <p>Status: {props.character.status}</p>
      <p>Gender: {props.character.gender}</p>
      <p>Species: {props.character.species}</p>
    </div>
  )
};
