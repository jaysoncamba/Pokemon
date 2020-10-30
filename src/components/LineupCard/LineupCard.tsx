import React from 'react';
import PropTypes from 'prop-types';
import { Paper, GridListTile } from '@material-ui/core';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      minWidth: 270
    },
  }),
);

const LineupCard = (props: any) => {
    const {pokemon, onClickHandler, deleteHandler}  = props;
    const classes = useStyles();
    return(
      <GridListTile key={pokemon.name}>
          <Paper onClick={() => onClickHandler(pokemon)} className={classes.paper}>
            <img src={pokemon?.sprites?.front_default} alt=""/>
            {pokemon.name}
            <span onClick={() => deleteHandler(pokemon)}>X</span>
          </Paper>
      </GridListTile>
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