import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app);


const Authprovider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loader,setLoader] =useState(true);

    const createUser = (email, pasasword) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, pasasword);
    }
    useEffect(() => {
        const unsubsCribe=  onAuthStateChanged(auth, currentUser => {
              setUser(currentUser);
              setLoader(false);
          })
          return ()=>{
              return unsubsCribe();
          }
      }, [])
    const signInuser = (email, password) => {
       
        return signInWithEmailAndPassword(auth, email, password);
    }
   
    const logOut =()=>{
        setLoader(true);
       return  signOut(auth);
    }

    const authInfo = {
        user,
        createUser,
        signInuser,
        logOut,
        loader,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;
