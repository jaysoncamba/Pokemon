
import {combineReducers} from "redux";
import pokemonReducer from "./PokemonReducer";

const RootReducer = combineReducers({
  result: pokemonReducer
});

export default RootReducer