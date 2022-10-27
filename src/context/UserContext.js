import React, { createContext, useState, useEffect } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, onAuthStateChanged, signOut } from 'firebase/auth'
import app from '../firebase/firebase.config';

export const AuthContext = createContext()
const auth = getAuth(app)

const UserContext = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // google sign in

    const signInWithGoogle = (googleProvider) => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    //github sign in


    const signInWithGithub = (githubProvider) => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider)

    }

    // email sign up

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // EMAIL SIGN IN

    const signIn = (email, password) => {

        return signInWithEmailAndPassword(auth, email, password)
    }

    // logout
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }


    // unsubscribe
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        });

        return () => {
            unsubscribe()
        }

    }
        , [])


    const authInfo = { user, loading, signInWithGoogle, signInWithGithub, createUser, signIn, logOut }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;