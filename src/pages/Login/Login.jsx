import React, { useContext } from 'react';
import { UserContext } from "../../context/UserContext"
import styles from "./_Login.module.scss";

const Login = () => {
    const { signInGoogle } = useContext(UserContext);

    const handleLogin = () => {
        signInGoogle()
    }

    return (
        <main>
            <h1>Golazio</h1>
            <div className={styles.login__buttons}>
                <button className={styles.login__login} onClick={handleLogin}>Log in</button>
                <button className={styles.login__signup}>Sign up</button>
            </div>
        </main>
    )
}

export default Login
