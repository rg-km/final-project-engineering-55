import React from 'react'
import { useState } from "react";
import { Card, Container, Row, Col, Button, Form, Modal } from "react-bootstrap";

const AddMember = (props) => {
  const { nama, nim } = props;
  return (
    <Card
      className="px-3 py-2 "
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "10px",
        marginRight: "3px",
        marginLeft: "3px",
      }}
    >
      <Row className="justify-content-center">
        <Col xl={13} md={10} className="d-inline p-1 m-1">
          <h5>{nama}</h5>
          <div>
            <strong>NIM</strong>: {nim}
          </div>
        </Col>
      </Row>
    </Card>
  );
};

const StudentClassMembers = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [member, setMember] = useState([
    {
      nama: "Anton",
      nim: "D1234",
    },
    {
      nama: "Budi",
      nim: "A54628",
    },
    {
      nama: "Joko",
      nim: "J723527",
    },
    {
      nama: "Rudi",
      nim: "R823527",
    },
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
                Anggota
              </h5>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Cari Anggota"
                  className="me-2"
                  aria-label="Search"
                />
              </Form>
            </Card.Header>
            <Card.Body>
              {member.map((member, key) => (
                <AddMember
                  id={key}
                  nama={member.nama}
                  nim={member.nim}
                />
              ))}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default StudentClassMembers
