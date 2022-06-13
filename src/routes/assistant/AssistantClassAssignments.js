import { useState } from "react";
import {
  Card,
  Container,
  Row,
  Col,
  Button,
  Form,
  Modal,
} from "react-bootstrap";

//For Example -- Delete Later
const TugasList = (props) => {
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
            <strong>Tenggat waktu</strong>: {tanggal}
          </div>
        </Col>
        <Col className="d-inline p-1 m-1">
          <Button variant="primary">Edit</Button>
        </Col>
      </Row>
    </Card>
  );
};

const AssistantClassAssignments = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [tugas, setTugas] = useState([
    {
      judul: "Tugas Pendahuluan 1",
      deskripsi: "Kerjakan di kertas folio menggunakan bolpen.",
      tenggat: "13/06/2022",
    },
    {
      judul: "Tugas Pendahuluan 2",
      deskripsi: "Peraturan: Kerjakan saja yah.",
      tenggat: "15/06/2022",
    },
    {
      judul: "Tugas Pendahuluan 3",
      deskripsi:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      tenggat: "24/06/2022",
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
                Tugas
              </h5>
              <Button
                className="d-inline p-2 m-1"
                variant="primary"
                onClick={handleShow}
              >
                + Tambah Tugas
              </Button>

              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Input Tugas</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form>
                    <Form.Group className="mb-3" controlId="ControlJudul">
                      <Form.Label>Judul</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Masukkan Judul Tugas"
                        autoFocus
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="ControlDeskripsi">
                      <Form.Label>Masukkan Deskripsi Tugas</Form.Label>
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
              {tugas.map((tugas, key) => (
                <TugasList
                  id={key}
                  judul={tugas.judul}
                  deskripsi={tugas.deskripsi}
                  tanggal={tugas.tenggat}
                />
              ))}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AssistantClassAssignments;
