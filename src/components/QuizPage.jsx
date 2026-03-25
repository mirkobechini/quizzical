import { useState } from "react";
import QuestionCard from "./QuestionCard"
import { nanoid } from "nanoid"

export default function QuizPage({ questions }) {

    const [areChecked, setAreChecked] = useState(false);
    const [correctAnswerCount, setCorrectAnswerCount] = useState(0)

    function checkAnswers(e) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const answers = Array.from(formData.values());
        console.log(answers);
        let count = 0;
        answers.forEach((answer, index) => {
            (answer == questions[index].correct_answer)
                count++;
        })
        setCorrectAnswerCount(count);
        setAreChecked(true);
    }

    return (
        <form className="quiz" method="POST" onSubmit={checkAnswers}>
            {questions.map(((question, index) =>
                <QuestionCard key={nanoid()} question={question} questionIndex={index} areChecked={areChecked} />
            ))}
            <button>Check answers</button>
        </form>
    )
}