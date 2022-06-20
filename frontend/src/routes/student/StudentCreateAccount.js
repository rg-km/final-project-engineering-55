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
import NavLogo from "../../components/NavLogo";

const StudentCreateAccount = () => {
  return (
    <>
    <NavLogo />
    <Container>
      <Row className="justify-content-center">
        <Col xl={6} md={4} className="mt-4">
          <Card className="my-2 px-4 mx-5 py-3 shadow">
            <h5 className="mb-4 text-center">Lengkapi Profil Anda</h5>
            <Form.Group>
              <FloatingLabel
                controlId="floatingInput"
                label="Username"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  className="shadow-sm"
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
                <Form.Control
                type="email"
                className="shadow-sm"
                placeholder="Email"
                name="email" />
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
                  className="shadow-sm"
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
                  className="shadow-sm"
                  placeholder="Konfirmasi Password"
                  name="confirmPassword"
                />
              </FloatingLabel>
            </Form.Group>
            <div class="col-md-12 text-center">
              <Link to="/login/student" class="d-grid gap-2" style={{textDecoration: "none"}}>
                <Button size="lg" variant="outline-dark">Daftar</Button>
              </Link>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default StudentCreateAccount;
