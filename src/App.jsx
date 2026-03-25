import { useState } from "react"
import StartPage from "./components/StartPage"

function App() {
  const [hasStarted, setHasStarted] = useState(false)

  function handleStartQuiz() {
    setHasStarted(true);
    // qui puoi anche fare il fetch (meglio con loading/error)
  }

  return (
    <>
    {!hasStarted ?
    
    <StartPage onStart={handleStartQuiz} /> 
    :
    ""
    }
    </>
  )
}

export default App
