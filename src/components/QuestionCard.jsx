import { useEffect, useState } from "react";
import { nanoid } from "nanoid"
import clsx from "clsx";

export default function QuestionCard({ question, questionIndex, areChecked, selectedAnswer }) {
    const [answers, setAnswers] = useState([])

    useEffect(() => {
        shuffle()
    }, [])

    function shuffle() {
        const shuffledAnswers = [question.correct_answer, ...question.incorrect_answers]
        let currentIndex = shuffledAnswers.length;

        // While there remain elements to shuffle...
        while (currentIndex != 0) {

            // Pick a remaining element...
            let randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [shuffledAnswers[currentIndex], shuffledAnswers[randomIndex]] = [
                shuffledAnswers[randomIndex], shuffledAnswers[currentIndex]];
        }
        setAnswers(shuffledAnswers);
    }

    return (
        <section className="question-card">
            <h2>{question.question}</h2>
            <div className="answers" >
                {answers.map((answer, index) => {
                    const isCorrect = answer === question.correct_answer;
                    const isWrongSelected = selectedAnswer === answer && answer !== question.correct_answer;
                    return(<div key={nanoid()} className={clsx("single-option", {
                        wrongAnswer: areChecked && isWrongSelected,
                        correctAnswer: areChecked && isCorrect,
                        disabled: areChecked && !isCorrect,
                    })}>
                        <input type="radio"
                            name={questionIndex}
                            id={`${questionIndex} - ${index}`}
                            required={index === 0}
                            value={answer}
                            checked={areChecked ? selectedAnswer === answer : undefined}
                            readOnly={areChecked} />
                        <label htmlFor={`${questionIndex} - ${index}`}>{answer}</label>
                    </div>)
                })}
            </div>
        </section>
    )
}