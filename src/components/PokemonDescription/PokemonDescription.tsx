import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';

const PokemonDescription = (props: any) => {
    const { pokemon }  = props;

    return(
        <div>
          <h1>{pokemon?.name}</h1>
          <img src={pokemon?.sprites?.front_default} alt=""/>
          <label>Stats: </label>
          <ul>
            {pokemon?.stats?.map((stat: any) =>
              <li key={uuid()}>{stat?.stat?.name}: {stat?.base_stat}</li>
            )}
          </ul>
          <label>Abilities: </label>
          <ul>
            {pokemon?.abilities?.map((ability: any) =>
              <li key={uuid()}>{ability?.ability?.name}</li>
            )}
          </ul>
        </div>
    )
}

PokemonDescription.propTypes = {
    pokemon: PropTypes.shape({
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        abilities: PropTypes.arrayOf(PropTypes.shape({
            ability: PropTypes.shape({
                name: PropTypes.string,
                url: PropTypes.string
            })
        })),
        sprites: PropTypes.shape({
            front_default: PropTypes.string
        }),
        stats: PropTypes.arrayOf(PropTypes.shape({
            base_stat: PropTypes.number,
            stat: PropTypes.shape({
                name: PropTypes.string
            })
        }))

    })
}

export default PokemonDescription;