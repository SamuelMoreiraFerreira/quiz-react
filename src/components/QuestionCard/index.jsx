import { useEffect, useState } from 'react';
import styles from '../QuestionCard/QuestionCard.module.css'

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

export default function QuestionCard({ questionIndex, question, options, callbackAnswer, durationMs = 1.5 * 60 * 1000 }) {
  const [endTime] = useState(() => Date.now() + durationMs);
  const [remainingMs, setRemainingMs] = useState(Math.max(0, endTime - Date.now()));
  const [done, setDone] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      const diff = Math.max(0, endTime - Date.now());
      setRemainingMs(diff);

      if (diff <= 0) {
        if (!done) {
          setDone(true);
          callbackAnswer(questionIndex, -1, 0, 0);
        }
        clearInterval(id);
      }
    }, 100);

    return () => clearInterval(id);
  }, [endTime, callbackAnswer, questionIndex, done]);

  function handleClick(optionIndex) {
    if (done) return;
    setDone(true);
    const points = Math.round((remainingMs / durationMs) * 100); 
    callbackAnswer(questionIndex, optionIndex, remainingMs, points);
  }

  const minutes = String(Math.floor(remainingMs / 60000)).padStart(2, '0');
  const seconds = String(Math.floor((remainingMs % 60000) / 1000)).padStart(2, '0');
  const centis = String(Math.floor((remainingMs % 1000) / 10)).padStart(2, '0');

  return (
    <article className={styles.card}>
      <header className={styles.cardHeader}>
        <span className="material-symbols-outlined">timer</span>
        <label className={styles.timerLabel}>{minutes}:{seconds}:{centis}</label>
      </header>

      <h2 className={styles.cardQuestion}>{question}</h2>

      <ul className={styles.cardOptions}>
        {options.map((option, index) => (
          <li className={styles.cardOption} key={index}>
            <button className={styles.optBtn} onClick={() => handleClick(index)} disabled={done}>
              <span className={styles.optLetter}>{alphabet[index]}</span>
              <span className={styles.optText}>{option}</span>
            </button>
          </li>
        ))}
      </ul>
    </article>
  );
}
