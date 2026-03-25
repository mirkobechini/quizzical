import QuestionCard from "./QuestionCard"
import { nanoid } from "nanoid"

export default function QuizPage({ questions }) {
    return (
        <form className="quiz" method="POST">
            {questions.map((question =>
                <QuestionCard key={nanoid()} question={question} />
            ))}
            <button>Check answers</button>
        </form>
    )
}