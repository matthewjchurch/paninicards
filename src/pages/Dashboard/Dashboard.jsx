import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { readFF } from "../../services/PFLService";
import Form from '../../components/Form'
import Watchlist from './Watchlist/Watchlist';
import Error from "../../components/Error";
import { getWatchlist } from "../../services/MongoDBService";

const Dashboard = (props) => {
    const { user } = useContext(UserContext);
    const [totalPlayers, setTotalPlayers] = useState([]);
    const [totalTeams, setTotalTeams] = useState([]);
    const [watchlist, setWatchlist] = useState(null);

    const updateWatchlist = () => {
        getWatchlist(user)
            .then(res => {
                setWatchlist(res);
            })
    }

    useEffect(() => {
        readFF(setTotalTeams, setTotalPlayers);
    }, [])

    useEffect(() => {
        if (user) {
            updateWatchlist();
        }
    }, [user])

    return (
        user ?
        <>
            <Form updateWatchlist={updateWatchlist} user={user} totalTeams={totalTeams} totalPlayers={totalPlayers}  />
            <Watchlist watchlist={watchlist} user={user} />
        </> :
        <Error message="Please log in to view your dashboard" />
    )
}

export default Dashboard
