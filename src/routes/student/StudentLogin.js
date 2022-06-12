import React from "react";
import { Container, Button, Form, FloatingLabel } from "react-bootstrap";
import { Link } from "react-router-dom";

const StudentLogin = () => {
  return (
    <Container className="mt-3">
      <Form.Group>
        <FloatingLabel controlId="floatingEmail" label="Email" className="mb-3">
          <Form.Control type="text" placeholder="Email" name="email" />
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
            nname="password"
          />
        </FloatingLabel>
      </Form.Group>
      <div class="col-md-12 text-center">
        <Link to="/student/home">
          <Button variant="primary">Login</Button>
        </Link>
      </div>
    </Container>
  );
};

export default StudentLogin;
