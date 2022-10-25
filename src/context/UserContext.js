import React, { createContext, useState, useEffect } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, onAuthStateChanged, signOut } from 'firebase/auth'
import app from '../firebase/firebase.config';

export const AuthContext = createContext()
const auth = getAuth(app)

const UserContext = ({ children }) => {
    const [user, setUser] = useState(null)


    // google sign in
    const googleProvider = new GoogleAuthProvider()
    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
    }
    //github sign in

    const githubProvider = new GithubAuthProvider()
    const signInWithGithub = () => {
        signInWithPopup(auth, githubProvider)
        return
    }

    // email sign up

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // EMAIL SIGN IN

    const signIn = (email, password) => {

        return signInWithEmailAndPassword(auth, email, password)
    }

    // logout
    const logOut = () => {
        return signOut(auth)
    }


    // unsubscribe
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        });

        return () => {
            unsubscribe()
        }

    }
        , [])


    const authInfo = { user, signInWithGoogle, signInWithGithub,createUser, signIn, logOut }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;