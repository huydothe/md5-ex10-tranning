import Link from 'next/link';
import styles from '../styles/layout.module.css';

export default function Layout({ children }) {
    return (
        <>
            <ul>
                <li>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        <a>About Us</a>
                    </Link>
                </li>
                <li>
                    <Link href="/blog">
                        <a>Blog</a>
                    </Link>
                </li>
                <li>
                    <Link href="/login">
                        <a>Login</a>
                    </Link>
                </li>
            </ul>
            <div className={styles.container}>{children}</div>
        </>
    )
}