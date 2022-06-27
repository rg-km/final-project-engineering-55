import { useState } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import AssignmentListItems from "./AssignmentListItems";
import "./StudentClassAssignment.css";

const StudentClassAssignments = () => {
  const [tugas] = useState([
    {
      id: 1,
      judul: "Tugas Pendahuluan 1",
      deskripsi: "Kerjakan di kertas folio menggunakan bolpen.",
      tenggat: "13/06/2022 23:59",
    },
    {
      id: 2,
      judul: "Tugas Pendahuluan 2",
      deskripsi: "Peraturan: Kerjakan saja yah.",
      tenggat: "15/06/2022 23:59",
    },
    {
      id: 3,
      judul: "Tugas Pendahuluan 3",
      deskripsi:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      tenggat: "24/06/2022 23:59",
    },
  ]);

  return (
    <Container className="student-class-assignment-container">
      <Row className="justify-content-center">
        <Col xs={9} className="student-class-assignment-wrapper">
          <Card className="student-class-assignment-title class-items-header shadow-sm">
            <Row>
              <Col className="classes-items">
                <h3>Tugas Kelas</h3>
                <h5>Front End Web Programming</h5>
              </Col>
            </Row>
          </Card>
          {tugas.map((tugas, key) => (
            <AssignmentListItems key={key} id={tugas.id} tugasItem={tugas} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default StudentClassAssignments;
