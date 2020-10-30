import React from 'react';
import PropTypes from 'prop-types';
import EcoIcon from '@material-ui/icons/Eco';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import IconButton from '@material-ui/core/IconButton';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';

const PokemonCard = (props: any) => {
    const {pokemon, onClickHandler, addHandler}  = props;

    return(
        <ListItem onClick={() => onClickHandler(pokemon)}>
          <ListItemAvatar>
            <Avatar>
                <EcoIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={pokemon.name}/>
          <ListItemSecondaryAction onClick={() => addHandler(pokemon)}>
            <IconButton edge="end" aria-label="delete">
              <AddCircleOutlineIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
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