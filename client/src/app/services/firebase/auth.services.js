import { default as React, useContext, useEffect, useState } from 'react';
import 'firebase/auth';

import { useFirebase } from './firebase.services';

const AuthContext = React.createContext(null);
const useAuth = () => useContext(AuthContext);

/*
https://firebase.google.com/docs/reference/js/firebase.auth.Auth#signinwithemailandpassword
*/

const AuthProvider = ({children}) => {
  const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('corona-festival:currentUser')));
  const { app } = useFirebase();
  const auth = app.auth();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      localStorage.setItem('corona-festival:currentUser', JSON.stringify(user));
      setCurrentUser(user);
    });

    return () => {
      unsubscribe();
    }
  }, []);

  const signInWithEmailAndPassword = async (email, password) => {
    try {
      return await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.log(error);
      // Error handling login with email
      switch (error.code) {
        case "auth/user-not-found":
          error.content = "The user doesn't exists.";
          break;

        case "auth/wrong-password":
          error.content = "You gave in a wrong password.";
          break;

        case "auth/user-disabled":
          error.content = "You're account is banned/blocked.";
          break;

        case "auth/invalid-email":
          error.content = "You gave in a wrong email.";
          break;
          
        default:
          error.content = "Something went wrong.";
          break;
      }
      error.errortype = true;
      return error;
    }    
  };

  const signOut = async () => {
    localStorage.setItem('corona-festival:currentUser', null);
    return await auth.signOut();
  };

  return (
    <AuthContext.Provider value={{currentUser,signInWithEmailAndPassword,signOut}}>
      {children}
    </AuthContext.Provider>
  );
};

export {
  AuthContext,
  AuthProvider,
  useAuth,
};
