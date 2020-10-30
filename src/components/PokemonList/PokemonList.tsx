import React from 'react';
import List from '@material-ui/core/List';
import PokemonCard from '../PokemonCard';
import PropTypes from 'prop-types';


const PokemonList = (props: any) => {
  const {pokemons, onClickHandler, addHandler} = props;
  return (
      <List>
        {pokemons?.map((pokemon: any) =>  
              <PokemonCard key={pokemon.name} pokemon={pokemon} onClickHandler={onClickHandler} addHandler={addHandler}/>   
          )}
      </List>
  )
}

PokemonList.propTypes = {
    pokemons: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
      })
    ),
    onClickHandler: PropTypes.func,
    addHandler: PropTypes.func
  };

  export default PokemonList;