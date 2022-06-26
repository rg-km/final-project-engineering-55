import React from "react";
import {
  Container,
  Dropdown,
  DropdownButton,
  Form,
  Nav,
  Navbar,
} from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import StudentNavIcon from "./StudentNavIcon";

const style = (isActive) => ({
  fontWeight: isActive ? 600 : 400,
  color: isActive ? "gold" : "white",
  paddingBlock: 8,
  paddingInline: 16,
  borderRadius: 8,
  textDecoration: isActive ? "underline" : "none",
});

const PATHS = [
  { to: "/student/main/home", label: "Home" },
  { to: "/student/main/classes", label: "Kelas" },
];

const StudentNavbar = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container xs={4} md={4}>
            <Navbar.Brand
              style={{ fontSize: "20px", fontWeight: 600 }}
            >VLab</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-lg-0"
                style={{
                  maxHeight: "100px",
                  marginLeft: "100px",
                  fontSize: "20px",
                }}
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
              style={{ marginRight: "10px" }}
            >
              <Dropdown.Item as={Link} to={"/"}>
                Logout?
              </Dropdown.Item>
            </DropdownButton>
            <StudentNavIcon />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default StudentNavbar;
