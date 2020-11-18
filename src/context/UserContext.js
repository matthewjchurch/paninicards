import React, { createContext, useState } from "react";
import firebase, { googleProvider } from "../firebase";
import { navigate } from "@reach/router";

export const UserContext = createContext({});

export const UserProvider = (props) => {
    const [user, setUser] = useState(null);

    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);

    const getUser = () => {
        firebase.auth().onAuthStateChanged(user => {
            if (user){
                setUser(user);
            }
        })
    }

    const signInGoogle = () => {
        firebase
            .auth()
            .signInWithPopup(googleProvider)
            .then(result => {
                setUser(result.user);
                navigate("/dashboard");
        })
    }

    const signOut = () => {
        firebase.auth().signOut();
    }

    return (
        <UserContext.Provider value={{ user, signInGoogle, signOut, getUser }}>
            {props.children}
        </UserContext.Provider>
    )
};
