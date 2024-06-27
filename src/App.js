import { act, useEffect, useReducer } from "react"
import Header from "./Header"
import Main from "./Main"
import Loader from "./Loader"
import Error from "./Error"
import StarScreen from "./StarScreen"
const initState = {
  questions: [],
  // loading, error, ready, active, finished
  status: "loading",
}

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      }
    case "dataFailed":
      return {
        ...state,
        status: "error",
      }
    default:
      throw new Error("Action Unknown")
  }
}
export default function App() {
  const [{ questions, status }, dispatch] = useReducer(reducer, initState)
  useEffect(() => {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((err) => dispatch({ type: "dataFailed" }))
  }, [])
  const numQuestions = questions.length
  return (
    <div className="app">
      <Header />
      <Main className="main">
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && <StarScreen numQuestions={numQuestions} />}
      </Main>
    </div>
  )
}
