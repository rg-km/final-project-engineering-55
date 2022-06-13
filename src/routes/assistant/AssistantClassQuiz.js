import React from 'react'
import { useState } from "react";
import { Card, Container, Row, Col, Button, Form, Modal } from "react-bootstrap";

const AddQuiz = (props) => {
  const { judul, deskripsi, tanggal } = props;
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
          <h5>{judul}</h5>
          <div>
            <p>{deskripsi} </p>
          </div>
          <div>
            <strong>Tenggat</strong>: {tanggal}
          </div>
        </Col>
        <Col className="d-inline p-1 m-1">
          <Button variant="primary">Edit</Button>
        </Col>
      </Row>
    </Card>
  );
};

const AssistantClassQuiz = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [kuis, setKuis] = useState([
    {
      judul: "Kuis Javascipt 1",
      deskripsi: "Clone tugas di github.",
      tenggat: "25/05/2022",
    },
    {
      judul: "Kuis React js 2",
      deskripsi: "Nilai sebagai pengganti UTS.",
      tenggat: "25/06/2022",
    },
    {
      judul: "Kuis Chakra UI 3",
      deskripsi: "Lengkapi styling.",
      tenggat: "25/07/2022",
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
                Kuis
              </h5>
              <Button
                className="d-inline p-2 m-1"
                variant="primary"
                onClick={handleShow}
              >
                + Tambah Kuis
              </Button>

              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Input Kuis</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form>
                    <Form.Group className="mb-3" controlId="ControlJudul">
                      <Form.Label>Judul</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Masukkan Judul Kuis"
                        autoFocus
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="ControlDeskripsi">
                      <Form.Label>Masukkan Deskripsi Kuis</Form.Label>
                      <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="ControlDeskripsi">
                      <Form.Label>Tenggat Waktu Pengumpulan</Form.Label>
                      <Form.Control
                        type="date"
                        name="tanggal"
                        placeholder="Masukkan Tanggal"
                      />
                    </Form.Group>
                  </Form>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Keluar
                  </Button>
                  <Button variant="primary" onClick={handleClose}>
                    Simpan
                  </Button>
                </Modal.Footer>
              </Modal>
            </Card.Header>

            <Card.Body>
              {kuis.map((kuis, key) => (
                <AddQuiz
                  id={key}
                  judul={kuis.judul}
                  deskripsi={kuis.deskripsi}
                  tanggal={kuis.tenggat}
                />
              ))}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default AssistantClassQuiz