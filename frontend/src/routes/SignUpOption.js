import React from "react";
import { Link } from "react-router-dom";
import { Card, Row, Col } from "react-bootstrap";
import { FaChalkboardTeacher } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
import "./SignUpOption.css";
import BackButton from "../components/BackButton";
import NavLogo from "../components/NavLogo";

const SignUpOption = () => {
  return (
    <div>
      <NavLogo />
      <main className="option-wrapper mt-4">
        <BackButton />
        <Row>
          <h4 className="option-heading">Pilih Akun</h4>
        </Row>
        <Row>
          <Link className="option-link" to="/sign-up-option/assistant">
            <Card className="option-card rounded-pill">
              <Row>
                <Col sm={3}>
                  <span className="option-icon">
                    <VscAccount size={60} className="mx-4 my-4" />
                  </span>
                </Col>
                <Col sm={9} className="option-content">
                  <p className="option-title">Sebagai Asisten</p>
                  <p className="option-body">
                    Akun untuk asisten, admin, guru, dan lainnya
                  </p>
                </Col>
              </Row>
            </Card>
          </Link>
        </Row>
        <br></br>
        <Row>
          <Link className="option-link" to="/sign-up-option/student">
            <Card className="option-card rounded-pill">
              <Row>
                <Col sm={3}>
                  <span className="option-icon">
                    <FaChalkboardTeacher size={60} className="mx-4 my-4" />
                  </span>
                </Col>
                <Col sm={9} className="option-content">
                  <p className="option-title">Sebagai Siswa</p>
                  <p className="option-body">
                    Akun untuk siswa, praktikan, parsitipan, member dan lainnya
                  </p>
                </Col>
              </Row>
            </Card>
          </Link>
        </Row>
        <br></br>
        <Row>
          <p align="right">
            Sudah punya akun?
            <Link to="/login" className="log-in-link">
              {" "}
              Log In
            </Link>
          </p>
        </Row>
      </main>
    </div>
  );
};

export default SignUpOption;
