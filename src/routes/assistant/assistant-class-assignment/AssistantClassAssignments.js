import { useState } from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";

import AssignmentFormModal from "./AssignmentFormModal";
import AssignmentListItems from "./AssignmentListItems";

const AssistantClassAssignments = () => {
  const [showFormModal, setShowFormModal] = useState(false);
  const [formModalType, setFormModalType] = useState("Tambah");
  const [tugasId, setTugasId] = useState(0);

  const onClickAdd = () => {
    setFormModalType("Tambah");
    setShowFormModal(true);
  };

  const [tugas, setTugas] = useState([
    // {
    //   id: 1,
    //   judul: "Tugas Pendahuluan 1",
    //   deskripsi: "Kerjakan di kertas folio menggunakan bolpen.",
    //   tenggat: "13/06/2022",
    // },
    // {
    //   id: 2,
    //   judul: "Tugas Pendahuluan 2",
    //   deskripsi: "Peraturan: Kerjakan saja yah.",
    //   tenggat: "15/06/2022",
    // },
    // {
    //   id: 3,
    //   judul: "Tugas Pendahuluan 3",
    //   deskripsi:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    //   tenggat: "24/06/2022",
    // },
  ]);

  return (
    <Container>
      <Row className="justify-content-center">
        <Card
          className="mt-4 mb-4"
          style={{
            width: "40rem",
            borderRadius: "10px",
            border: "none",
            backgroundColor: "#f5f5f5",
            alignItems: "center",
          }}
        >
          <h5 style={{ margin: "10px" }}>Frontend</h5>
        </Card>
      </Row>
      <Row className="justify-content-center">
        <Col xl={13} md={6}>
          <Card className="mt-4" style={{ marginBottom: "10px" }}>
            <Card.Header
              style={{
                display: "flex",
                justifyContent: "space-between",
                backgroundColor: "#797EF6",
              }}
            >
              <h5
                className="d-inline p-2 m-1"
                style={{
                  color: "#ffffff",
                }}
              >
                Tugas
              </h5>
              <Button
                className="d-inline p-2 m-1"
                variant="primary"
                onClick={onClickAdd}
              >
                + Tambah Tugas
              </Button>
            </Card.Header>

            <Card.Body>
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
              <AssignmentFormModal
                tugasList={tugas}
                setTugasList={setTugas}
                showFormModal={showFormModal}
                setShowFormModal={setShowFormModal}
                formModalType={formModalType}
                setFormModalType={setFormModalType}
                tugasId={tugasId}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AssistantClassAssignments;
