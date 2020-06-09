import React, { useState, useContext } from "react";
import { Row, Form, InputGroup, FormControl, Button } from "react-bootstrap";
import AppContext from "../context/app-context";
import { saveQuestion } from "../api/api";

const QuizzForm = () => {
  const { dispatchQuestion } = useContext(AppContext);
  // console.log(questions, dispatchQuestion);
  const [question, setQuestion] = useState({ text: "" });
  const [err, setErr] = useState("");
  const submit = (e) => {
    e.preventDefault();
    saveQuestion(question).then((err) => {
      if (err) {
        setErr(err);
      } else {
        // console.log(question);
        dispatchQuestion({
          type: "ADD_QUESTION",
          ...question,
        });

        setQuestion({});
      }
    });

    // console.log(questions);
  };
  return (
    <Row>
      <Form className="mx-auto mt-1" onSubmit={submit}>
        <InputGroup>
          <FormControl
            className="text-center"
            type="text"
            placeholder="Add your question here"
            value={question.text || ""}
            onChange={(e) => {
              setQuestion({ ...question, text: e.target.value });
            }}
          />
        </InputGroup>
        <Button variant="outline-primary mt-3" type="submit">
          Submit
        </Button>
        {err && <div className="text-danger">{err}</div>}
      </Form>
    </Row>
  );
};

export default QuizzForm;
