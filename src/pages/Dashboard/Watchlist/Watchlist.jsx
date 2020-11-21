import React, { useEffect, useState } from "react";
import { getWatchlist } from "../../../services/MongoDBService";

const Watchlist = (props) => {
    const { user } = props;
    const [watchlist, setWatchlist] = useState([]);

    const getTableJSX = (player) => {
        return (
            <tr key={player.id}>
                <td>{player.first_name} {player.second_name}</td>
                <td>{player.position}</td>
            </tr>
        )
    }

    useEffect(() => {
        if (user) {
            getWatchlist(setWatchlist, user);
        }
    }, [user])

    return (
        <table>
            <thead>
                <tr>
                    <th>Player</th>
                    <th>Position</th>
                    {/* th* */}
                </tr>
            </thead>
            <tbody>
                {watchlist && watchlist.length ? watchlist.map(getTableJSX) : null}
            </tbody>
        </table>
    )
}

export default Watchlist
