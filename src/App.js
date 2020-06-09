import React, { useReducer, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import QuizzForm from "./components/QuizzForm";
import AppContext from "./context/app-context";
import questionReducer from "./reducers/questions";
import QuestionsList from "./components/QuestionsList";
import { loadQuestions } from "./api/api";
import "./App.css";
import "../node_modules/bootstrap-material-design/dist/css/bootstrap-material-design.min.css";

function App() {
  const [questions, dispatchQuestion] = useReducer(questionReducer);

  useEffect(() => {
    loadQuestions().then(([questions, err]) => {
      dispatchQuestion({ type: "LOAD_QUESTIONS", questions });
      console.log(questions);
      console.log(err);
    });
  }, []);

  return (
    <AppContext.Provider value={{ questions, dispatchQuestion }}>
      <div className="App">
        <Container>
          <Row>
            <h1 className="col-12 mt-3">Magic Quizz</h1>
          </Row>
          <QuizzForm />
          <QuestionsList />
        </Container>
      </div>
    </AppContext.Provider>
  );
}

export default App;
