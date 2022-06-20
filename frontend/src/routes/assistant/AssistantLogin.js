import React from "react";
import { Container, Button, Form, FloatingLabel } from "react-bootstrap";
import { Link } from "react-router-dom";

const AssistantLogin = () => {
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
        <Link to="/assistant/main/home" class="d-grid gap-2" style={{textDecoration: "none"}}>
          <Button size="lg" variant="outline-dark">Login</Button>
        </Link>
      </div>
    </Container>
  );
};

export default AssistantLogin;
