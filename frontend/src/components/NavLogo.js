import React from "react";
import { Container, Navbar, Image } from "react-bootstrap";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const NavLogo = () => {
  return (
    <div>
      <Navbar>
        <Container>
          <Link to="/" style={{ textDecoration: "none" }}>
            <span
              style={{
                fontWeight: "bold",
                fontSize: "40px",
                color: "black",
              }}
            >
              VLab
            </span>
          </Link>

          <Image
            src={Logo}
            width="60"
            height="60"
            className="d-inline-block align-top"
            alt="VLab Logo"
          />
        </Container>
      </Navbar>
    </div>
  );
};

export default NavLogo;
