import React from "react";
import { Image, Carousel, Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const StudentHome = () => {
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
              src="https://images.unsplash.com/photo-1499914485622-a88fac536970?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
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
              src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="Second slide"
              // style={{ height: "75vh" }}
            />
            <Carousel.Caption>
              <h3>Jangan sampai telat! Kumpulkan tugasmu sekarang.</h3>
              <p>
                Cek{" "}
                <Link
                  to="/student/main/classes/assignments"
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
              src="https://images.unsplash.com/photo-1489875347897-49f64b51c1f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="Third slide"
              // style={{ height: "75vh" }}
            />
            <Carousel.Caption>
              <h3>Sudah siap mengerjakan kuis?</h3>
              <p>
                Ayo, kerjakan sekarang. Jangan sampai telat. Cek{" "}
                <Link
                  to="/student/main/classes/quiz"
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

export default StudentHome;
