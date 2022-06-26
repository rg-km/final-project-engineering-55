import React, { useState, useEffect } from "react";
import { Container, Button, Form, FloatingLabel, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import USERS from "../../data/users.json";

const StudentLogin = () => {
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  
  const [ getEmail, setGetEmail ] = useState("");
  const [ getPassword, setGetPassword ] = useState("");

  const [ show, setShow ] = useState(false);
  const [ link, setLink ] = useState("");

  const handleEmail = (event) => {
    const email = event.target.value.toString();
    setEmail(email);
    const find = USERS.find((user) => user.email === email)
    setGetEmail(find.email);
  }

  const handlePassword = (event) => {
    const password = event.target.value.toString();
    setPassword(password);
    const find = USERS.find((user) => user.password === password)
    setGetPassword(find.password);
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    setShow(true);
    // console.log(email);
    // console.log(password)
    // console.log(getEmail)
    // console.log(getPassword)
  };

  useEffect(() => {
    if (email !== getEmail || password !== getPassword) {
      setLink("");
    } else if (email === "" && password === ""){
      setLink("");
    } else if (email === getEmail && password === getPassword) {
      setLink("/student/main/home");
    }
  }, [email, password]);

  return (
    <Container className="mt-3">
      <Alert variant="danger" show={show} onClose={() => setShow(false)} dismissible>
        <p>
          Wrong Email or Password
        </p>
      </Alert>
      <Form.Group>
        <FloatingLabel controlId="floatingEmail" label="Email" className="mb-3">
          <Form.Control
            type="text"
            placeholder="Email"
            name="email"
            onChange={handleEmail}
          />
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
            onChange={handlePassword}
          />
        </FloatingLabel>
      </Form.Group>
      <div className="col-md-12 text-center">
        <Link to={link} className="d-grid gap-2" style={{textDecoration: "none"}}>
          {(email !== getEmail || password !== getPassword) ?
          <Button
            size="lg"
            variant="outline-dark"
            onClick={handleSubmit}
          >Login</Button>
            :
          <Button
            size="lg"
            variant="outline-dark"
          >Login</Button>
          }
        </Link>
      </div>
    </Container>
  );
};

export default StudentLogin;
