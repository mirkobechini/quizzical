import { nanoid } from "nanoid"
import clsx from "clsx";

export default function QuestionCard({ question, questionIndex, areChecked, selectedAnswer }) {

    return (
        <section className="question-card">
            <h2>{question.question}</h2>
            <div className="answers" >
                {question.answers.map((answer, index) => {
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