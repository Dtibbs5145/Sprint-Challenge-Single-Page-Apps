import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard';

export default function CharacterList() {
  const [characters, setCharacter] = useState([]);
  // TODO: Add useState to track data from useEffect
console.log(characters);

  useEffect(() => {
    axios
      .get('https://rickandmortyapi.com/api/character')
      .then(res => {
        setCharacter(res.data.results);
        // console.log(res.results);
      })
      .catch(error => {
        console.log(error);
      });
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
    <section className="character-list">
      <div>
      {characters.map(character => {
        return (
           <div key={character.name}>
            <CharacterCard key={character.name} character={character} />
          </div>
           )
        })}
      </div>
    </section>
  );
}
