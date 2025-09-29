import { useState } from 'react';
import questions from '../../data/questions';
import QuestionCard from '../QuestionCard';
import ScoreBoard from '../ScoreBoard';
import styles from './game.module.css';

export default function Game() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);

  function handleAnswer(questionIndex, answerIndex, timerMs, points) {
    const q = questions[questionIndex];
    const correctIndex = q.options.indexOf(q.answer); 
    const selectedText = answerIndex === -1 ? null : q.options[answerIndex];

    setAnswers(prev => [
      ...prev,
      {
        question: q.question,          
        answer: answerIndex,           
        selectedText,                  
        timer: timerMs,
        points,
        correctAnswer: q.answer,       
        correctIndex                   
      }
    ]);

    setCurrentQuestion(prev => prev + 1);
  }

  function handleReset() {
    setCurrentQuestion(0);
    setAnswers([]);
  }

  return (
    <section>
      {currentQuestion > questions.length - 1 ? (
        <>
          <ScoreBoard answers={answers} />
          <div className={styles.controls}>
            <button className={styles.retryBtn} onClick={handleReset}>Tentar Novamente</button>
          </div>
        </>
      ) : (
        <>
          <header className={styles.progressHeader}>
            <label>{currentQuestion + 1}/{questions.length}</label>
          </header>

          <QuestionCard
            key={currentQuestion}
            questionIndex={currentQuestion}
            question={questions[currentQuestion].question}   
            options={questions[currentQuestion].options}
            callbackAnswer={handleAnswer}
            durationMs={0.25 * 60 * 1000} 
          />
        </>
      )}
    </section>
  );
}
