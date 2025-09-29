import { useEffect, useState } from 'react';
import styles from './card.module.css';

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

export default function QuestionCard ({ question, options, callbackAnswer })
{

    //#region Timer

    const maxTime = 0.25 * 60 * 1000;
    const [endTime, _] = useState(Date.now() + maxTime);

    const [timer, setTimer] = useState(Date.now());
    const remainingTime = new Date(endTime - timer);

    useEffect (

        function ()
        {
            const intervalTimer = setInterval(
                
                function ()
                {
                    setTimer(Date.now());

                    if (timer > endTime)
                    {
                        callbackAnswer(0);
                    }
                }, 
                
                100
            
            );

            return () => clearInterval(intervalTimer);
        },

        [endTime]

    );

    //#endregion

    return (

        <article className={styles.card}>

            <header className={styles.cardHeader}>

                <span class="material-symbols-outlined">
                    timer
                </span>

                <label>
                    {remainingTime.getMinutes().toString().padStart(2, '0')}:
                    {remainingTime.getSeconds().toString().padStart(2, '0')}:
                    {remainingTime.getMilliseconds().toString().padStart(2, '0')}
                </label>

            </header>

            <h2 className={styles.cardQuestion}>{question}</h2>

            <ul className={styles.cardOptions}>
            {
                options.map((option, index) => {

                    return (

                        <li className={styles.cardOption}>
                            <button 
                                onClick={() => {
                                    callbackAnswer(index)
                                }}
                            >
                                <label>{alphabet[index]}</label>
                                <label>{option}</label>
                            </button>
                        </li>

                    );

                })
            }
            </ul>

        </article>

    )

}