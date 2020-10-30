import React from 'react';
import LineupCard from '../LineupCard';
import PropTypes from 'prop-types';
import GridList from '@material-ui/core/GridList';


const LineupList = (props: any) => {
    const {pokemons, onClickHandler, deleteHandler} = props;

    return (
      <GridList cellHeight={200} cols={3} spacing={1}> 
        {pokemons?.map((pokemon: any) =>  
            <LineupCard key={pokemon.name} pokemon={pokemon} onClickHandler={onClickHandler} deleteHandler={deleteHandler}/>   
        )}
      </GridList>
    )
}

LineupList.propTypes = {
    pokemons: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
      })
    ),
    onClickHandler: PropTypes.func,
    deleteHandler: PropTypes.func
  };

  export default LineupList;