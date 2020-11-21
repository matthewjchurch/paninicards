import React, { useEffect, useContext } from 'react';
import { UserContext } from "../../context/UserContext";
import { navigate } from "@reach/router"
import firebase from  "../../firebase";

const PrivateRoutes = (props) => {
    const { children } = props;
    const { user } = useContext(UserContext);
        
    return (
        <>
            {children}
        </>
    )
}

export default PrivateRoutes
