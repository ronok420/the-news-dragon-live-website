import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app);


const Authprovider = ({ children }) => {
    const [user, setUser] = useState(null);

    const createUser = (email, pasasword) => {
        return createUserWithEmailAndPassword(auth, email, pasasword);
    }
    const signInuser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    useEffect(() => {
      const unsubsCribe=  onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        })
        return ()=>{
            return unsubsCribe();
        }
    }, [])
    const logOut =()=>{
       return  signOut(auth);
    }

    const authInfo = {
        user,
        createUser,
        signInuser,
        logOut
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;
