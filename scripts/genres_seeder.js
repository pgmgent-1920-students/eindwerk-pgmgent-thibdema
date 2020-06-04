const fetch = require('node-fetch');

import { admin, app, db, generateTimestamps } from './firebase';

const apiLink = 'https://api.deezer.com/genre';

(async () => {

  const genres = [];
  let collectionRef = db.collection('genres');

  const fetchGenres = async () => {
    const content = await fetch(apiLink)
      .then((data) => data.json())
      .catch((error) => console.log(error));
    return content;
  }

  let allData = await fetchGenres();

  const main = async () => {
    // console.log(allData)
    allData.data.forEach(element => {
      genres.push(element.name)      
    });
  };

  const createGenre = (genre) => {
    if(genre) {
      const data = {
        genre: genre,
      };
  
      collectionRef.add(data).then(documentReference => {
        console.log(`Added document with the name: ${documentReference.id}`);
      });
    }
  };

  main();
  genres.map((e) => createGenre(e));


})();