import React, { useEffect, useState } from "react";
import { getWatchlist } from "../../../services/MongoDBService";
import styles from "./_Watchlist.module.scss";

const Watchlist = (props) => {
    const { watchlist } = props;

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
            </tr>
        )
    }

    return (
        watchlist ?
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
                        {/* th* */}
                    </tr>
                </thead>
                <tbody>
                    {watchlist.length ? watchlist.map(getTableJSX) : null}
                </tbody>
            </table>
        </section> :
        <h2>Loading...</h2>
    )
}

export default Watchlist
