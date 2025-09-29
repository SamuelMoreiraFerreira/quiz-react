import { useState } from 'react';
import questions from '../../data/questions';
import QuestionCard from '../QuestionCard';
import ScoreBoard from '../ScoreBoard';

export default function Game ()
{

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const question = questions[currentQuestion];

    const [answers, setAnswer] = useState([]);

    function handleAnswer (question, answer, timer)
    {

        setAnswer (

            [
                ...answers,

                {
                    question,
                    timer,
                    answer
                }
            ]

        );

        setCurrentQuestion(currentQuestion + 1);

    }

    return (

        <>
            {
                currentQuestion - 1 > questions.legnth 

                ?

                //#region ScoreBoard

                <ScoreBoard />

                //#endregion

                :

                //#region Perguntas

                <>
                    <header>
                        <label>oi</label>
                    </header>

                    <QuestionCard
                        question={question.text}
                        options={question.options}
                        callbackAnswer={handleAnswer}
                    />
                </>

                //#endregion
            }
        </>

    );

}