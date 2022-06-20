import { Button, Col, Row, Card, ListGroup } from "react-bootstrap";
import { BiEditAlt } from "react-icons/bi";
import { MdOutlineQuiz } from "react-icons/md";
import "./AssistantClassQuiz.css";

const QuizListItems = ({
  id,
  kuisItem,
  setFormModalType,
  setShowFormModal,
  setKuisId,
}) => {
  const onClickEdit = () => {
    setFormModalType("Edit");
    setShowFormModal(true);
    setKuisId(id);
  };

  return (
    <Card className="assistant-class-quiz-items">
      <ListGroup variant="flush">
        <ListGroup.Item>
          <Row>
            <Col xs="1">
              <MdOutlineQuiz size={40} className="mx-2" />
            </Col>

            <Col xs={8} style={{ paddingTop: "10px" }}>
              <h6>{kuisItem.judul}</h6>
            </Col>
            <Col xs={3}>
              <Button
                className="assistant-class-quiz-button"
                variant="outline-dark"
                onClick={onClickEdit}
              >
                <BiEditAlt /> Edit
              </Button>
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
