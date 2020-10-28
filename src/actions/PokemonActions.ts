import {Dispatch} from "redux";
import {IPOKEMON_FAIL, IPOKEMON_LOADING, IPOKEMON_SUCCESS, PokemonDispatchTypes} from "./PokemonActionTypes";
import axios from "axios";

export const GetPokemon = (pokemon: string) => async (dispatch: Dispatch<PokemonDispatchTypes>) => {
  try {
    dispatch({
      type: IPOKEMON_LOADING
    })

    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    dispatch({
      type: IPOKEMON_SUCCESS,
      payload: res.data
    })

  } catch(e) {
    dispatch({
      type: IPOKEMON_FAIL
    })
  }
};

export const GetPokemons = () => async (dispatch: Dispatch<PokemonDispatchTypes>) => {
    try {
      dispatch({
        type: IPOKEMON_LOADING
      })
  
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/`);
  
      dispatch({
        type: IPOKEMON_SUCCESS,
        payload: res.data
      })
  
    } catch(e) {
      dispatch({
        type: IPOKEMON_FAIL
      })
    }
  };