import React, { useEffect, useState, useContext } from 'react';
import firebase  from 'firebase';
import { Redirect, Route } from 'react-router';
import { startFirebaseUI, ui } from '../firebase';

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export const AuthProvider = ( { children } ) => {
    var [currentUser, setCurrentUser] = useState({ isAuthenticated: false, isAuthorized: false, loggedIn: false, hasItems: false });
    // const auth = ui;

    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged(user => {
            // const userCred = firebase.auth()
            // console.log(userCred)
            if (user) {
                setCurrentUser(
                    {
                        isAuthenticated: true,
                        isAuthorized: false, 
                        user: {
                            id: user.uid,
                            name: user.displayName,
                            email: user.email
                        },
                        isSubscribed: false,
                        downloadsAvailable: 0,
                        loggedIn: true
                    },
                );
            } 
            else {
                setCurrentUser({ isAuthenticated: false, loggedIn: false });
            }
        });
        return unsubscribe;
    }, []);

    const value = { currentUser };
    // const state = {state}

    return (
        <AuthContext.Provider value={value}>
            { children }
        </AuthContext.Provider>
    )
}



