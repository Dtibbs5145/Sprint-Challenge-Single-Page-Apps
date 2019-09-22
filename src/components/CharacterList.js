import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard';

export default function CharacterList() {
  const [characters, setCharacter] = useState({});
  // TODO: Add useState to track data from useEffect


  useEffect(() => {
    axios
      .get('https://rickandmortyapi.com/api/characters')
      .then(res => {
        setCharacter(res.data);
      })
      .catch(error => {
        console.log(error);
      });
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
      console.log(characters),
    <section className="character-list">
      <div>
      {characters.map(character => {
        return (
           <div>
            <CharacterCard key={character.id} character={character} />
          </div>
           )
        })}
      </div>
    </section>
  );
}
