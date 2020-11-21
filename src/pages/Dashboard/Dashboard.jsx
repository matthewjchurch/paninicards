import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { readFF } from "../../services/PFLService";
import Form from '../../components/Form'
import Watchlist from './Watchlist/Watchlist';
import Error from "../../components/Error";

const Dashboard = (props) => {
    const { user } = useContext(UserContext);
    const [totalPlayers, setTotalPlayers] = useState([]);
    const [totalTeams, setTotalTeams] = useState([]);

    useEffect(() => {
        readFF(setTotalTeams, setTotalPlayers);
    }, [])

    return (
        user ?
        <>
            <Form user={user} totalTeams={totalTeams} totalPlayers={totalPlayers}  />
            <Watchlist user={user} />
        </> :
        <Error message="Please log in to view your dashboard" />
    )
}

export default Dashboard
