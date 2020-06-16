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
  }, [auth]);

  const resetPassword = async (email) => {
    try {
      return await auth.sendPasswordResetEmail(email);
    } catch (error) {
      switch (error.code) {
        case "auth/user-not-found":
          error.content = "There is no account registered with this emailaddress.";
          break;
        default:
          error.content = error.message;
          break;
      }
      return error;
    }
  }

  const signInWithEmailAndPassword = async (email, password) => {
    try {
      return await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
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

  const registerWithEmailAndPassword = async (email, password, displayName) => {
    try {
      await auth.createUserWithEmailAndPassword(email, password);
      await registerOtherData(displayName);
      return 'succes';
    } catch (error) {
      return error;
    }
  };

  const registerOtherData = (displayName) => {
    const user = auth.currentUser;
    user.updateProfile({
      displayName: displayName,
      photoURL: "https://w7.pngwing.com/pngs/36/880/png-transparent-avatar-series-wykop-pl-designer-graphic-artist-designer-face-cartoon-computer-programming-thumbnail.png"
    })
      .then(() => console.log('update succesfull'))
      .catch((error) => console.log(error));
  };

  const updateUserEmail = async (newEmail) => {
    try {
      const user = await auth.currentUser;
      const query = await user.updateEmail(newEmail);
      return query;
    } catch (err) {
      return err.message;
    }
  }

  return (
    <AuthContext.Provider value={{currentUser,signInWithEmailAndPassword,signOut,registerWithEmailAndPassword,resetPassword,updateUserEmail}}>
      {children}
    </AuthContext.Provider>
  );
};

export {
  AuthContext,
  AuthProvider,
  useAuth,
};
