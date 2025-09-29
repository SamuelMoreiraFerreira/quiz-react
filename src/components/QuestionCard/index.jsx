import { useEffect, useState } from 'react';
import styles from './card.module.css';

const optionsMark = ['A', 'B', 'C', 'D', 'E'];

export default function QuestionCard ({ question, options, callbackAnswer })
{

    //#region Timer

    const startedTimer = Date.now();
    const [sla, setTimer] = useState(Date.now());

    useEffect (

        function ()
        {
            const timer = setInterval(() => setTimer(t => Date.now()), 1000);
            return () => clearInterval(timer);
        }

    )

    //#endregion

    return (

        <article className={styles.card}>

            <header className={styles.cardHeader}>
                <label>{Date(sla)}</label>
            </header>

            <h2 className={styles.cardQuestion}>{question}</h2>

            <form>
                {
                    options.map((option, index) => {

                        return (

                            <div>
                                <button 
                                    onClick={() => {
                                        callbackAnswer(index)
                                    }}
                                >
                                    <label>{optionsMark[index]}</label>
                                    <label>{option}</label>
                                </button>
                            </div>

                        );

                    })
                }

                <button type='submit'>Próximo</button>

            </form>

        </article>

    )

}