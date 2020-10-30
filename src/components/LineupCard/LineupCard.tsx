import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';

const LineupCard = (props: any) => {
    const {pokemon, onClickHandler, deleteHandler}  = props;

    return(
        <li onClick={() => onClickHandler(pokemon)}>
            <h1>{pokemon.name}</h1> 
            <Button onClick={() => deleteHandler(pokemon)}>X</Button>
        </li>
    )
}

LineupCard.propTypes = {
    pokemon: PropTypes.shape({
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired
    }),
    onClickHandler: PropTypes.func,
    deleteHandler: PropTypes.func
}

export default LineupCard;