import React, { useContext } from "react";
import { ModalContext } from "../../context/ModalContext";
import styles from "./_Modal.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const Modal = (props) => {
    const [state, setState] = useContext(ModalContext);
    const { player } = state;

    if (state.modal) {
        console.log(player);
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
                    <table className={styles.ict_total}>
                        <tbody>
                            <tr>
                                <td>ICT Score: {player.ict_index}</td>
                                <td>ICT Rank: {player.ict_index_rank}</td>
                            </tr>
                        </tbody>
                    </table>
                    <table className={styles.ict}>
                        <thead>
                            <tr>
                                <td></td>
                                <td>Influence</td>
                                <td>Creativity</td>
                                <td>Threat</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Score</td>
                                <td>{player.influence}</td>
                                <td>{player.creativity}</td>
                                <td>{player.threat}</td>
                            </tr>
                            <tr>
                                <td>Rank</td>
                                <td>{player.influence_rank}</td>
                                <td>{player.creativity_rank}</td>
                                <td>{player.threat_rank}</td>
                            </tr>
                        </tbody>
                    </table>
                </article>
            </section>
        )
    }
}

export default Modal;