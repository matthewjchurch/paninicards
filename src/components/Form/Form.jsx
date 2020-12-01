import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from "../../context/UserContext";
import { addPlayer } from "../../services/MongoDBService";
import styles from "./_Form.module.scss";

const Form = (props) => {
    const { setLoading, updateWatchlist, user, totalTeams, totalPlayers } = props;
    const { signOut } = useContext(UserContext);
    const [selectedTeam, setSelectedTeam] = useState("Arsenal (1)");
    const [selectedPlayer, setSelectedPlayer] = useState({});
    const [displayedPlayer, setDisplayedPlayer] = useState("");

    const getTeamOptions = team => {
        // Renders all teams from the FF data
        let teamData = `${team.name} (${team.id})`
        return <option key={team.id} value={teamData}>{teamData}</option>
    }
    
    const getPlayerOptions = player => {
        // Renders all players based on the team selection
        let id = selectedTeam.match(/\d+/gm);
        if (player.team === parseInt(id[0])) {
            let playerData = `${player.first_name} ${player.second_name} (${player.id})`
            return ( 
                <option 
                    key={player.id}
                    value={playerData}>
                        {playerData}
                </option>
            )
        } 
    }

    const findPlayer = displayVal => {
        // Grabs the ID from the player display name and returns all related data
        const id = parseInt(displayVal.match(/\d+/gm)[0]);
        return totalPlayers.filter(player => player.id === id)[0]
    }

    const playerPosition = elementType => {
        // Returns a text-based position for the player
        switch (elementType) {
            case 1:
                return "Goalkeeper";
            case 2:
                return "Defender";
            case 3:
                return "Midfielder";
            case 4:
                return "Forward";
            default:
                return "Unknown";
    }
}

    const handleChangeTeam = e => {
        // Sets the team and updates the players to select from once this is done
        setSelectedTeam(e.target.value);
        setTimeout(() => {
            setSelectedPlayer(findPlayer(document.getElementById("players-options").value))
        }, 100);
    }

    const handleChangePlayer = e => {
        // Sets the selected player in state
        setSelectedPlayer(findPlayer(e.target.value));
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            uid: user.uid,
            position: playerPosition(selectedPlayer.element_type),
            img: document.getElementById("img").value,
            ...selectedPlayer
        }

        setLoading(true);
        addPlayer(data)
            .then(res => updateWatchlist())
    }

    useEffect(() => {
        setDisplayedPlayer(document.getElementById("players-options").value)
    }, [document.getElementById("players-options")]);

    useEffect(() => {
        return displayedPlayer !== "" ? setSelectedPlayer(findPlayer(displayedPlayer)) : null
    }, [displayedPlayer])
    
    return (
        <section className={styles.formContainer}>
            <h2>Select a player to follow:</h2>
            <button className={styles.signOut} onClick={signOut}>Sign out</button>
            <form>
                <section className={styles.options}>
                    <label htmlFor="team">Team:</label>
                    <select 
                        name="teams" 
                        id="teams-options" 
                        onChange={handleChangeTeam}>
                            {totalTeams ? totalTeams.map(getTeamOptions) : null}
                    </select>
                    <label htmlFor="name">Player:</label>
                    <select 
                        name="players" 
                        id="players-options"
                        onChange={handleChangePlayer}>
                            {totalPlayers ? totalPlayers.map(getPlayerOptions) : null}
                    </select>
                    <label htmlFor="img">Image URL (optional):</label>
                    <input id="img" type="text"/>
                </section>
                <button 
                    className={styles.submitPlayer}
                    type="submit"
                    onClick={handleSubmit}>
                        Submit player
                </button>
            </form>
        </section>
    )
}

export default Form
