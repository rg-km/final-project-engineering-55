import React from "react";
import { useState } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import "./StudentClassQuiz.css";

import QuizListItems from "./QuizListItems";

const StudentClassQuiz = () => {
 

  const [kuis] = useState([
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
    <Container className="student-class-quiz-container">
      <Row className="justify-content-center">
        <Col xs={9} className="student-class-quiz-wrapper">
          <Card className="student-class-quiz-title class-items-header shadow-sm">
            <Row>
              <Col className="classes-items">
                <h3>Kuis</h3>
                <h5>Front End Web Programming</h5>
              </Col>
            </Row>
          </Card>
          {kuis.map((kuis, key) => (
            <QuizListItems
              key={key}
              id={kuis.id}
              kuisItem={kuis}
             />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default StudentClassQuiz;
