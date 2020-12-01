import React from 'react'
import { Router } from "@reach/router";
import Login from '../pages/Login';
import Dashboard from "../pages/Dashboard";
import PrivateRoutes from './PrivateRoutes/PrivateRoutes';
import { ModalProvider } from "../context/ModalContext";

const Routes = (props) => {
    const { initialCard, totalPlayers, totalTeams } = props;

    return (
        <ModalProvider>
            <Router>
                <Login path="/" />
                <PrivateRoutes path="/">
                    <Dashboard initialCard={ initialCard} totalPlayers={totalPlayers} totalTeams={totalTeams} path="/dashboard" />
                </PrivateRoutes>
            </Router>
        </ModalProvider>
    )
}

export default Routes
