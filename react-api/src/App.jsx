
import './App.css';
import { useState } from "react";
import axios from "axios";

function App() {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonChosen, setPokemonChosen] = useState(false);
  const [pokemon, setPokemon] = useState({
    name: "",
    number: "",
    species: "",
    image: "",
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    type: "",
  });


  const searchPokemon = () => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then(
      (res) => {
        console.log(res.data);
        setPokemon({
          name: pokemonName,
          number: res.data.id,
          species: res.data.species.name,
          image: res.data.sprites.front_default,
          hp: res.data.stats[0].base_stat,
          attack: res.data.stats[1].base_stat,
          defense: res.data.stats[2].base_stat,
          speed: res.data.stats[5].base_stat,
					type: res.data.types[0].type.name,
        });
        setPokemonChosen(true);
      }
    );
  };
  return (
    <div className="App">
        <div className="TitleSection">
        <h1>Pokédex</h1>
        <input
          type="text"
          onChange={(event) => {
            setPokemonName(event.target.value);
          }}
          value={pokemonName.toLowerCase()}
        />
        <div>
          {pokemonName && <button onClick={searchPokemon}>Search Pokémon</button>}
        </div>
      </div>
      <div className="DisplaySection">
        {!pokemonChosen ? (
          <h1 className="beige_result"> Please choose a Pokémon </h1>
        ) : (
          <>
            <h1 className="beige_result">{pokemon.name}</h1>
            <img className="pokemon_img" src={pokemon.image} alt={pokemon.name} />
            <div className="description">
              <h4 className="gray_result">Number: <h4 className="red_result">#{pokemon.number}</h4> </h4>
              <h4 className="gray_result">Species:{pokemon.species}</h4>
              <h4 className="gray_result">Type: {pokemon.type}</h4>
              <h4 className="gray_result">Hp:<h4 className="red_result">{pokemon.hp}</h4> </h4>
              <h4 className="gray_result">Attack: <h4 className="red_result">{pokemon.attack}</h4></h4>
              <h4 className="gray_result">Speed:<h4 className="red_result">{pokemon.speed}</h4> </h4>
            </div>

          </>
          
        )}
      </div>
    </div>
  ); 
}

export default App;
