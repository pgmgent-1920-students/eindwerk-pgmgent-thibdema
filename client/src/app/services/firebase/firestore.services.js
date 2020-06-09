import React, { useContext } from 'react';
import 'firebase/firestore';

import { useFirebase } from './firebase.services';

const FirestoreContext = React.createContext(null);
const useFirestore = () => useContext(FirestoreContext);

const FirestoreProvider = ({children}) => {
  const { app } = useFirebase();
  const db = app.firestore();

  const getMessages = async () => {
    const query = db.collection('messages').orderBy('createdAt', 'desc');
    const querySnapshot = await query.get();
    const messages = querySnapshot.docs.map((doc) => {
      return {
        uid: doc.id,
        ...doc.data()
      }
    });
    return messages;
  };

  const getBookmarks = async () => {
    const query = db.collection('bookmarks').orderBy('createdAt', 'desc');
    const querySnapshot = await query.get();
    const bookmarks = querySnapshot.docs.map((doc) => {
      return {
        uid: doc.id,
        ...doc.data()
      }
    });
    return bookmarks;
  };

  const getPokemons = async () => {
    const query = db.collection('pokemons').orderBy('name', 'asc');
    const querySnapshot = await query.get();
    const pokemons = querySnapshot.docs.map((doc) => {
      return {
        uid: doc.id,
        ...doc.data()
      }
    });
    return pokemons;
  };

  const getGenres = async () => {
    const query = db.collection('genres');
    const querySnapshot = await query.get();
    const genres = querySnapshot.docs.map((doc) => {
      return doc.data();
    });
    return genres;
  };

  const addLivestream = async (livestream) => {
    const ref = db.collection('livestreams');
    const docRef = await ref.add(livestream);
    return docRef;
  };

  const getLivestreams = async () => {
    const currentDate = new Date().toISOString();
    const ref = db.collection('livestreams');
    const querySnapshot = await ref.get();
    const livestreams = [];
    querySnapshot.docs.map((doc) => {
      const data = doc.data();
      if(data.expirationDate > currentDate && data.startDate < currentDate) {
        const constructor = {
          ...data,
          id: doc.id,
        };

        livestreams.push(constructor);
      }
    });
    return sortLivestreams(livestreams);
  };

  const sortLivestreams = (data) => {
    // Newest first
    data.sort((a, b) => {
      let fa = a.startDate;
      let fb = b.startDate;
  
      if(fa < fb) {
        return 1
      } else {
        return -1;
      } 
    });
    return data;
  }

  const getSpecificStream = async (docID) => {
    const ref = db.collection('livestreams').doc(docID);
    const querySnapshot = await ref.get();
    return querySnapshot.data();
  };

  const addBookmark = async (bookmark) => {
    const ref = db.collection('bookmarks');
    const docRef = await ref.add(bookmark);
    return docRef;
  };

  return (
    <FirestoreContext.Provider value={{addBookmark, getBookmarks, getMessages, getPokemons, getGenres, addLivestream, getLivestreams, getSpecificStream}}>
      {children}
    </FirestoreContext.Provider>
  );
};

export {
  FirestoreContext,
  FirestoreProvider,
  useFirestore,
};