import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Navbar,
} from "react-bootstrap";
import BackButton from "../../../components/BackButton";

const StudentAssignments = () => {
  const [formValues, setFormValues] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const { id } = useParams();

  return (
    <div>
      <Navbar className="shadow py-3">
        <Container>
          <BackButton />
          <span style={{ fontWeight: "bold", fontSize: "30px" }}>
            <center>Tugas Pendahuluan 1</center>
          </span>
          <span style={{ fontWeight: "bold", fontSize: "40px" }}>
            <center></center>
          </span>
        </Container>
      </Navbar>
      <Container
        style={{
          marginTop: "20px",
          paddingLeft: "2.5rem",
          paddingRight: "2.5rem",
        }}
      >
        <Row>
          <Col
            xs={8}
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "30px",
            }}
          >
            <Card
              style={{
                marginBottom: "20px",
                borderRadius: "10px",
                padding: "15px",
              }}
              className="shadow-sm"
            >
              <Card.Header className="bg-white">
                <h6 style={{ float: "right", fontSize: "15px" }}>
                  Tenggat: 13/06/2022 23:59
                </h6>
              </Card.Header>
              <Card.Body>
                <h6>Detail</h6>
                Kerjakan di kertas folio menggunakan bolpen.
              </Card.Body>
            </Card>
          </Col>
          <Col
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "30px",
            }}
          >
            <Card
              style={{
                marginBottom: "20px",
                borderRadius: "10px",
                padding: "15px",
              }}
              className="shadow-sm"
            >
              <Card.Header className="bg-white">
                <h6 className="text-center" style={{ fontSize: "17px" }}>
                  Kumpulkan Tugas
                </h6>
              </Card.Header>
              <Card.Body>
                <Form>
                  <Form.Group className="mb-3" controlId="ControlFile">
                    <Form.Control
                      type="file"
                      name="file"
                      onChange={handleInputChange}
                      // value={formValues.file ? formValues.file : ""}
                    />
                  </Form.Group>
                </Form>
                <Link
                  to="/student/main/classes/assignments"
                  class="d-grid gap-2"
                  style={{ textDecoration: "none" }}
                >
                  <Button size="m" variant="outline-dark">
                    Submit
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default StudentAssignments;
