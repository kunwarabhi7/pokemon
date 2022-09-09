import { useState } from 'react';
import './App.css';
import Axios from 'axios';

function App() {
  const [name, setName] = useState('')
  const [pokemonChoosen, setPokemonChoosen] = useState(false)
  const [pokemon, setPokemon] = useState({})

  const searchPokemon = () => {
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`).then(res => {
      console.log(res)
      setPokemon({

        name: name, species: res.data.species.name, id: res.data.id,
        height: res.data.height, weight: res.data.weight, OVR: res.data.base_experience,
        image: res.data.sprites.front_default, type: res.data.types[0].type.name
      })
    })
    setPokemonChoosen(true)
  }

  return (
    <div className="App">
      <div className="TitleSection">
        <h1>Pokemon</h1>
        <input type="text" onChange={e => { setName(e.target.value) }} />
        <button onClick={searchPokemon}>Search Pokemon</button>
        {!pokemonChoosen ? <p>Choose a pokemon </p> :
          <>
            <h1>Name:{pokemon.name}</h1>
            <h3>species:{pokemon.species} </h3>
            <h2>Rank:{pokemon.id}</h2>
            <h4>Height: {pokemon.height}</h4>
            <h4>weight: {pokemon.weight}</h4>
            <h4>OVR: {pokemon.OVR}</h4>
            <h4>Type: {pokemon.type}</h4>
            <img src={pokemon.image} />
          </>
        }

      </div>
    </div>

  );
}

export default App;
