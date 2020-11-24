import React, { useState } from "react";
import styles from "./_Watchlist.module.scss";
import { removePlayer } from "../../../services/MongoDBService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import Modal from "../../../components/Modal";

const Watchlist = (props) => {
    const { setLoading, updateWatchlist, user, loading, watchlist } = props;
    const [isModalShowing, setIsModalShowing] = useState(false);
    const [modalContent, setModalContent] = useState(null);

    const handlePlayerRemove = async (userID, playerID) => {
        setLoading(true);
        removePlayer(userID, playerID)
            .then(res => updateWatchlist())
    }

    const getTableJSX = (player) => {
        return (
            <tr key={player.id}>
                <td>{player.first_name} {player.second_name}</td>
                <td>{player.position}</td>
                <td>{player.now_cost/10}m</td>
                <td>{player.total_points}</td>
                <td>{player.points_per_game}</td>
                <td>{player.goals_scored}</td>
                <td>{player.assists}</td>
                <td className={styles.buttonContainer}>
                    <FontAwesomeIcon 
                        className={styles.fa} 
                        icon={faUser} 
                    />
                    <FontAwesomeIcon 
                        onClick={e => handlePlayerRemove(user, player.id)}
                        className={`${styles.fa} ${styles.remove}`} 
                        icon={faTimesCircle} 
                    />
                </td>
            </tr>
        )
    }

    return (
        loading ? <h2>Loading...</h2> :
        watchlist && watchlist.length ?
        <section className={styles.tableContainer}>
            <table className={styles.watchlistTable}>
                <thead>
                    <tr>
                        <th>Player</th>
                        <th>Position</th>
                        <th>Price</th>
                        <th>Points</th>
                        <th>PPG</th>
                        <th>Goals</th>
                        <th>Assists</th>
                        <th></th>
                        {/* th* */}
                    </tr>
                </thead>
                <tbody>
                    {watchlist.length ? watchlist.map(getTableJSX) : null}
                </tbody>
            </table>

        </section> :
        <h2>Add some players to your watchlist above</h2>
    )
}

export default Watchlist
