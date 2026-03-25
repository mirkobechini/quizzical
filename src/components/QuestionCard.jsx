import { useEffect, useState } from "react";

export default function QuestionCard({ question }) {
    const [answers, setAnswers] = useState([])

    useEffect(()=>{
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
            <div className="answers">
                {answers.map(answer => 
                <button key={answer}>{answer}</button>
                )}
            </div>
        </section>
    )
}