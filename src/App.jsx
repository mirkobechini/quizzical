import { useState } from "react"
import StartPage from "./components/StartPage"
import QuizPage from "./components/QuizPage"

function App() {
  const [hasStarted, setHasStarted] = useState(false)


  function handleStartQuiz() {
    setHasStarted(true);
  }

  return (
    <main>
      {!hasStarted ?

        <StartPage onStart={handleStartQuiz} />
        :
        <>
          <QuizPage />
        </>
      }
    </main>
  )
}

export default App
