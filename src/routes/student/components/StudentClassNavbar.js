import React from 'react'
import { Container, Form, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import StudentNavIcon from './StudentNavIcon';

const StudentClassNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container xs={4} md={4}>
        <Link to="/student/main/classes" style={{textDecoration: 'none'}}>
          <Navbar.Brand>Kembali</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to={"/student/main/classes/posts"} >Forum</Nav.Link>
            <Nav.Link as={Link} to={"/student/main/classes/assignments"} >Tugas Kelas</Nav.Link>
            <Nav.Link as={Link} to={"/student/main/classes/quiz"} >Kuis</Nav.Link>
            <Nav.Link as={Link} to={"/student/main/classes/members"} >Anggota</Nav.Link>
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
  )
}

export default StudentClassNavbar