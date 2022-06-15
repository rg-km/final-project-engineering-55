import React from "react";
import { Container, Form, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import StudentNavIcon from "./StudentNavIcon";

const StudentNavbar = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container xs={4} md={4}>
            <Navbar.Brand>VLab</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link as={Link} to={"/student/main/home"} >Home</Nav.Link>
                <Nav.Link as={Link} to={"/student/main/classes"} >Kelas</Nav.Link>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <StudentNavIcon />
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    );
};

export default StudentNavbar;
