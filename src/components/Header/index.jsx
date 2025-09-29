import styles from './header.module.css';


export default function Header() {
    return (
        <header className={styles.pageHeader}>
            <h1>Quiz de Breaking Bad</h1>
            <p className={styles.subtitle}>Teste seus conhecimentos — responda rápido e pontue alto!</p>
        </header>
    );
}