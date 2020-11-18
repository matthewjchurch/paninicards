import React, { useEffect, useContext } from 'react';
import { UserContext } from "../../context/UserContext";
import { navigate } from "@reach/router"
import firebase from  "../../firebase";

const PrivateRoutes = (props) => {
    const { children } = props;
    const { user } = useContext(UserContext);

    useEffect(() => {
        if(!user) {
            alert('You must be logged in to view this page. Click the Google button to sign in.');
            navigate("/");
        }
    });
        
    return (
        <>
            {children}
        </>
    )
}

export default PrivateRoutes
