import { Col, Row, Card, ListGroup, Button } from "react-bootstrap";
import { MdOutlineQuiz } from "react-icons/md";
import { Link } from 'react-router-dom';
import "./StudentClassQuiz.css";

const QuizListItems = ({ kuisItem }) => {
  return (
      <Card className="student-class-quiz-items shadow-sm">
      <ListGroup variant="flush">
        <ListGroup.Item>
          <Row>
            <Col xs="1">
              <MdOutlineQuiz size={40} className="mx-2" />
            </Col>
            <Col xs={8} style={{ paddingTop: "10px" }}>
              <h6>{kuisItem.judul}</h6>
            </Col>
            <Col>
              <Link to="/student/main/classes/quiz/id" style={{textDecoration: 'none'}}>
              <Button
                variant="outline-dark"
                style={{ float: "right" }}
              >Kerjakan Kuis
              </Button>
              </Link>
            </Col>
          </Row>
        </ListGroup.Item>
        <ListGroup.Item>
          <Row>
            <Col xs={1}></Col>
            <Col>
              <h6
                style={{
                  fontSize: "15px",
                  fontWeight: "normal",
                }}
              >
                {kuisItem.deskripsi}
              </h6>
            </Col>
          </Row>
          <Row>
            <Col xs={1}></Col>
            <Col>
              <p style={{ marginBottom: "2px" }}>
                Tenggat waktu: <strong>{kuisItem.tenggat}</strong>
              </p>
            </Col>
          </Row>
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
};

export default QuizListItems;
