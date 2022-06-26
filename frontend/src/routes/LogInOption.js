import React from "react";
import { Container, Card, Row, Col, Nav } from "react-bootstrap";
import Login from "../assets/Login.jpg";
import { Link, Outlet } from "react-router-dom";
import NavLogo from "../components/NavLogo";

const LogInOption = () => {
  return (
    <>
      <NavLogo />
      <Container>
        <Row className="justify-content-center">
          <Col>
            <img
              src={Login}
              alt="login-page"
              width={500}
              height={500}
              style={{ marginLeft: "3%" }}
            />
          </Col>
          <Col xs={10} md={4} style={{ marginRight: "12%" }}>
            <h4 className="mt-5 mb-3">
              <center>Masuk Sebagai</center>
            </h4>
            <Card className="mx-3 shadow-sm">
              <Card.Header>
                <Nav fill variant="pills" className="px-3 py-1">
                  <Nav.Item>
                    <Nav.Link href="#" as={Link} to="/login/assistant">
                      Asisten
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="##" as={Link} to="/login/student">
                      Murid
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Card.Header>
              <Card.Body className="px-1">
                <Outlet />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default LogInOption;
