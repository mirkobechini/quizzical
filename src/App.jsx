import { useState } from "react"
import StartPage from "./components/StartPage"
import QuizPage from "./components/QuizPage"

function App() {
  const [hasStarted, setHasStarted] = useState(false)
  const [loading, setLoading] = useState(false)


  function handleStartQuiz() {
    setHasStarted(true);
  }

  return (
    <main>
      {!hasStarted ?

        <StartPage onStart={handleStartQuiz} />
        :
        <>
          <QuizPage loading={loading} setLoading={setLoading} />
        </>
      }
    </main>
  )
}

export default App
