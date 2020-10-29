import React, {useState} from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {RootStore} from "./Store";
import {GetPokemon, GetPokemons} from "./actions/PokemonActions";

function App() {
  const dispatch = useDispatch();
  const [pokemonName, setPokemonName] = useState("");
  const pokemonState = useSelector((state: RootStore) => { console.log(state); return state.result});
  dispatch(GetPokemons());
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setPokemonName(event.target.value);
  const handleSubmit = () => dispatch(GetPokemons());

  return (
    <div className="App">
      {pokemonState.}
      {pokemonState.pokemon && (
        <div>
          <img src={pokemonState.pokemon.sprites.front_default} alt=""/>
          {pokemonState.pokemon.abilities.map(ability => {
            return <p>{ability.ability.name}</p>
          })}
        </div>
      )}
    </div>
  );
}

export default App;