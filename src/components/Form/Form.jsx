import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from "../../context/UserContext";
import { addPlayer } from "../../services/MongoDBService";
import "./_Form.module.scss";

const Form = (props) => {
    const { user, totalTeams, totalPlayers } = props;
    const { signOut } = useContext(UserContext);
    const [selectedTeam, setSelectedTeam] = useState("Arsenal (1)");
    const [selectedPlayer, setSelectedPlayer] = useState({});
    const [displayedPlayer, setDisplayedPlayer] = useState("");

    const getTeamOptions = team => {
        let teamData = `${team.name} (${team.id})`
        return <option value={teamData}>{teamData}</option>
    }
    
    const getPlayerOptions = player => {
        let id = selectedTeam.match(/\d+/gm);
        if (player.team === parseInt(id[0])) {
            let playerData = `${player.first_name} ${player.second_name} (${player.id})`
            return ( 
                <option 
                    value={playerData}>
                        {playerData}
                </option>
            )
        } 
    }

    const findPlayer = displayVal => {
        const id = parseInt(displayVal.match(/\d+/gm)[0]);
        return totalPlayers.filter(player => player.id === id)[0]
    }

    const handleChangeTeam = e => {
        setSelectedTeam(e.target.value);
        setTimeout(() => {
            setSelectedPlayer(findPlayer(document.getElementById("players-options").value))
        }, 100);
    }

    const handleChangePlayer = e => {
        setSelectedPlayer(findPlayer(e.target.value));
    }

    const playerPosition = elementType => {
        switch (elementType) {
            case 1:
                return "Goalkeeper";
                break;
            case 2:
                return "Defender";
                break;
            case 3:
                return "Midfielder";
                break;
            case 4:
                return "Forward";
                break;
            default:
                return "Unknown";
                break;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            uid: user.uid,
            position: playerPosition(selectedPlayer.element_type),
            img: document.getElementById("img").value,
            ...selectedPlayer
        }
        addPlayer(data);
    }

    useEffect(() => {
        setDisplayedPlayer(document.getElementById("players-options").value)
    }, [document.getElementById("players-options")]);

    useEffect(() => {
        return displayedPlayer !== "" ? setSelectedPlayer(findPlayer(displayedPlayer)) : null
    }, [displayedPlayer])
    
    return (
        <section>
            <h2>Select a player to follow:</h2>
            <button onClick={signOut}>Sign out</button>
            <form>
                <fieldset>
                    <label htmlFor="team">Team:</label>
                    <select 
                        name="teams" 
                        id="teams-options" 
                        onChange={handleChangeTeam}>
                            {totalTeams ? totalTeams.map(getTeamOptions) : null}
                    </select>
                </fieldset>
                <fieldset>
                    <label htmlFor="name">Player:</label>
                    <select 
                        name="players" 
                        id="players-options"
                        onChange={handleChangePlayer}>
                            {totalPlayers ? totalPlayers.map(getPlayerOptions) : null}
                    </select>
                </fieldset>
                <fieldset>
                    <label htmlFor="img">Image URL (optional):</label>
                    <input id="img" type="text"/>
                </fieldset>
                <button 
                    type="submit"
                    onClick={handleSubmit}>
                        Submit player
                </button>
            </form>
        </section>
    )
}

export default Form
