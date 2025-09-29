import Game from './components/Game';
import Header from './components/Header';
import styles from './App.module.css';


export default function App() {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <Game />
      </main>
    </>
  );
}