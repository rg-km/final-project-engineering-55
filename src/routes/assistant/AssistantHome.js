import React from "react";
import { Image, Carousel, Row, Col, Container } from "react-bootstrap";
// import { Route } from "react-router-dom";

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
      <Row
        style={{
          marginBottom: "3%",
        }}
      >
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
              src="https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80"
              alt="First slide"
              // style={{ height: "75vh", width: "100%" }}
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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
              src="https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              alt="Second slide"
              // style={{ height: "75vh" }}
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
              src="https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
              alt="Third slide"
              // style={{ height: "75vh" }}
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Row>
    </Container>
  );
};

export default AssistantHome;
