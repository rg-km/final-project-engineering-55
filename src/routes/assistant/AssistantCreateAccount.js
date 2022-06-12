import React from "react";
import {
  Card,
  Col,
  Row,
  Form,
  Button,
  FloatingLabel,
  Container,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const AssistantCreateAccount = () => {
  return (
    <Container>
      <h1 className="mt-3">
        <center>VLab</center>
      </h1>
      <Row className="justify-content-center">
        <Col xs={10} md={4}>
          <Card className="my-5 px-5 mx-3 py-3">
            <h4 className="mb-4 text-center">Lengkapi Profil Anda</h4>
            <Form.Group>
              <FloatingLabel
                controlId="floatingInput"
                label="Username"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  placeholder="Username"
                  name="username"
                />
              </FloatingLabel>
            </Form.Group>
            <Form.Group>
              <FloatingLabel
                controlId="floatingEmail"
                label="Email"
                className="mb-3"
              >
                <Form.Control type="email" placeholder="Email" name="email" />
              </FloatingLabel>
            </Form.Group>
            <Form.Group>
              <FloatingLabel
                controlId="floatingPassword"
                label="Password"
                className="mb-3"
              >
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                />
              </FloatingLabel>
            </Form.Group>
            <Form.Group>
              <FloatingLabel
                controlId="floatingPassword"
                label="Konfirmasi Password"
                className="mb-3"
              >
                <Form.Control
                  type="password"
                  placeholder="Konfirmasi Password"
                  name="confirmPassword"
                />
              </FloatingLabel>
            </Form.Group>
            <div class="col-md-12 text-center">
              <Link to="/login">
                <Button variant="primary">Daftar</Button>
              </Link>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AssistantCreateAccount;
