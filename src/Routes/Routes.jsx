import React from 'react'
import { Router } from "@reach/router";
import Login from '../pages/Login';
import Dashboard from "../pages/Dashboard";
import PrivateRoutes from './PrivateRoutes/PrivateRoutes';

const Routes = (props) => {
    const { initialCard, totalPlayers, totalTeams } = props;

    return (
        <Router>
            <Login path="/" />
            <PrivateRoutes path="/">
                <Dashboard initialCard={ initialCard} totalPlayers={totalPlayers} totalTeams={totalTeams} path="/dashboard" />
            </PrivateRoutes>
        </Router>
    )
}

export default Routes
