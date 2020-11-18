import React from 'react'
import { Router } from "@reach/router";
import Login from '../pages/Login';
import Dashboard from "../pages/Dashboard";

const Routes = (props) => {
    const { initialCard, totalPlayers, totalTeams } = props;

    return (
        <Router>
            <Login path="/" />
            <Dashboard initialCard={initialCard} totalPlayers={totalPlayers} totalTeams={totalTeams} path="/dashboard" />
        </Router>
    )
}

export default Routes
