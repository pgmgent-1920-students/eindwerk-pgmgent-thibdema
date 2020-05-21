import React, {useEffect, useState} from 'react';
import { useFirestore } from '../../services/firebase/firestore.services';

const PokemonsList = () => {
  const [pokemons, setPokemons] = useState();
  const {getPokemons} = useFirestore();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPokemons();
      setPokemons(data);
    };

    fetchData();
  }, [])

  return (
    <div className="row pokemons-list">
      {!!pokemons 
        ? pokemons.map((pokemon) => {
          return (
            <div className="col-12" key={pokemon.uid}>
              <div class="media"d ata-id={pokemon.uid}>
                <img src={pokemon.pictureURL} class="align-self-start mr-3" alt={pokemon.name} width="148" />
                <div class="media-body">
                  <h5 class="mt-0">{pokemon.name}</h5>
                  <table class="table table-striped">
                    <tbody>
                      <tr>
                        <th scope="row">Type</th>
                        <td>{pokemon.type}</td>
                      </tr>
                      <tr>
                        <th scope="row">Best Move</th>
                        <td>{pokemon.bestMove}</td>
                      </tr>
                      <tr>
                        <th scope="row">Next Evolution</th>
                        <td>{pokemon.evolution_next}</td>
                      </tr>                      
                      <tr>
                        <th scope="row">Shiny</th>
                        <td>{pokemon.shiny ? 'Yes' : 'No'}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )
        })
        : <p>No pokemons</p>
      }
    </div>
  )
};

export default PokemonsList;