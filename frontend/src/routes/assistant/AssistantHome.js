import React from "react";
import { Image, Carousel, Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const AssistantHome = () => {
  return (
    <Container>
      <Row>
        <Col>
          <br></br>
          <h1>
            <center>Selamat Datang</center>
          </h1>
        </Col>
      </Row>
      <Row>
        <Carousel className="mt-3">
          <Carousel.Item
            interval={2000}
            style={{
              marginTop: "10px",
              marginBottom: "100px",
              height: "50vh",
              width: "100%",
            }}
          >
            <Image
              fluid={true}
              rounded={true}
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1605379399843-5870eea9b74e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=898&q=80"
              alt="First slide"
              // style={{ height: "75vh", width: "100%" }}
            />
            <Carousel.Caption>
              <h3>Selamat Datang di VLab.</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item
            interval={2000}
            style={{
              marginTop: "10px",
              marginBottom: "100px",
              height: "50vh",
              width: "100%",
            }}
          >
            <Image
              fluid={true}
              rounded={true}
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=861&q=80"
              alt="Second slide"
              // style={{ height: "75vh" }}
            />
            <Carousel.Caption>
              <h3>Jangan lupa untuk beri tugas kepada muridmu, ya!</h3>
              <p>
                Buat{" "}
                <Link
                  to="/assistant/main/classes/assignments"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <strong>di sini.</strong>
                </Link>
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item
            interval={2000}
            style={{
              marginTop: "10px",
              marginBottom: "100px",
              height: "50vh",
              width: "100%",
            }}
          >
            <Image
              fluid={true}
              rounded={true}
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="Third slide"
              // style={{ height: "75vh" }}
            />
            <Carousel.Caption>
              <h3>Evaluasi muridmu dengan mengerjakan kuis.</h3>
              <p>
                Buat{" "}
                <Link
                  to="/assistant/main/classes/quiz"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <strong>di sini.</strong>
                </Link>
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Row>
    </Container>
  );
};

export default AssistantHome;
