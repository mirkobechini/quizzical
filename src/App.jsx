import { useEffect, useState } from "react"
import axios from "axios"
import StartPage from "./components/StartPage"
import QuizPage from "./components/QuizPage"

function App() {
  const [hasStarted, setHasStarted] = useState(false)
  const [questions, setQuestions] = useState([])


  useEffect(() => {
    hasStarted ?
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
      :
      ""
  }, [hasStarted])


  function handleStartQuiz() {
    setHasStarted(true);
    // qui puoi anche fare il fetch (meglio con loading/error)
  }

  return (
    <main>
      {!hasStarted ?

        <StartPage onStart={handleStartQuiz} />
        :
        <>
          {console.log(questions)}
          <QuizPage questions={questions} />
        </>
      }
    </main>
  )
}

export default App
