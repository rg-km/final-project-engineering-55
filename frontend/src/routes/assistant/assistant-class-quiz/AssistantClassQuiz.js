import React from "react";
import { useState } from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import "./AssistantClassQuiz.css";
import { Link } from "react-router-dom";
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
    {
      id: 1,
      judul: "Kuis Javascipt 1",
      deskripsi: "Clone tugas di github.",
      tenggat: "25/05/2022",
    },
    {
      id: 2,
      judul: "Kuis React js 2",
      deskripsi: "Nilai sebagai pengganti UTS.",
      tenggat: "25/06/2022",
    },
    {
      id: 3,
      judul: "Kuis Chakra UI 3",
      deskripsi: "Lengkapi styling.",
      tenggat: "25/07/2022",
    },
  ]);

  return (
    <Container className="assistant-class-quiz-container">
      <Row className="justify-content-center">
        <Col xs={9} className="assistant-class-quiz-wrapper">
          <Card className="assistant-class-quiz-title class-items-header shadow-sm">
            <Row>
              <Col className="classes-items">
                <h3>Kuis</h3>
                <h5>Front End Web Programming</h5>
              </Col>
              <Col>
                <span>
                  <Link
                    to="/assistant/main/classes/quiz/id"
                    style={{ textDecoration: "none" }}
                  >
                    <Button
                      className="assistant-class-quiz-button"
                      variant="danger"
                      onClick={onClickAdd}
                    >
                      + Tambah Kuis
                    </Button>
                  </Link>
                </span>
                <QuizFormModal
                  kuisList={kuis}
                  setKuisList={setKuis}
                  formModalType={formModalType}
                  showFormModal={showFormModal}
                  setShowFormModal={setShowFormModal}
                  kuisId={kuisId}
                />
              </Col>
            </Row>
          </Card>
          {kuis.map((item, key) => (
            <QuizListItems
              key={key}
              id={item.id}
              kuisItem={item}
              kuisList={kuis}
              setKuisList={setKuis}
              setFormModalType={setFormModalType}
              setShowFormModal={setShowFormModal}
              setKuisId={setKuisId}
            />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default AssistantClassQuiz;
