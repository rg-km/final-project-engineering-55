import React, { useState, useEffect } from "react";
import {
  Card,
  Col,
  Row,
  Form,
  Button,
  FloatingLabel,
  Container,
  Alert,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import NavLogo from "../../components/NavLogo";
import Register from "../../assets/Register.jpg";

const StudentCreateAccount = () => {
  const [ username, setUsername ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ confirmPassword, setConfirmPassword ] = useState("");

  const [ link, setLink ] = useState("");
  const [ show, setShow ] = useState(false);

  const handleUsername = (event) => {
    setUsername(event.target.value);
  }

  const handleEmail = (event) => {
    setEmail(event.target.value);
  }

  const handlePassword = (event) => {
    setPassword(event.target.value);
  }

  const handleConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setShow(true)
  };

  useEffect(() => {
    if (password !== confirmPassword) {
      setLink("");
    } else if (password === confirmPassword && username !=="" && email !== "" && password !== ""){
      setLink("/login/student");
    }
  }, [password, confirmPassword]);

  return (
    <>
    <NavLogo />
    <Container>
      <Row className="justify-content-center">
       <Col>
          <Col>
            <img
              src={Register}
              alt="register-page"
              width={505}
              height={503}
              style={{ marginLeft: "3%" }}
            />
          </Col>
        </Col>
        <Col xl={5} md={4} className="mt-4" style={{ marginRight: "8%" }}>
          <Card className="my-2 px-4 mx-5 py-3 shadow-sm">
            <h5 className="mb-4 text-center">Lengkapi Profil Anda</h5>
            <Alert variant="danger" show={show} onClose={() => setShow(false)} dismissible>
              <p>
                Password and Confirm Password doesn't match
              </p>
            </Alert>
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
                  onChange={handleUsername}
                  required
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
                name="email"
                onChange={handleEmail}
                required
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
                  className="shadow-sm"
                  placeholder="Password"
                  name="password"
                  onChange={handlePassword}
                  required
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
                  onChange={handleConfirmPassword}
                  required
                />
              </FloatingLabel>
            </Form.Group>
            <div className="col-md-12 text-center">
              <Link
                to={link}
                className="d-grid gap-2"
                style={{textDecoration: "none"}}>
                {(password === confirmPassword) ?
                  <Button
                    size="lg"
                    variant="outline-dark"
                  >Daftar</Button> :
                  <Button
                    size="lg"
                    variant="outline-dark"
                    onClick={handleSubmit}
                  >Daftar</Button>
                }
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
