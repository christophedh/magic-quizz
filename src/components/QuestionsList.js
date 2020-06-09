import React, { useContext } from "react";
import AppContext from "../context/app-context";
import { ListGroup, Row } from "react-bootstrap";

const QuestionsList = () => {
  const { questions } = useContext(AppContext);
  // console.log("qiest", questions);
  return (
    <Row>
      <div className="mx-auto">
        <ListGroup className="">
          {questions &&
            questions.map((question) => (
              <ListGroup.Item
                className="text-center justify-content-center"
                key={question.text}
              >
                {question.text}
              </ListGroup.Item>
            ))}
        </ListGroup>
      </div>
    </Row>
  );
};

export default QuestionsList;
