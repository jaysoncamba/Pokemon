import {
  ADD_TO_LINEUP, REMOVE_FROM_LINEUP, SET_CURRENT_POKEMON,
  ADD_POKEMONS, IPokemon
} from "../actions/PokemonActionTypes"
  
  interface IDefaultState {
    current_pokemon?: IPokemon,
    lineup: Array<IPokemon>,
    pokemons: Array<IPokemon>
  }
  
  const defaultState: IDefaultState = {
    current_pokemon: undefined,
    lineup: [],
    pokemons: []
  };
  
  const pokemonReducer = (state: IDefaultState = defaultState, action: any) : IDefaultState => {
    switch (action.type) {
      case ADD_TO_LINEUP: {
        return {
          ...state,
          lineup: state.lineup.concat(action.pokemon)
        }
      }
      case REMOVE_FROM_LINEUP: {
        const newList = state.lineup.filter(pokemon => pokemon !== action.pokemon);
        return {
          ...state,
          lineup: newList
        }
      }
      case SET_CURRENT_POKEMON: {
        return {
          ...state,
          current_pokemon: action.pokemon
        }
      }
      case ADD_POKEMONS: {
        return {
          ...state,
          pokemons: action.payload.results
        }
      }
      default:
        return state
    }
  };
  
  
  export default pokemonReducer