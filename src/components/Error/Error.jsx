import React from 'react'
import { Link } from "@reach/router";
import styles from "./_Error.module.scss";

const Error = (props) => {
    const { message } = props;

    return (
        <section className={styles.errorMain}>
            <h3>{message}</h3>
            <Link to="/">
                <button className={styles.home}>Return to home</button>
            </Link>
        </section>
    )
}

export default Error
