import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import BackButton from "../../../components/BackButton";

const StudentAssignments = () => {
  const [formValues, setFormValues] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const { id } = useParams();

  return (
    <Container
      style={{
        paddingLeft: "2.5rem",
        paddingRight: "2.5rem",
      }}
    >
      <h2 className="text-center mb-3 mt-3" style={{ float: "center" }}>
        <div style={{ float: "left" }}>
          <BackButton />
        </div>
        Judul Tugas
      </h2>
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
              <h6 style={{ float: "right", fontSize: "17px" }}>
                Tenggat: xx/xx/xxxx xx:xx
              </h6>
            </Card.Header>
            <Card.Body>
              <h6>Detail</h6>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
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
            className="shadow"
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
  );
};

export default StudentAssignments;
