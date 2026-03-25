import { useEffect, useState } from "react";
import { nanoid } from "nanoid"

export default function QuestionCard({ question, questionIndex, areChecked }) {
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
                {answers.map((answer, index) =>
                    <div key={nanoid()} className="single-option">
                        <input type="radio" name={questionIndex} id={`${questionIndex} - ${index}`} required={index === 0} value={answer}/>
                        <label htmlFor={`${questionIndex} - ${index}`}>{answer}</label>
                    </div>
                )}
            </div>
        </section>
    )
}