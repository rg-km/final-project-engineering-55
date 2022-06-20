import React from "react";
import { Link } from "react-router-dom";
import HomePageImage from "../assets/Student-work.png";
import { Button, Container, Row, Col } from "react-bootstrap";
import "./Homepage.css";
import NavLogo from "../components/NavLogo"

const Homepage = () => {
  return (
    <div>
      <NavLogo />
      <main className="main-wrapper">
        <Container>
          <Row>
            <Col>
              <h3 className="main-heading">
                Praktikum di mana saja, kapan saja, dan dengan siapa saja
              </h3>
              <p className="main-content">
                <strong>VLab</strong> adalah sebuah Learning Management System
                (LMS) yang dikembangkan khusus untuk memfasilitasi proses
                pembelajaran praktikum virtual atau tanpa tatap muka. Dengan
                fitur ini, asisten praktikum dapat memberikan bahan ajar yang
                dapat diakses dan dibagikan oleh siswa dalam bentuk digital
                kapan saja <br />
                dan di mana saja.
              </p>
              <footer className="main-footer">
                <Link to="/sign-up-option">
                  <Button
                    variant="outline-dark"
                    size="large"
                    className="main-footer-button"
                    style={{ marginRight: "10px" }}
                  >
                    Sign Up
                  </Button>
                </Link>
                <Link to="/login">
                  <Button
                    variant="outline-dark"
                    size="large"
                    className="main-footer-button"
                  >
                    Log In
                  </Button>
                </Link>
              </footer>
            </Col>
            <Col>
              <img src={HomePageImage} className="main-img" alt="home-page" />
            </Col>
          </Row>
        </Container>
      </main>
    </div>
  );
};

export default Homepage;
