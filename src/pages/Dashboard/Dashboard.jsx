import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { readFF } from "../../services/PFLService";
import Form from '../../components/Form'
import Watchlist from './Watchlist/Watchlist';

const Dashboard = (props) => {
    const { initialCard } = props;
    const { user } = useContext(UserContext);
    const [totalPlayers, setTotalPlayers] = useState([]);
    const [totalTeams, setTotalTeams] = useState([]);

    useEffect(() => {
        readFF(setTotalTeams, setTotalPlayers);
    }, [])

    // useEffect(() => {
    //     console.log(watchlist);
    // }, [watchlist])

    return (
        <>
            <Form user={user} totalTeams={totalTeams} totalPlayers={totalPlayers}  />
            <Watchlist user={user} />
        </>
    )
}

export default Dashboard
