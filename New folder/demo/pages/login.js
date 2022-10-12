import styles from '../styles/login.module.css';
import { useRouter } from 'next/router';

export default function login() {
    const router = useRouter();
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.formContent}>
                    <h2>Login</h2>
                    <form>
                        <input className={styles.input} type="text" id="login" name="login" placeholder='login'></input>
                        <input className={styles.input} type="text" id="password" name="password" placeholder='password'></input>
                        <button className={styles.button} type="button" onClick={() => router.push('/')} >Login</button>
                    </form>
                </div>
            </div>
        </>
    )
}