import React from "react";
import { Container, Card, Row, Col, Nav } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import NavLogo from "../components/NavLogo";

const LogInOption = () => {
  return (
    <>
    <NavLogo />
    <Container>
      <h3 className="mt-5 mb-3">
        <center>Masuk Sebagai</center>
      </h3>
      <Row className="justify-content-center">
        <Col xs={10} md={4}>
          <Card className="mx-2 shadow">
            <Card.Header>
              <Nav fill variant="pills">
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
