import React from 'react';
import PokemonCard from '../PokemonCard';
import PropTypes from 'prop-types';


const PokemonList = (props: any) => {
    const {pokemons, onClickHandler, addHandler} = props;
    return (
        <ul style={{paddingLeft: 0}}>
            {pokemons?.map((pokemon: any) =>  
                <PokemonCard key={pokemon.name} pokemon={pokemon} onClickHandler={onClickHandler} addHandler={addHandler}/>   
            )}
        </ul>
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