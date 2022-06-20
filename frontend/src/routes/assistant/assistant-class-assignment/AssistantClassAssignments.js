import { useState } from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import AssignmentFormModal from "./AssignmentFormModal";
import AssignmentListItems from "./AssignmentListItems";
import "./AssistantClassAssignment.css";

const AssistantClassAssignments = () => {
  const [showFormModal, setShowFormModal] = useState(false);
  const [formModalType, setFormModalType] = useState("Tambah");
  const [tugasId, setTugasId] = useState(0);

  const onClickAdd = () => {
    setFormModalType("Tambah");
    setShowFormModal(true);
  };

  const [tugas, setTugas] = useState([
    {
      id: 1,
      judul: "Tugas Pendahuluan 1",
      deskripsi: "Kerjakan di kertas folio menggunakan bolpen.",
      tenggat: "13/06/2022",
    },
    {
      id: 2,
      judul: "Tugas Pendahuluan 2",
      deskripsi: "Peraturan: Kerjakan saja yah.",
      tenggat: "15/06/2022",
    },
    {
      id: 3,
      judul: "Tugas Pendahuluan 3",
      deskripsi:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      tenggat: "24/06/2022",
    },
  ]);

  return (
    <Container className="assistant-class-assignment-container">
      <Row className="justify-content-center">
        <Col xs={9} className="assistant-class-assignment-wrapper">
          <Card className="assistant-class-assignment-title shadow-sm">
            <Row>
              <Col>
                <h3>Tugas Kelas</h3>
                <h5>Front End Web Programming</h5>
              </Col>
              <Col>
                <span>
                  <Button
                    className="assistant-class-assignment-button"
                    variant="outline-dark"
                    onClick={onClickAdd}
                  >
                    + Tambah Tugas
                  </Button>
                </span>
                <AssignmentFormModal
                  tugasList={tugas}
                  setTugasList={setTugas}
                  showFormModal={showFormModal}
                  setShowFormModal={setShowFormModal}
                  formModalType={formModalType}
                  setFormModalType={setFormModalType}
                  tugasId={tugasId}
                />
              </Col>
            </Row>
          </Card>
          {tugas.map((tugas, key) => (
            <AssignmentListItems
              key={key}
              id={tugas.id}
              tugasItem={tugas}
              setFormModalType={setFormModalType}
              setShowFormModal={setShowFormModal}
              setTugasId={setTugasId}
            />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default AssistantClassAssignments;
