import { v4 as uuidv4 } from 'uuid';

import { admin, app, db, generateTimestamps } from './firebase';
import Proxy from './Proxy';

const urlsToBookmark = [
  'https://github.com/gdmgent-1920-mobdev2/nodejs-nmd-crawler',
  'https://devcenter.heroku.com/articles/getting-started-with-nodejs',
  'https://www.npmjs.com/package/ts-node',
  'https://vuejs.org/',
  'https://svelte.dev',
  'https://angular.io',
  'https://emberjs.com',
  'https://reactjs.org',
  'https://www.webcomponents.org',
  'https://webassembly.org/',
  'https://www.meteor.com',
  'https://hapi.dev',
  'https://nestjs.com',
];

(async () => {
  // Get messages collection
  let collectionRef = db.collection('bookmarks');

  // Create a Bookmark
  const createBookmark = (bookmark) => {
    // Add a document with faker
    const data = {
      ...bookmark,
      ...generateTimestamps()
    };

    collectionRef.add(data).then(documentReference => {
      console.log(`Added document with name: ${documentReference.id}`);
    });
  };

  // Create bookmarks via promises
  const createBookmarks = async () => {
    const promises = [];
    for (let i=0; i < urlsToBookmark.length;i++) {
      promises.push(createBookmark(await Proxy.getSEOFromUrl(urlsToBookmark[i])));
    }
    return await Promise.all(promises);
  };

  await createBookmarks(); 
})();
