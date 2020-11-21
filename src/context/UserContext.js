import React, { createContext, useState, useEffect } from "react";
import firebase, { googleProvider } from "../firebase";
import { navigate } from "@reach/router";
import { createNewUser } from "../services/MongoDBService";

export const UserContext = createContext({});

export const UserProvider = (props) => {
    const [user, setUser] = useState(null);

    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);

    firebase.auth().onAuthStateChanged(user => {
        if (user){
            setUser(user);
        }
    })

    const signInGoogle = async () => {
        await firebase
            .auth()
            .signInWithPopup(googleProvider)
            .then(result => {
                setUser(result.user);
                localStorage.setItem("user", JSON.stringify(result.user))
                createNewUser(result.user);
                navigate("/dashboard");
        })
    }

    const signOut = () => {
        localStorage.removeItem("user");
        setUser(null);
        firebase.auth().signOut();
    }

    useEffect(() => {
        if (!user && localStorage.getItem("user")) {
            const localUser = JSON.parse(localStorage.getItem("user"));
            console.log("local user = ", localUser);
            setUser(localUser);
        }
    }, [])

    return (
        <UserContext.Provider value={{ user, signInGoogle, signOut }}>
            {props.children}
        </UserContext.Provider>
    )
};
