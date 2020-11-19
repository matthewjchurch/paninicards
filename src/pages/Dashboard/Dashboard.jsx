import React, { useState, useEffect, useContext } from 'react'
import { UserContext } from "../../context/UserContext";
import { readFF } from "../../services/PFLService";
import Card from '../../components/Card'
import Form from '../../components/Form'

const Dashboard = (props) => {
    const { initialCard } = props;
    const [totalPlayers, setTotalPlayers] = useState([]);
    const [totalTeams, setTotalTeams] = useState([]);
    const { user } = useContext(UserContext);

    useEffect(() => {
        readFF(setTotalTeams, setTotalPlayers);
    }, [])

    return (
        <>
        {console.log(user)}
            <Form user={user} totalTeams={totalTeams} totalPlayers={totalPlayers}  />

        </>
    )
}

export default Dashboard
