import { Button, Col, Row, Card, ListGroup } from "react-bootstrap";
import { BiEditAlt } from "react-icons/bi";
import { MdOutlineAssignment } from "react-icons/md";
import "./AssistantClassAssignment.css";

const AssignmentListItems = ({
  id,
  tugasItem,
  setFormModalType,
  setShowFormModal,
  setTugasId,
}) => {
  const onClickEdit = () => {
    setFormModalType("Edit");
    setShowFormModal(true);
    setTugasId(id);
  };

  return (
    <Card className="assistant-class-assignment-items">
      <ListGroup variant="flush">
        <ListGroup.Item>
          <Row>
            <Col xs="1">
              <MdOutlineAssignment size={40} className="mx-2" />
            </Col>

            <Col xs={8} style={{ paddingTop: "10px" }}>
              <h6>{tugasItem.judul}</h6>
            </Col>
            <Col xs={3}>
              <Button
                className="edit-class-button"
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
