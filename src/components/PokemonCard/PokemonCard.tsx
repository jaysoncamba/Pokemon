import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';

const PokemonCard = (props: any) => {
    const {pokemon, onClickHandler, addHandler}  = props;

    return(
        <li onClick={() => onClickHandler(pokemon)}>
            <h1>{pokemon.name}</h1> 
            <Button onClick={() => addHandler(pokemon)}>Add to Lineup</Button>
        </li>
    )
}

PokemonCard.propTypes = {
    pokemon: PropTypes.shape({
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired
    }),
    onClickHandler: PropTypes.func,
    addHandler: PropTypes.func
}

export default PokemonCard;