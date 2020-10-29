import { type } from "os";

export const ADD_POKEMONS = "ADD_POKEMONS";

export const ADD_TO_LINEUP = "ADD_TO_LINEUP";
export const REMOVE_FROM_LINEUP = "REMOVE_FROM_LINEUP";

export const SET_CURRENT_POKEMON  = "CURRENT_POKEMON";

export const POKEMON_LOADING = "POKEMON_LOADING";
export const POKEMON_FAIL = "POKEMON_FAIL";

export interface IPokemon {
    name: string;
    url: string;
}

export interface PokemonLoading {
  type: typeof POKEMON_LOADING
}

export interface PokemonFail {
  type: typeof POKEMON_FAIL
}

export interface IPokemonsResult {
  count: number,
  next: string,
  previous?: string,
  results: Array<IPokemon>
}

export interface PokemonSuccess {
  type: typeof ADD_POKEMONS,
  payload: IPokemonsResult
}

export type PokemonDispatchTypes = PokemonLoading | PokemonFail | PokemonSuccess