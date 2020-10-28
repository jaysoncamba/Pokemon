import {
    POKEMON_FAIL,
    POKEMON_LOADING,
    POKEMON_SUCCESS,
    PokemonDispatchTypes,
    IPayload
  } from "../actions/PokemonActionTypes";
  
  interface DefaultStateI {
    loading: boolean,
    result?: IPayload
  }
  
  const defaultState: DefaultStateI = {
    loading: false
  };
  
  const pokemonReducer = (state: DefaultStateI = defaultState, action: PokemonDispatchTypes) : DefaultStateI => {
    switch (action.type) {
      case POKEMON_FAIL:
        return {
          loading: false,
        }
      case POKEMON_LOADING:
        return {
          loading: true,
        }
      case POKEMON_SUCCESS:
        return {
          loading: false,
          result: action.payload
        }
      default:
        return state
    }
  };
  
  
  export default pokemonReducer