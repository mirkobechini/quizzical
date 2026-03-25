import { useState, useEffect } from "react";
import axios from "axios"
import QuestionCard from "./QuestionCard"
import { nanoid } from "nanoid"

export default function QuizPage() {

    const [questions, setQuestions] = useState([])
    const [quizVersion, setQuizVersion] = useState(0)

    const [areChecked, setAreChecked] = useState(false);

    const [answers, setAnswer] = useState([]);
    const [correctQuestion, setCorrectQuestions] = useState([]) //index of question with right answer


    useEffect(() => {
        setAreChecked(false)
        setAnswer([])
        setCorrectQuestions([])
        axios.get("https://opentdb.com/api.php?amount=5&type=multiple")
            .then(res => setQuestions(
                res.data.results.map(question => {
                    return {
                        question: question.question,
                        correct_answer: question.correct_answer,
                        incorrect_answers: question.incorrect_answers
                    }
                })
            ))
    }, [quizVersion])

    function handleRestart() {
        setQuizVersion(prevVersion => prevVersion + 1)
    }

    function checkAnswers(e) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const currentAnswers = Array.from(formData.values());
        setAnswer(currentAnswers) // ["Paris", "8", "Blue"] index == question index
        let count = 0;
        const createCorrectQuestions = []
        currentAnswers.forEach((answer, index) => {
            if (answer == questions[index].correct_answer) {
                createCorrectQuestions.push(index)
                count++;
            }
        })
        setCorrectQuestions(createCorrectQuestions)
        setAreChecked(true);
    }

    return (
        <form className="quiz" method="POST" onSubmit={areChecked ? undefined : checkAnswers}>
            {questions.map(((question, index) =>
                <QuestionCard key={nanoid()} question={question} questionIndex={index} areChecked={areChecked} isCorrect={correctQuestion.includes(index)} selectedAnswer={answers[index]} />
            ))}
            {
                areChecked && <p>You scored {correctQuestion.length}/5 answers</p>
            }
            <button
                type={areChecked ? "button" : "submit"}
                onClick={areChecked ? handleRestart : undefined}
            >{
                    (areChecked) ?
                        "Play again"
                        :
                        "Check answers"
                }</button>
        </form>
    )
}