import React from 'react'
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AssistantClassNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
          <Container fluid>
            <Link to="/assistant/main/classes" style={{textDecoration: 'none'}}>
            <Navbar.Brand>Kembali</Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link as={Link} to={"/assistant/main/classes/posts"} >Forum</Nav.Link>
                <Nav.Link as={Link} to={"/assistant/main/classes/assignments"} >Tugas Kelas</Nav.Link>
                <Nav.Link as={Link} to={"/assistant/main/classes/quiz"} >Kuis</Nav.Link>
                <Nav.Link as={Link} to={"/assistant/main/classes/members"} >Anggota</Nav.Link>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
  )
}

export default AssistantClassNavbar
