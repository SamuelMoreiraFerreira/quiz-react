import Game from './components/Game';
import styles from './App.module.css';

export default function App ()
{
    
    return (

        <>
            <header className={styles.pageHeader}>
                <h1>Quiz de Breaking Bad</h1>
            </header>

            <Game/>
        </>

    )

}