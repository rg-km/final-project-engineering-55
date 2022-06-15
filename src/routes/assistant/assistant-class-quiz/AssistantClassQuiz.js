import React from "react";
import { useState } from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";

import QuizFormModal from "./QuizFormModal";
import QuizListItems from "./QuizListItems";

const AssistantClassQuiz = () => {
  const [showFormModal, setShowFormModal] = useState(false);
  const [formModalType, setFormModalType] = useState("Tambah");
  const [kuisId, setKuisId] = useState(0);

  const onClickAdd = () => {
    setFormModalType("Tambah");
    setShowFormModal(true);
  };

  const [kuis, setKuis] = useState([
    // {
    //   id: 1,
    //   judul: "Kuis Javascipt 1",
    //   deskripsi: "Clone tugas di github.",
    //   tenggat: "25/05/2022",
    // },
    // {
    //   id: 2,
    //   judul: "Kuis React js 2",
    //   deskripsi: "Nilai sebagai pengganti UTS.",
    //   tenggat: "25/06/2022",
    // },
    // {
    //   id: 3,
    //   judul: "Kuis Chakra UI 3",
    //   deskripsi: "Lengkapi styling.",
    //   tenggat: "25/07/2022",
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
                Kuis
              </h5>
              <Button
                className="d-inline p-2 m-1"
                variant="primary"
                onClick={onClickAdd}
              >
                + Tambah Kuis
              </Button>
            </Card.Header>

            <Card.Body>
              {kuis.map((kuis, key) => (
                <QuizListItems
                  key={key}
                  id={kuis.id}
                  kuisItem={kuis}
                  setFormModalType={setFormModalType}
                  setShowFormModal={setShowFormModal}
                  setKuisId={setKuisId}
                />
              ))}
              <QuizFormModal
                kuisList={kuis}
                setKuisList={setKuis}
                formModalType={formModalType}
                showFormModal={showFormModal}
                setShowFormModal={setShowFormModal}
                kuisId={kuisId}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AssistantClassQuiz;
