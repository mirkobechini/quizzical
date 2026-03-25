import { nanoid } from "nanoid"
import clsx from "clsx";

export default function QuestionCard({ question, questionIndex, areChecked, selectedAnswer }) {

    return (
        <section className="question-card">
            <fieldset>
                <legend className="question">{question.question}</legend>
                <div className="answers" >
                    {question.answers.map((answer, index) => {
                        const isCorrect = answer === question.correct_answer;
                        const isWrongSelected = selectedAnswer === answer && answer !== question.correct_answer;
                        return (<div key={nanoid()} className={clsx("single-option", {
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
                            />
                            <label htmlFor={`${questionIndex} - ${index}`}>{answer}</label>
                        </div>)
                    })}
                </div>
            </fieldset>
        </section>
    )
}