import { Col, Row, Card, ListGroup, Button } from "react-bootstrap";
import { MdOutlineAssignment } from "react-icons/md";
import { Link } from "react-router-dom";
import "./StudentClassAssignment.css";

const AssignmentListItems = ({ tugasItem }) => {
  return (
    <Card className="assistant-class-assignment-items shadow-sm">
      <ListGroup variant="flush">
        <ListGroup.Item>
          <Row>
            <Col xs="1">
              <MdOutlineAssignment size={40} className="mx-2" />
            </Col>
            <Col xs={8} style={{ paddingTop: "10px" }}>
              <h6>{tugasItem.judul}</h6>
            </Col>
            <Col>
              <Link to="/student/main/classes/assignments/id" style={{textDecoration: 'none'}}>
              <Button
                variant="outline-dark"
                style={{ float: "right" }}
              >Kerjakan Tugas
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
                {tugasItem.deskripsi}
              </h6>
            </Col>
          </Row>
          <Row>
            <Col xs={1}></Col>
            <Col>
              <p style={{ marginBottom: "2px" }}>
                Tenggat waktu: <strong>{tugasItem.tenggat}</strong>
              </p>
            </Col>
          </Row>
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
};

export default AssignmentListItems;
