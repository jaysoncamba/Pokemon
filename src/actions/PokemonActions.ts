import { Dispatch } from "redux";
import {
  ADD_TO_LINEUP, REMOVE_FROM_LINEUP, SET_CURRENT_POKEMON,
  ADD_POKEMONS, IPokemon, PokemonDispatchTypes, POKEMON_LOADING,
  POKEMON_FAIL
} from "./PokemonActionTypes";
import axios from "axios";

export const AddToLineUp = (pokemon: IPokemon) => {
  return {
    type: ADD_TO_LINEUP,
    pokemon
  }
}

export const RemoveFromLineUp = (pokemon: IPokemon) => {
  return {
    type: REMOVE_FROM_LINEUP,
    pokemon
  }
}

export const SetCurrentPokemon = (pokemon: IPokemon) => {
  return {
    type: SET_CURRENT_POKEMON,
    pokemon
  }
}

export const GetPokemons = () => async (dispatch: Dispatch<PokemonDispatchTypes>) => {
  try {
    dispatch({
      type: POKEMON_LOADING
    })

    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=151`);

    dispatch({
      type: ADD_POKEMONS,
      payload: res.data
    })

  } catch(e) {
    dispatch({
      type: POKEMON_FAIL
    })
  }
};