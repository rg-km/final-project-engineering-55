import { Button, Col, Row, Card, ListGroup } from "react-bootstrap";
import { BiEditAlt } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";
import { MdOutlineAssignment } from "react-icons/md";
import "./AssistantClassAssignment.css";

const AssignmentListItems = ({
  id,
  tugasItem,
  setFormModalType,
  setShowFormModal,
  setTugasId,
  tugasList,
  setTugasList,
}) => {
  const onClickEdit = () => {
    setFormModalType("Edit");
    setShowFormModal(true);
    setTugasId(id);
  };

  const handleRemoveItem = (id) => {
    setTugasList(tugasList.filter(item => item.id !== id));
  };

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
            <Col xs={3}>
              <span className='action-class-button'>
                <Button
                  variant="outline-dark"
                  onClick={onClickEdit}
                >
                <BiEditAlt/> Edit
                </Button>
                &nbsp;
                <Button
                  variant="outline-dark"
                  onClick={handleRemoveItem.bind(this, id)}
                >
                  <AiOutlineDelete/> Hapus
                </Button>
              </span>
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
