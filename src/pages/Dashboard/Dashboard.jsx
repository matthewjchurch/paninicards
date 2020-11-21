import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { readFF } from "../../services/PFLService";
import Form from '../../components/Form'
import Watchlist from './Watchlist/Watchlist';
import { Link } from "@reach/router";

const Dashboard = (props) => {
    const { user } = useContext(UserContext);
    const [totalPlayers, setTotalPlayers] = useState([]);
    const [totalTeams, setTotalTeams] = useState([]);

    useEffect(() => {
        readFF(setTotalTeams, setTotalPlayers);
        console.log(user);
    }, [])

    return (
        user ?
        <>
            <Form user={user} totalTeams={totalTeams} totalPlayers={totalPlayers}  />
            <Watchlist user={user} />
        </> :
        <>
            <h3>Please login to view your dashboard</h3>
            <Link to="/">
                <button>Return to home</button>
            </Link>
        </>
    )
}

export default Dashboard
