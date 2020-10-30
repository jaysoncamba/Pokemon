import React from 'react';
import LineupCard from '../LineupCard';
import PropTypes from 'prop-types';


const LineupList = (props: any) => {
    const {pokemons, onClickHandler, deleteHandler} = props;

    return (
        <ul style={{paddingLeft: 0}}>
            {pokemons?.map((pokemon: any) =>  
                <LineupCard key={pokemon.name} pokemon={pokemon} onClickHandler={onClickHandler} deleteHandler={deleteHandler}/>   
            )}
        </ul>
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