import React, { Component } from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Typography from '@material-ui/core/Typography';
import LineupList from '../LineupList';
import PokemonList from '../PokemonList';
import PokemonDescription from '../PokemonDescription';

interface IPokemon {
  name: string,
  url: string,
  abilities?: PokemonAbility[],
  sprites?: PokemonSprites,
  stats?: PokemonStat[]
} 

interface IPokemonState {
  pokemons?: Array<IPokemon>;
  lineup?: Array<IPokemon>;
  current_pokemon?: IPokemon;
}

interface PokemonAbility {
  ability: {
    name: string
    url: string
  }
}

interface PokemonSprites {
  front_default: string
}

interface PokemonStat {
  base_stat: number,
  stat: {
    name: string
  }
}

export default class Pokedex extends Component {
    state = {
        pokemons: undefined,
        current_pokemon: undefined,
        lineup: []
    } as IPokemonState

    componentDidMount(): void {
      if(!this.state.pokemons)
        this.getPokemons();
    }

    getPokemons(): void {
      fetch('https://pokeapi.co/api/v2/pokemon?limit=151', {'method': 'get'})
        .then(response => response.json())
        .then(response => {
            this.setState({pokemons: response.results})
        })
    }

    getPokemonAttr(pokemon: IPokemon): void {
      fetch(pokemon.url, {'method': 'get'})
        .then(response => response.json())
        .then(response => {
            const newPokemon =  { ...pokemon, ...response } as IPokemon
            const {lineup, pokemons} = this.state
            const newLineup = lineup?.slice()!
            const newPokemons = pokemons?.slice()!
            let lineupIndex = newLineup.indexOf(pokemon)
            let pokemonsIndex = newPokemons.indexOf(pokemon)
            if(lineupIndex !== -1){
              newLineup[lineupIndex] = newPokemon
            }
            if(pokemonsIndex !== -1){
              newPokemons[pokemonsIndex] = newPokemon
            }
            this.setState( {current_pokemon: newPokemon, lineup: newLineup, pokemons: newPokemons })
        })
    }

    addToLineUp = (pokemon: IPokemon) => {
      if(this.state.lineup?.includes(pokemon)) {
        alert("Cannot have duplicate Pokemons in the lineup");
        return;
      }
      this.setState({ 
        current_pokemon: pokemon,
        lineup: this.state.lineup?.concat(pokemon)
      });
    }

    removeFromLineup = (pokemon: IPokemon) => {
      const newList = this.state.lineup?.filter(pkmon => pkmon !== pokemon);
      this.setState({ 
        current_pokemon: pokemon,
        lineup: newList
      });
    }

    setCurrentPokemon = (pokemon: IPokemon) => {
      if(this.state.current_pokemon !== pokemon) {
        if(!pokemon.abilities) {
          this.getPokemonAttr(pokemon);
        }
        this.setState({ current_pokemon: pokemon });
      }
    }

    render() {
      const { pokemons, lineup, current_pokemon } = this.state;
      return (
        <div>
          <GridList cols={3}>
            <GridListTile  key="heading" cols={3}> 
              <Typography variant="h5" align="center">Pokemon Lineup</Typography>
            </GridListTile>
            <LineupList pokemons={ lineup } deleteHandler={this.removeFromLineup} onClickHandler={this.setCurrentPokemon}/>
            <GridListTile  key="pokedex" cols={3}> 
              <Typography  variant="h5" align="center">Pokemon Descripion</Typography>
              <PokemonDescription pokemon={ current_pokemon } />
            </GridListTile>
          </GridList>
          <GridList cols={3}>
            <GridListTile  key="heading" cols={3}> 
              <Typography variant="h5" align="center">PokeDex</Typography>
              <PokemonList pokemons={ pokemons } addHandler={this.addToLineUp} onClickHandler={this.setCurrentPokemon}/>
            </GridListTile>
          </GridList>
        </div>
      )
    }
}