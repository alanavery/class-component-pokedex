import { useState, useEffect } from 'react';
import Axios from 'axios';

function Pokedex() {
  const [pokemonName, setPokemonName] = useState('pikachu');
  const [pokemonImage, setPokemonImage] = useState('');

  useEffect(async () => {
    console.log('Hello.');
    try {
      if (pokemonName === '') {
        return;
      }
      const res = await Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
      setPokemonImage(res.data.sprites.other['official-artwork'].front_default);
    } catch (err) {
      setPokemonImage('');
    }
  });

  return (
    <div>
      <h1>My First Pokedex</h1>
      <input
        value={pokemonName}
        onChange={(e) => {
          setPokemonName(e.target.value.toLowerCase());
        }}
      />
      <div>
        <img src={pokemonImage} />
      </div>
    </div>
  );
}

export default Pokedex;
