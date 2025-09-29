import { useState } from 'react';
import questions from '../../data/questions';
import QuestionCard from '../QuestionCard';

export default function Game ()
{

    const [currentQuestion, setCurrentQuestion] = useState(1);
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
            <header>
                <label></label>
            </header>

            <QuestionCard
                question={question.text}
                options={question.options}
                callbackAnswer={handleAnswer}
            />
        </>

    );

}