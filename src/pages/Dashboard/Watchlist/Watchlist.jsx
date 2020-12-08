import React, { useState, useContext } from "react";
import styles from "./_Watchlist.module.scss";
import { ModalContext } from "../../../context/ModalContext";
import Modal from "../../../components/Modal";

const Watchlist = (props) => {
    const { totalTeams, setLoading, updateWatchlist, user, loading, watchlist } = props;
    const [modalState, setModalState] = useContext(ModalContext);

    const handleModal = (player) => {
        setModalState({ ...modalState, modal: true, player, user })
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
            {modalState.modal ? <Modal totalTeams={totalTeams} setLoading={setLoading} updateWatchlist={updateWatchlist} /> : null}
        </section> :
        <h2>Add some players to your watchlist above</h2>
    )
}

export default Watchlist
