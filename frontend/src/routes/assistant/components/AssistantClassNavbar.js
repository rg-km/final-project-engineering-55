import React from 'react'
import { Container, Dropdown, DropdownButton, Form, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AssistantNavIcon from './AssistantNavIcon';

const AssistantClassNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container xs={4} md={4}>
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
            <DropdownButton
              id="dropdown-basic-button"
              title="Logout"
              variant="success"
              >
              <Dropdown.Item as={Link} to={"/"} >Logout?</Dropdown.Item>
            </DropdownButton>
            <AssistantNavIcon />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default AssistantClassNavbar
