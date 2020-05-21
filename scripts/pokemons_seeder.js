import { v4 as uuidv4 } from 'uuid';
import faker from 'faker';
import { admin, app, db, generateTimestamps,generateValueBetweenMinAndMax } from './firebase';

(async () => {
  let collectionRef = db.collection('pokemons');

  // Create a Pokemon
  const createPokemon = (pokemon) => {
    // Add a document with faker
    const data = {
      ...pokemon,
      ...generateTimestamps()
    };

    collectionRef.add(data).then(documentReference => {
      console.log(`Added document with name: ${documentReference.id}`);
    });
  };

  // Create pokemons via promises
  const createPokemons = async (n = 20) => {
    const promises = [];
    for (let i=0; i < n;i++) {
      promises.push(createPokemon({
        name: faker.lorem.word(),
        bestMove: faker.lorem.word(),
        evolution_next: faker.lorem.word(),
        shiny: generateValueBetweenMinAndMax(0, 1) === 0 ? false : true,
        type: faker.lorem.word(),
        pictureURL: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${generateValueBetweenMinAndMax(0, 800)}.png`
      }));
    }
    return await Promise.all(promises);
  };

  await createPokemons(18); 

})();