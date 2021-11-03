import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function App() {
  const [pokemonName, setPokemonName] = useState("");
  return (
    <div className="App">
        <div className="TitleSection">
        <h1>Pokédex</h1>
        <input
          type="text"
          onChange={(event) => {
            setPokemonName(event.target.value);
          }}
        />
        <button>Search Pokémon</button>
      </div>
    </div>
  );
}

export default App;
