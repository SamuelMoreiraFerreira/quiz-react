import styles from './scoreboard.module.css';

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

export default function ScoreBoard({ answers }) {
    // soma só pontos das questões corretas (se quiser somar todos, remova a checagem)
    const totalPoints = answers.reduce((s, a) => {
        const isCorrect = a.answer === a.correctIndex;
        return s + (isCorrect ? (a.points || 0) : 0);
    }, 0);

    const correctCount = answers.reduce((s, a) => s + (a.answer === a.correctIndex ? 1 : 0), 0);

    const bestTime = answers.length
        ? Math.min(...answers.map(a => (a.timer ?? Infinity)))
        : 0;

    return (
        <section className={styles.scoreboard}>
            <h2>Resultado</h2>

            <div className={styles.summary}>
                <div>Questões respondidas: <strong>{answers.length}</strong></div>
                <div>Corretas: <strong>{correctCount}</strong></div>
                <div>Pontuação: <strong>{totalPoints}</strong></div>
                <div>Menor tempo (ms): <strong>{bestTime === Infinity ? '—' : bestTime}</strong></div>
            </div>

            <ol className={styles.list}>
                {answers.map((a, i) => {
                    const isCorrect = a.answer === a.correctIndex;
                    const answerLabel = a.answer === -1 ? '— (sem resposta)' : `${alphabet[a.answer]} — ${a.selectedText}`;
                    const correctLabel = `${alphabet[a.correctIndex]} — ${a.correctAnswer}`;
                    return (
                        <li key={i} className={styles.item} data-correct={isCorrect}>
                            <div className={styles.qtitle}>Q{i + 1}: {a.question}</div>
                            <div className={styles.row}>
                                <span>Resposta: <strong>{answerLabel}</strong></span>
                                <span>Correta: <strong>{correctLabel}</strong></span>
                                <span>Tempo restante (ms): <strong>{a.timer}</strong></span>
                                <span>Pts: <strong>{isCorrect ? (a.points ?? 0) : 0}</strong></span>
                            </div>
                        </li>
                    );
                })}
            </ol>
        </section>
    );
}
