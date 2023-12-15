import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);
const auth =getAuth(app);


const Authprovider = ({children}) => {
 const user =(null);
 const createUser =(email,pasasword)=>{
    return createUserWithEmailAndPassword(auth,email,pasasword);
 }
 const signInuser =(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password);
 }

  const authInfo = {
    user,
    createUser,
    signInuser,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default Authprovider;
