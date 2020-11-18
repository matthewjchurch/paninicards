import React from 'react'
import Card from '../../components/Card'
import Form from '../../components/Form'

const Dashboard = (props) => {
    const { initialCard, totalPlayers, totalTeams } = props;
    return (
        <>
            <Card response={initialCard} />
            <Form totalTeams={totalTeams} totalPlayers={totalPlayers}  />
        </>
    )
}

export default Dashboard
