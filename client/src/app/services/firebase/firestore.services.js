import React, { useContext } from 'react';
import 'firebase/firestore';

import * as firebase from 'firebase/app';

import { useFirebase } from './firebase.services';

const FirestoreContext = React.createContext(null);
const useFirestore = () => useContext(FirestoreContext);

const FirestoreProvider = ({children}) => {
  const { app } = useFirebase();
  const db = app.firestore();

  const getGenres = async () => {
    const query = db.collection('genres');
    const querySnapshot = await query.get();
    const genres = querySnapshot.docs.map((doc) => {
      return doc.data();
    });
    return genres;
  };

  const getChatMessages = async (docID) => {
    const query = db.collection('livestreams').doc(docID);
    const querySnapshot = await query.get();
    const chatMessages = querySnapshot.data().chat;
    return getFirstX(sortChatMessages(chatMessages), 7);
  };

  const getFirstX = (arr, amount) => {
    let max = arr.length;
    const min = max-amount;
    return arr.slice(min, max);
  };

  const sortChatMessages = (data) => {
    // Newest first
    data.sort((a, b) => {
      let fa = a.created_At;
      let fb = b.created_At;
  
      if(fa < fb) {
        return -1
      } else {
        return 1;
      } 
    });
    return data;
  }


  const sendMessage = async (data, docID) => {
    const query = db.collection("livestreams").doc(docID);
    await query.update({
      chat: firebase.firestore.FieldValue.arrayUnion(data)
    });
  };

  const addLivestream = async (livestream) => {
    const ref = db.collection('livestreams');
    const docRef = await ref.add(livestream);
    return docRef;
  };

  const getLivestreams = async () => {
    const currentDate = Date.now();
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
      return ''
    });
    return sortLivestreams(livestreams);
  };

  const getGenre = async (id) => {
    const query = await db.collection('genres').get();
    let content;
    query.forEach((doc) => {
      const data = doc.data();
      if(data.id === Number(id)) {
        content = data;
      }
    });
    return content;
  };

  const getLivestreamsFromGenre = async (genre) => {
    const allLiveStreams = await getLivestreams();
    const grLs = allLiveStreams.filter((ls) => ls.genre === genre);
    return grLs;
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

  const deleteLivestream = (docID) => {
    try {
      db.collection("livestreams").doc(docID).delete();
      console.log('Deleted succesfull');
    } catch(error) {
      console.log(error);
    }
  };

  const editLivestream = (docID, data) => {
    console.log(data)
    console.log(docID)
    try {
      db.collection("livestreams").doc(docID).update({
        title: data.txtTitle,
        iframe: data.txtEmbLink,
        thumbnail: data.txtImgLink,
        genre: data.txtGenre,
        description: data.txtDescription,
        expirationDate: data.txtEnd,
      });
    } catch(error) {
      console.log(error);
    }
  };

  return (
    <FirestoreContext.Provider value={{getGenres, addLivestream, getLivestreams, getSpecificStream, getChatMessages, sendMessage, getGenre, getLivestreamsFromGenre, deleteLivestream, editLivestream}}>
      {children}
    </FirestoreContext.Provider>
  );
};

export {
  FirestoreContext,
  FirestoreProvider,
  useFirestore,
};