import React from 'react'
import { Container, Navbar } from "react-bootstrap";
import Logo from "../assets/logo.png";

const NavLogo = () => {
  return (
    <div>
      <Navbar bg="light" className="shadow">
        <Container>
          <span style={{fontFamily: "sans-serif", fontWeight: "bold", fontSize:"40px"}}>
            VLab
          </span>
          <img
            src={Logo}
            width="60"
            height="60"
            className="d-inline-block align-top"
            alt="VLab Logo"
          />
        </Container>
      </Navbar>
    </div>
  )
}

export default NavLogo
