import React, { useContext, useEffect } from "react";
import styles from "./_Watchlist.module.scss";
import { removePlayer } from "../../../services/MongoDBService";
import { ModalContext } from "../../../context/ModalContext"
import Modal from "../../../components/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const Watchlist = (props) => {
    const { setLoading, updateWatchlist, user, loading, watchlist } = props;
    const [modalState, setModalState] = useContext(ModalContext);

    const handlePlayerRemove = async (userID, playerID) => {
        setLoading(true);
        removePlayer(userID, playerID)
            .then(res => updateWatchlist())
    }

    const handleModal = (player) => {
        setModalState({ ...modalState, modal: true, player, handlePlayerRemove, user })
    }

    const getTableJSX = (player) => {
        return (
            <tr key={player.id}>
                <td className={styles.modalButton} onClick={e => handleModal(player)}>
                    {player.first_name} {player.second_name}
                </td>
                <td>{player.position}</td>
                <td>{player.now_cost/10}m</td>
                <td>{player.total_points}</td>
                <td>{player.points_per_game}</td>
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
                    </tr>
                </thead>
                <tbody>
                    {watchlist.length ? watchlist.map(getTableJSX) : null}
                </tbody>
            </table>
            {modalState.modal ? <Modal handlePlayerRemove={handlePlayerRemove} /> : null}
        </section> :
        <h2>Add some players to your watchlist above</h2>
    )
}

export default Watchlist
