import React from 'react'
import styles from "./_Card.module.scss";

const Card = (props) => {
    const { response, totalPlayers } = props;
    return (
        <article>
            <h1 id="current-player">{response.name}</h1>
            <img src={response.img} alt={response.name} />
            <ul>
                <li>Position: {response.position}</li>
                <li>Goals: {response.goals}</li>
                <li>Assists: {response.assists}</li>
            </ul>
        </article>
    )
}

export default Card
