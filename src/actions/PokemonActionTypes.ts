import { StringLiteral } from "typescript";

export const POKEMON_LOADING = "POKEMON_LOADING";
export const POKEMON_FAIL = "POKEMON_FAIL";
export const POKEMON_SUCCESS = "POKEMON_SUCCESS";

export type IPokemonType = {
  abilities: IPokemonAbility[],
  sprites: IPokemonSprites,
  stats: IPokemonStat[]
}

export type IPokemonAbility = {
  ability: {
    name: string
    url: string
  }
}

export type IPokemonSprites = {
  front_default: string
}

export type IPokemonStat = {
  base_stat: number,
  stat: {
    name: string
  }
}

export interface IPokemonLoading {
  type: typeof POKEMON_LOADING
}

export interface IPokemonFail {
  type: typeof POKEMON_FAIL
}

export interface IPokemonSuccess {
  type: typeof POKEMON_SUCCESS,
  payload: IPayload
}

export interface IPokemon {
    name: string;
    url: string;
}

export interface IPayload {
    count: number;
    next: string;
    previous: string;
    pokemons: Array<IPokemon>;
}

export type PokemonDispatchTypes = IPokemonLoading | IPokemonFail | IPokemonSuccess