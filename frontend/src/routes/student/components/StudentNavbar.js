import React from "react";
import { Container, Dropdown, DropdownButton, Form, Nav, Navbar } from 'react-bootstrap';
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
                <DropdownButton
                  id="dropdown-basic-button"
                  title="Logout"
                  variant="success"
                  >
                  <Dropdown.Item as={Link} to={"/"} >Logout?</Dropdown.Item>
                </DropdownButton>
                <StudentNavIcon />
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    );
};

export default StudentNavbar;
