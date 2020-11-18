import React, { useContext } from 'react'
import { UserContext } from "../../context/UserContext";
import Card from '../../components/Card'
import Form from '../../components/Form'

const Dashboard = (props) => {
    const { initialCard, totalPlayers, totalTeams } = props;
    const { user } = useContext(UserContext);

    return (
        <>
        {console.log(user)}
            <Card response={initialCard} />
            <Form totalTeams={totalTeams} totalPlayers={totalPlayers}  />
        </>
    )
}

export default Dashboard
