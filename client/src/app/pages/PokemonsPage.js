import React, { } from 'react';

import './PokemonsPage.scss';
import { PokemonsList } from '../components/pokemons';

const PokemonsPage = ({children}) => {
  return (
    <div className="page page--pokemons">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>Pokemons</h1>
          </div>
        </div>
        <PokemonsList />
      </div>
    </div>
  );
};

export default PokemonsPage;