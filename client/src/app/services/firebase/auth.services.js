import { default as React, useContext, useEffect, useState } from 'react';
import 'firebase/auth';

import { useFirebase } from './firebase.services';

const AuthContext = React.createContext(null);
const useAuth = () => useContext(AuthContext);

/*
https://firebase.google.com/docs/reference/js/firebase.auth.Auth#signinwithemailandpassword
*/

const AuthProvider = ({children}) => {
  const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('react-firebase:currentUser')));
  const { app } = useFirebase();
  const auth = app.auth();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      localStorage.setItem('react-firebase:currentUser', JSON.stringify(user));
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
    }    
  };

  const signOut = async () => {
    localStorage.setItem('react-firebase:currentUser', null);
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
