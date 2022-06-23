import { Button, Col, Row, Card, ListGroup, Form } from "react-bootstrap";
import { AiOutlineDelete } from "react-icons/ai";
import { MdOutlineAssignment } from "react-icons/md";

const QuizList = ({
  id,
  index,
  quizItem,
  quizList,
  setQuiz,
}) => {

  const handleRemoveItem = (id) => {
    setQuiz(quizList.filter(item => item.id !== id));
  };

  return (
    <Card className="assistant-class-assignment-items shadow-sm">
      <ListGroup variant="flush">
        <ListGroup.Item>
          <Row>
            <Col xs="1">
              <MdOutlineAssignment size={40}/>
            </Col>

            <Col xs={8} style={{ paddingTop: "10px" }}>
            <h5
                style={{
                  marginLeft: "10px",
                  marginBottom: "30px",
                }}
            >
                {index+1}. {quizItem.question}
            </h5>
            <div key={id} className="mb-3">
            <Row>
              <Col xs={8}>
                <Form.Check 
                  type="checkbox"
                  id={quizItem.option1}
                  label={quizItem.option1}
                />
              </Col>
              <Col>
                <Form.Check 
                  type="checkbox"
                  id={quizItem.option2}
                  label={quizItem.option2}
                />
              </Col>
            </Row>
            <Row>
              <Col xs={8}>
                <Form.Check 
                  type="checkbox"
                  id={quizItem.option3}
                  label={quizItem.option3}
                />
              </Col>
              <Col>
                <Form.Check 
                  type="checkbox"
                  id={quizItem.option4}
                  label={quizItem.option4}
                />
              </Col>
            </Row>
            </div>
            </Col>
            <Col xs={3}>
                <Button
                  className="assistant-class-quiz-button"
                  variant="outline-dark"
                  onClick={handleRemoveItem.bind(this, id)}
                >
                  <AiOutlineDelete/> Hapus
                </Button>
            </Col>
          </Row>
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
};

export default QuizList;
