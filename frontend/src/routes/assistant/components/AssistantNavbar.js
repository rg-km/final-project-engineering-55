import React from "react";
import { Container, Dropdown, DropdownButton, Form, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import AssistantNavIcon from "./AssistantNavIcon";

const style = (isActive) => ({
  fontWeight: isActive ? 600 : 400,
  color: isActive ? "gold" : "white",
  paddingBlock: 8,
  paddingInline: 16,
  borderRadius: 8,
  textDecoration: isActive ? "underline" : "none",
});

const PATHS = [
  { to: "/assistant/main/home", label: "Home" },
  { to: "/assistant/main/classes", label: "Kelas" },
];

const AssistantNavbar = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container xs={4} md={4}>
            <Navbar.Brand
              style={{fontSize: "35px", fontWeight: 600}}
            >VLab</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-lg-0"
                style={{ maxHeight: '100px', marginLeft:"100px", fontSize:"28px" }}
                navbarScroll
              >
                {PATHS.map((path) => (
                  <NavLink
                    key={path.to}
                    to={path.to}
                    style={({ isActive }) => style(isActive)}
                  >
                    {path.label}
                  </NavLink>
                ))}
              </Nav>
              <Form className="d-flex">
                <DropdownButton
                  id="dropdown-basic-button"
                  title="Logout"
                  variant="primary"
                  style={{ marginRight: "10px"}}
                  >
                  <Dropdown.Item as={Link} to={"/"} >Logout?</Dropdown.Item>
                </DropdownButton>
                <AssistantNavIcon />
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    );
};

export default AssistantNavbar;
