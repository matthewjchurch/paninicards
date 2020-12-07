import React, { useState, useEffect, useContext } from "react";
import { ModalContext } from "../../context/ModalContext";
import styles from "./_Modal.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { removePlayer } from "../../services/MongoDBService";
import { convertTeamID, readFFFixtures } from "../../services/PFLService";

const Modal = (props) => {
    const [state, setState] = useContext(ModalContext);
    const [teamCode, setTeamCode] = useState("");
    const [matchday, setMatchday] = useState(null);
    const { player, user } = state;
    const { totalTeams, setLoading, updateWatchlist } = props;

    const handlePlayerRemove = async (userID, playerID) => {
        setState({ ...state, modal: false, player: {} });
        setLoading(true);
        removePlayer(userID, playerID)
            .then(res => updateWatchlist())
    }

    const convertTeamCode = () => {
        const playerTeam = totalTeams.filter(team => player.team === team.id)[0];
        convertTeamID(playerTeam.short_name)
            .then(res => {
                setMatchday(res.matchday);
                setTeamCode(res.team.id);
        });
    }

    useEffect(() => {
        convertTeamCode()
    }, [])

    useEffect(() => {
        readFFFixtures(teamCode)
    }, [teamCode])

    if (state.modal) {
        return (
            <section className={styles.totalModal}>
                <article className={styles.modal}>
                    <div className={styles.modalHeader}>
                        <h3>{player.first_name} {player.second_name}</h3>
                        <FontAwesomeIcon 
                            onClick={() => setState({ ...state, modal: false, player: {} })}
                            className={`${styles.fa} ${styles.remove}`} 
                            icon={faTimesCircle} 
                        />
                    </div>
                    <table className={styles.ict}>
                        <thead>
                            <tr>
                                <td></td>
                                <td>ICT Score: {player.ict_index}</td>
                                <td>ICT Rank: {player.ict_index_rank}</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Influence</td>
                                <td>{player.influence}</td>
                                <td>{player.influence_rank}</td>
                            </tr>
                            <tr>
                                <td>Creativity</td>
                                <td>{player.creativity}</td>
                                <td>{player.creativity_rank}</td>
                            </tr>
                            <tr>
                                <td>Threat</td>
                                <td>{player.threat}</td>
                                <td>{player.threat_rank}</td>
                            </tr>
                        </tbody>
                    </table>
                    <button className={styles.remove} onClick={() => handlePlayerRemove(user.uid, player.id)}>Remove from watchlist</button>
                </article>
            </section>
        )
    }
}

export default Modal;